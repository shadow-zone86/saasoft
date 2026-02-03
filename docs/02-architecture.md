# Глава 2: Архитектурные решения 🏗️

> Обзор архитектуры, принципы SOLID (в рамках фронтенда) и практики масштабирования

---

## 📐 Обзор

Проект опирается на:

1. **Feature-Sliced Design (FSD)** — организация кода по слоям/слайсам
2. **SOLID** — как набор практик для модулей, composables, store и UI
3. **Dependency Inversion через DI** — зависимости передаются через `provide/inject` и интерфейсы

Это даёт:

- **масштабирование**: новые страницы/виджеты/фичи добавляются без “кома” зависимостей
- **тестируемость**: чистые функции/мапперы/валидаторы легко покрывать unit-тестами
- **поддерживаемость**: UI ≠ store ≠ преобразования данных ≠ валидация

---

## 🎯 SOLID (прикладной фронтенд-вариант)

### S — Single Responsibility

Примеры разделения ответственностей:

- **валидация** в `features/*/lib/validate*.ts`
- **маппинг** `form ↔ stored` в `entities/account/lib/mappers/*`
- **хранилище** в `entities/account/model/store/accountsStore.ts`
- **UI** в `shared/ui`, `entities/*/ui`, `widgets/*/ui`

### O — Open/Closed

Таблица расширяется декларативно:

- колонки описаны в `entities/account/config/constants.ts`
- компоненты ячеек и валидаторы задаются конфигом в `widgets/accounts-list/lib/accountTableConfig.ts`

Добавление нового поля обычно = добавить колонку + компонент ячейки + валидатор.

### D — Dependency Inversion

Код верхнего уровня зависит от абстракций:

- `AccountsRepository` объявлен интерфейсом и доступен через `inject`
- конкретная реализация репозитория предоставляется провайдером в `app/providers/store.ts`

Это упрощает замену реализации (например, переход с localStorage на API).

---

## 🧩 Модули, которые делают проект “чистым”

### 1) Репозиторий (порт) для работы со списком аккаунтов

`entities/account/lib/repository/accountsRepository.ts` задаёт контракт:

- получить `formRows`
- добавить/удалить/сохранить
- найти строку по `id`

### 2) Мапперы

Хранилище держит `StoredAccount`, форма работает с `AccountFormRow`.

Мапперы:

- `formToStored` — приводит форму к формату хранения (включая `password: null` для LDAP)
- `storedToForm` — приводит из хранения в формат формы (строка labels)

### 3) Валидаторы

Валидация “атомарная” (по полям) и собирается в единую проверку строки:

- `validateRequiredMaxLength` (shared helper)
- `validateLogin / validatePassword / validateLabels` (features)
- `validateAccount` (widget-level сборка)

---

## 📚 См. также

- [Глава 3: FSD принципы](./03-fsd-principles.md)
- [Глава 4: DI и паттерны](./04-di-and-patterns.md)

