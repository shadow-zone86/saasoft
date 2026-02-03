# Глава 3: FSD принципы 🎯

> Feature-Sliced Design — методология организации кода для масштабируемых приложений

---

## 🎯 Слои и направление зависимостей

Слои:

```
app/        ← инициализация приложения, провайдеры, роутер
pages/      ← страницы
widgets/    ← крупные UI-блоки (композиция features + entities)
features/   ← пользовательские сценарии / функциональность
entities/   ← бизнес-сущности (данные, store, мапперы, базовый UI)
shared/     ← переиспользуемый код (ui-kit, helpers, styles)
```

Разрешённое направление зависимостей:

```
app → pages → widgets → features → entities → shared
```

---

## ✅ Правила (коротко)

- **shared** не импортирует ничего из верхних слоёв
- **entities** не импортируют `features/widgets/pages/app`
- **features** не импортируют `widgets/pages/app`
- **widgets** не импортируют `pages/app`
- **pages** не импортируют `app`

В проекте это правило **автоматически проверяется ESLint** (см. `eslint.config.js`, `no-restricted-imports`).

---

## 📁 Как это выглядит в Saasoft

### app/

- `src/main.ts` — создание приложения, подключение store/router
- `src/app/providers/store.ts` — Pinia + предоставление `AccountsRepository`

### pages/

- `src/pages/accounts/ui/AccountsPage.vue` — компоновка виджетов страницы

### widgets/

- `widgets/accounts-header` — заголовок + кнопка добавления
- `widgets/accounts-hint` — подсказка по меткам
- `widgets/accounts-list` — таблица аккаунтов + DI для валидаторов/компонент колонок

### features/

Фичи реализованы как “ячейки таблицы”:

- `account-cell-*` — редактирование конкретного поля и его валидация
- `add-account` — добавление пустой записи

### entities/

`entities/account` содержит:

- `model/store/accountsStore.ts` — Pinia store (persisted)
- `model/types.ts` — типы формы и хранения
- `lib/mappers/*` — преобразования
- `lib/composables/*` — логика работы ячеек
- `ui/*` — строки/хедер таблицы/пустое состояние

---

## 🚫 Анти-паттерны

- **импорт “вверх” по слоям** (например, `entities → features`) — ломает масштабирование
- **бизнес-логика в UI** — усложняет тестирование и поддержку
- **импорт “вглубь” слайса** вместо public API (`index.ts`) — ломает инкапсуляцию

---

## 📚 См. также

- [Глава 2: Архитектурные решения](./02-architecture.md)
- [Глава 4: DI и паттерны](./04-di-and-patterns.md)

