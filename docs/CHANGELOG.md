# Changelog

Все значимые изменения в проекте документируются в этом файле.

Формат основан на [Keep a Changelog](https://keepachangelog.com/ru/1.0.0/),
проект придерживается [Semantic Versioning](https://semver.org/lang/ru/).

## [Unreleased]

### Added

- Документация проекта в формате глав:
  - [01-quick-start.md](./01-quick-start.md) — установка и запуск
  - [02-architecture.md](./02-architecture.md) — обзор архитектуры
  - [03-fsd-principles.md](./03-fsd-principles.md) — правила FSD
  - [04-di-and-patterns.md](./04-di-and-patterns.md) — DI и паттерны
  - [CHANGELOG.md](./CHANGELOG.md) — история изменений
- FSD-границы в ESLint: запрет импортов “вверх” по слоям
- `PageLoader` (shared/ui) + `usePageLoader` (shared/lib) для первой загрузки
- Storybook stories для `BaseModal`
- `AccountsHeader` (заголовок + кнопка добавления), `AccountsEmpty` (пустое состояние)
- `precommit:check` (lint-staged → type-check → test → build) для единообразного запуска проверок перед коммитом

### Changed

- README обновлён: оглавление, быстрый старт, ссылки на `docs/`
- Обновлён UI (токены/тени/фокус) и стили базовых компонентов (`BaseButton`, `BaseInput`, `BaseSelect`, `BaseModal`)
- `AccountsHint` принимает текст через проп (по умолчанию — текст из ТЗ)
- `build:analyze` теперь автоматически открывает отчёт `dist/stats.html` в браузере
- `BaseModal`: закрытие по клику на backdrop и по `Escape`, блокировка скролла страницы, улучшения a11y (`aria-modal`, `aria-labelledby`)
- Husky: хук `pre-commit` переведён на запуск через `npm run precommit:check`
- Husky: `prepare` переведён на `husky install`

### Fixed

- Storybook сборка в ESM: замена `__dirname` на путь через `import.meta.url`
- Исправлены SCSS-ошибки, связанные с повторным `@use "sass:color"`

## [0.1.0] — 2026-02-03

### Added

- Vue 3 + TypeScript + Vite
- Pinia + persistedstate (хранение аккаунтов в localStorage)
- Архитектура FSD: `app`, `pages`, `widgets`, `features`, `entities`, `shared`
- Accounts UI: таблица, добавление/удаление, валидация, маскирование пароля для LDAP
- UI-kit в `shared/ui` + Storybook
 

