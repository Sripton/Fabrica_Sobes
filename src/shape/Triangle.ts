import { Form } from "../core/Form";
import { validateParametrs, validateTriangleInequality } from "../utils/validate";
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
    validateParametrs(a, "a");
    validateParametrs(b, "b");
    validateParametrs(c, "c");
    this._a = a;
    this._b = b;
    this._c = c;
  }

  // метод изменения сторон треугольника
  public setSize(a: number, b: number, c: number): void {
    validateTriangleInequality(a, b, c);
    this._a = a;
    this._b = b;
    this._c = c;
    this.formChange();
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
}
