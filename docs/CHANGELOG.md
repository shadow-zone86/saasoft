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

### Changed

- README обновлён: оглавление, быстрый старт, ссылки на `docs/`

## [0.1.0] — 2026-02-03

### Added

- Vue 3 + TypeScript + Vite
- Pinia + persistedstate (хранение аккаунтов в localStorage)
- Архитектура FSD: `app`, `pages`, `widgets`, `features`, `entities`, `shared`
- Accounts UI: таблица, добавление/удаление, валидация, маскирование пароля для LDAP
- UI-kit в `shared/ui` + Storybook
- PageLoader (первичная загрузка страницы)

