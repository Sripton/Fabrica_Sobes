import { ShapeType } from "./shape/shapeTypes";
import { Rectangle } from "./shape/Rectangle";
import { Circle } from "./shape/Circle";
import { Triangle } from "./shape/Triangle";
import { Form } from "./core/Form";

export type CreateParams =
  | { type: "rectangle"; width: number; height: number }
  | { type: "circle"; radius: number }
  | { type: "triangle"; a: number; b: number; c: number };

// единый способ создания структуры, позволяющей идентифицировать  создаваемую фигуру
export function createShape(params: CreateParams): Form {
  switch (params.type) {
    case "rectangle":
      return new Rectangle(params.width, params.height);
    case "circle":
      return new Circle(params.radius);
    case "triangle":
      return new Triangle(params.a, params.b, params.c);
    default:
      throw new Error("Не поддерживаемый параметр");
  }
}
