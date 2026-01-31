import { Form } from "../core/Form";

export class Circle extends Form {
  private _radius: number;

  // если необходим доступ к параметрам  _radius
    public get radius(): number {
      return this._radius;
    }

  constructor(radius: number) {
    super("circle");
    this.validateParametrs(radius, "radius");
    this._radius = radius;
  }

  // метод изменения  радиуса
  public setSize(radius: number): void {
    this.validateParametrs(radius, "radius");
    this._radius = radius;
    this.formChange();
  }

  // метод нахождения диаметра окружности
  public getDiameter(): number {
    return 2 * this._radius;
  }

  // метод нахождения площади окружности
  public getArea(): number {
    return Math.PI * this._radius * this._radius;
  }

  // метод нахождения длины окружности
  public getCircumference(): number {
    return 2 * Math.PI * this._radius;
  }

  private validateParametrs(value: number, name: string): void {
    if (!Number.isFinite(value) || value <= 0) {
      throw new RangeError(`Недопустимое значение для ${name}`);
    }
  }
}
