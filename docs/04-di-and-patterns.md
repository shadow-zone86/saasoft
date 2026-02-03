# Глава 4: DI и паттерны 🧩

> DI через `provide/inject` и практики, которые упрощают расширение проекта

---

## 🧩 Dependency Injection (DI) в проекте

Вместо “жёстких” импортов конкретной реализации, код зависит от **контрактов** и получает реализацию извне.

В Saasoft используется DI на уровне Vue:

- токены `InjectionKey` в `entities/account/lib/*/injection/*.ts`
- предоставление зависимостей через `provide(...)` в `app` или `widgets`

---

## 🗂️ Репозиторий аккаунтов (порт)

Контракт репозитория описан интерфейсом `AccountsRepository`:

- `formRows`
- `addEmpty()`, `remove(id)`, `save(row)`
- `getFormRowById(id)`

Токен:

- `ACCOUNTS_REPOSITORY_KEY`

Регистрация:

- `src/app/providers/store.ts` создаёт Pinia и предоставляет реализацию репозитория:
  - `app.provide(ACCOUNTS_REPOSITORY_KEY, useAccountsStore(pinia))`

Использование:

- `useAccountsRepository()` внутри entities/features/widgets

Идея: UI/компосейблы не знают “что там внутри” (Pinia/localStorage/API) — только контракт.

---

## 🔀 Валидация как зависимость

Валидация строки аккаунта предоставляется виджетом:

- токен `VALIDATE_ACCOUNT_KEY` (entities)
- реализация `validateAccount` (widgets/accounts-list/lib)

Это позволяет:

- держать сборку валидаторов на уровне виджета
- использовать единый `useAccountCellField` без знания конкретных правил

---

## 🧱 Паттерны, которые уже есть

### Mapper

Преобразования данных вынесены отдельно:

- `entities/account/lib/mappers/formToStored.ts`
- `entities/account/lib/mappers/storedToForm.ts`

### Strategy (в простом виде)

Смена типа аккаунта влияет на правила пароля:

- для `ldap` пароль не нужен и не хранится (`null`)
- для `local` пароль обязателен

Это реализовано через валидатор и маппер.

### “Config as code”

Таблица описана конфигом:

- какие колонки показывать
- какие компоненты и валидаторы соответствуют колонкам


---

## ✅ Практика масштабирования (куда развивать)

Если появится бэкенд:

1. сделать новую реализацию `AccountsRepository` (например, на основе API + кеш)
2. предоставить её вместо Pinia-реализации в `app/providers/*`
3. UI и features останутся прежними

---

## 📚 См. также

- [Глава 2: Архитектурные решения](./02-architecture.md)
- [Глава 3: FSD принципы](./03-fsd-principles.md)

