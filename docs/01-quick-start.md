# Глава 1: Быстрый старт 🚀

> Всё, что нужно, чтобы запустить Saasoft за 5 минут

---

## 📋 Требования

- **Node.js** — версия 18.x или выше
- **npm** — версия 9.x или выше

Проверка версий:

```bash
node --version
npm --version
```

---

## 🚀 Установка

```bash
npm install
```

---

## ▶️ Запуск

### Режим разработки

```bash
npm run dev
```

Vite выведет адрес (обычно `http://localhost:5173`, но порт может сместиться, если занят).

### Сборка

```bash
npm run build
```

### Проверки

```bash
npm run type-check
npm run lint
npm test
```

### Storybook

```bash
npm run storybook
npm run build-storybook
```

---

## 📁 Структура проекта (FSD)

```
src/
├── app/           # Инициализация, провайдеры (Pinia), роутер, App.vue
├── pages/         # Страницы (Accounts)
├── widgets/       # Виджеты (header/hint/list)
├── features/      # Фичи (ячейки таблицы, добавление/удаление)
├── entities/      # Сущности (Account: store, types, mappers, ui)
└── shared/        # UI-kit, helpers, styles, composables (PageLoader)
```

---

## ❓ Решение проблем

### Порт уже занят

Vite автоматически выберет следующий порт и выведет новый URL в консоль.

### Не собирается Storybook

Проект в режиме ESM (`"type": "module"`). В `.storybook/main.ts` нельзя использовать `__dirname` — путь должен вычисляться через `import.meta.url`.

---

## 🎯 Следующие шаги

- [Глава 2: Архитектурные решения](./02-architecture.md)
- [Глава 3: FSD принципы](./03-fsd-principles.md)
- [Глава 4: DI и паттерны](./04-di-and-patterns.md)

