# Fabrica_Sobes — геометрические фигуры

Небольшая библиотека для создания и работы с геометрическими фигурами. Фигуры — это классы, которые наследуются от общего абстрактного класса `Form` и умеют считать площадь, периметр (если применимо) и уведомлять об изменениях через событие `change`.

## Быстрый старт

### Подключение

Публичный API библиотеки экспортируется из `src/index.ts`.

Пример импорта:

````ts
import {
  Rectangle,
  Circle,
  Triangle,
  createShape,
  SHAPE_TYPES,
} from "./src";

### Создание фигуры

```ts
const rect = new Rectangle(10, 5);
const circle = new Circle(7);
const triangle = new Triangle(3, 4, 5);
````

Или через фабрику:

```ts
const rect = createShape({ type: "rectangle", width: 10, height: 5 });
const circle = createShape({ type: "circle", radius: 7 });
const triangle = createShape({ type: "triangle", a: 3, b: 4, c: 5 });
```

### Подписка на change

Все фигуры наследуются от `Form`, а `Form` наследуется от `EventTarget`. Событие `change` срабатывает, когда вызываются методы изменения параметров (`setSize`).

```ts
const rect = new Rectangle(10, 5);

rect.addEventListener("change", (event) => {
  const detail = (event as CustomEvent).detail;
  console.log("Изменена фигура:", detail.id, detail.type);
});

rect.setSize(20, 8);
```

`detail` события содержит:

- `id` — уникальный id объекта
- `type` — тип фигуры (`"rectangle" | "circle" | "triangle"`)

## Классы и API

### `Form` (абстрактный)

- `id: number` — уникальный идентификатор фигуры.
- `type: ShapeType` — тип фигуры.
- `protected formChange(): void` — отправляет событие `change`.

Наследникам доступна логика событий через `EventTarget`.

### `Rectangle`

```ts
new Rectangle(width: number, height: number)
```

Методы:

- `setSize(width: number, height: number): void` — изменить стороны и вызвать `change`.
- `getPerimeter(): number` — периметр.
- `getArea(): number` — площадь.

Свойства:

- `width: number` (get)
- `height: number` (get)

Ограничения: `width` и `height` должны быть числами > 0.

### `Circle`

```ts
new Circle(radius: number)
```

Методы:

- `setSize(radius: number): void` — изменить радиус и вызвать `change`.
- `getDiameter(): number` — диаметр.
- `getArea(): number` — площадь.
- `getCircumference(): number` — длина окружности.

Свойства:

- `radius: number` (get)

Ограничения: `radius` должен быть конечным числом > 0.

### `Triangle`

```ts
new Triangle(a: number, b: number, c: number)
```

Методы:

- `setSize(a: number, b: number, c: number): void` — изменить стороны и вызвать `change`.
- `getPerimeter(): number` — периметр.
- `getArea(): number` — площадь (по формуле Герона).

Свойства:

- `a: number` (get)
- `b: number` (get)
- `c: number` (get)

Ограничения:

- все стороны должны быть числами > 0
- выполняется неравенство треугольника: `a + b > c`, `a + c > b`, `b + c > a`

### `createShape`

Фабрика для создания фигур по параметрам:

```ts
type CreateParams =
  | { type: "rectangle"; width: number; height: number }
  | { type: "circle"; radius: number }
  | { type: "triangle"; a: number; b: number; c: number };

createShape(params: CreateParams): Form
```

### `SHAPE_TYPES`

Удобные строковые константы типов:

```ts
SHAPE_TYPES.RECTANGLE; // "rectangle"
SHAPE_TYPES.CIRCLE; // "circle"
SHAPE_TYPES.TRIANGLE; // "triangle"
```

## Пример расширения (словами)

Чтобы добавить новую фигуру, например `Square`:

1. Создайте класс `Square` и унаследуйте его от `Form`.
2. В конструкторе вызывайте `super("square")` и валидируйте входные параметры.
3. Реализуйте методы (например, `setSize`, `getArea`, `getPerimeter`) и вызывайте `this.formChange()` при изменениях.
4. Добавьте новый тип в `shapeTypes.ts` и обновите `createShape` (и тип `CreateParams`).
5. Экспортируйте класс в `src/index.ts`.

Новая фигура будет работать с общей системой событий и фабрикой.
