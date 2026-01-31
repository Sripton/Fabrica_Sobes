import { Form } from "../core/Form";

export class Rectangle extends Form {
  private _width: number;
  private _height: number;

  // если необходим доступ к параметрам _width
  public get width(): number {
    return this._width;
  }

  // если необходим доступ к параметрам _height
  public get height(): number {
    return this._height;
  }

  constructor(width: number, height: number) {
    super("rectangle");
    this.validateParametrs(width, "width"); // валидация ширины
    this.validateParametrs(height, "height"); // валидация длины
    this._width = width; // инициализация ширины
    this._height = height; // инициализация длины
  }

  // метод изменения сторон прмямоугольника
  public setSize(width: number, height: number): void {
    this.validateParametrs(width, "width"); // валидация новой ширины
    this.validateParametrs(height, "height"); // валидация новой длины
    this._width = width; // инициализация новой ширины
    this._height = height; // инициализация новой длины
    // вызывем метод formChange
    this.formChange();
  }

  // метод нахождения периметра прямоугольника
  public getPerimeter(): number {
    return 2 * this._width + 2 * this._height;
  }

  // метод нахождения площади прямоугольника
  public getArea(): number {
    return this._width * this._height;
  }

  // метод провреки на допустимые значения прямоунольника
  private validateParametrs(value: number, name: "width" | "height"): void {
    if (
      // NaN, Infinity, -Infinity
      !Number.isFinite(value) ||
      value <= 0
    ) {
      throw new RangeError(`Недопустимое значение для ${name}`);
    }
  }
}
