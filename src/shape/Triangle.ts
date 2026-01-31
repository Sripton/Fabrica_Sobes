import { Form } from "../core/Form";

export class Triangle extends Form {
  private _a: number;
  private _b: number;
  private _c: number;

  public get a(): number {
    return this._a;
  }
  public get b(): number {
    return this._b;
  }
  public get c(): number {
    return this._c;
  }

  constructor(a: number, b: number, c: number) {
    super("triangle");
    this.validateParametrs(a, "a");
    this.validateParametrs(b, "b");
    this.validateParametrs(c, "c");
    this._a = a;
    this._b = b;
    this._c = c;
  }

  // метод изменения сторон треугольника
  public setRadius(a: number, b: number, c: number): void {
    this.validate(a, b, c);
    this._a = a;
    this._b = b;
    this._c = c;
    this.formChange();
  }

  // сумма двух сторон > третей
  private validate(a: number, b: number, c: number): void {
    this.validateParametrs(a, "a");
    this.validateParametrs(b, "b");
    this.validateParametrs(c, "c");

    // неравенство треугольника
    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new RangeError("Недопустимые значения сторон треуголника");
    }
  }

  // метод нахождения периметра треугольника
  public getPerimeter(): number {
    return this._a + this._b + this._c;
  }

  // метод нахождения площади треугольника
  public getArea(): number {
    const p = (this._a + this._b + this._c) / 2;
    return Math.sqrt(p * (p - this._a) * (p - this._b) * (p - this._c));
  }

  // метод провреки на допустимые значения треугольника
  private validateParametrs(value: number, name: string): void {
    if (!Number.isFinite(value) || value <= 0) {
      throw new RangeError(`Недопустимое значение для ${name}`);
    }
  }
}
