# Учетные записи (Saasoft)

Форма управления учётными записями на **Vue 3**, **TypeScript**, **Pinia** с архитектурой **FSD**.

Коротко: README — входная точка, детали лежат в [`docs/`](./docs/).

## Стек

- **Vue 3** + Composition API
- **TypeScript**
- **Pinia** (состояние + сохранение в localStorage)
- **Vite**
- **Storybook** (UI-kit в `shared/ui`)

## Документация

### Часть I — Быстрый старт

- [Глава 1: Быстрый старт](./docs/01-quick-start.md)

### Часть II — Архитектура

- [Глава 2: Архитектурные решения](./docs/02-architecture.md)
- [Глава 3: FSD принципы](./docs/03-fsd-principles.md)
- [Глава 4: DI и паттерны](./docs/04-di-and-patterns.md)

### История изменений

- [CHANGELOG](./docs/CHANGELOG.md)

## Структура (FSD)

```
src/
├── app/           # Инициализация, провайдеры (Pinia), роутер, App.vue
├── pages/         # Страницы (Accounts)
├── widgets/       # Композиция UI блоков (header/hint/list)
├── features/      # Пользовательские сценарии (ячейки таблицы, add/delete)
├── entities/      # Account: types, store, mappers, composables, UI
└── shared/        # UI-kit, helpers, styles, composables (PageLoader)
```

Подробнее: [FSD принципы](./docs/03-fsd-principles.md).

## Правила зависимостей (FSD)

В проекте включены ESLint-правила, которые **запрещают импорт “вверх” по слоям** (FSD-границы проверяются автоматически).

## Стили (SCSS)

- **Препроцессор:** во всех компонентах используется `lang="scss"`.
- **Палитра и переменные:** `src/shared/styles/_variables.scss` — цвета (`$color-primary`, `$color-text-*`, `$color-border-*`, `$color-bg-*`, `$color-danger`, `$color-focus` и т.д.), шкала отступов по 4px (`$spacing-xs` … `$spacing-xxl`), типографика, брейкпоинты, радиусы.
- **Миксины:** `shared/styles/mixins/` — `flex` (flex, flex-center, flex-row, flex-col, flex-between), `font` (font-size), `media` (media-min-*, media-max-*), `spacing` (padding, margin, padding-x/y, gap, spacing-padding и т.д.).
- **Глобальные стили:** `shared/styles/global.scss` подключается в `main.ts`; сброс box-sizing, базовый шрифт и цвет фона страницы.
- **Автоподключение переменных/миксинов:** в Vite и Storybook через `css.preprocessorOptions.scss.additionalData` и `loadPaths` во все `.vue` и `.scss` файлы автоматически подмешиваются переменные и миксины — в компонентах можно сразу писать `$color-primary`, `@include flex-center` и т.п.

## Запуск

```bash
# Установка зависимостей
npm install

# Режим разработки
npm run dev

# Сборка
npm run build
npm run build:analyze   # сборка + отчёт по размеру бандла (dist/stats.html, откроется в браузере)

# Проверки
npm run type-check      # проверка типов (vue-tsc)
npm run lint            # ESLint
npm run lint:fix        # ESLint с автоисправлением
npm run test            # Vitest (один прогон)
npm run test:watch      # Vitest в watch-режиме
npm run test:coverage   # Vitest с покрытием

# Pre-commit (Husky)
# При коммите автоматически запускается `npm run precommit:check`:
# lint-staged → type-check → test → build

# Storybook
npm run storybook
npm run build-storybook
```

Подробно: [Глава 1: Быстрый старт](./docs/01-quick-start.md).

## Логика формы

- **Добавление:** кнопка «+» добавляет в конец списка новую пустую запись (Метки, Тип записи, Логин, Пароль).
- **Удаление:** кнопка удаления полностью удаляет учётную запись.
- **Валидация:** при потере фокуса (текст) или смене значения (селект) проверяются обязательные поля; при ошибках — красная обводка.
- **Сохранение:** при успешной валидации запись сохраняется/обновляется в Pinia; при перезагрузке страницы данные подставляются из localStorage.
- **Метки:** в хранилище сохраняются как массив объектов `[{ text: "элемент" }, ...]`, в форме — строка с разделителем `;`.

## Поля учётной записи

| Поле         | Обязательное | Ограничения | Примечание |
|-------------|--------------|-------------|------------|
| Метки       | Нет          | макс. 50 символов | Несколько меток через `;` |
| Тип записи  | —            | LDAP / Локальная | LDAP → пароль скрыт и сохраняется как `null` |
| Логин       | Да           | макс. 100 символов | |
| Пароль      | Да (только для «Локальная») | макс. 100 символов | Для LDAP не отображается и не сохраняется |
