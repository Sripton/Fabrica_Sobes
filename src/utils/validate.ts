// метод провреки на допустимые значения
export function validateParametrs(value: number, name: string): void {
  if (!Number.isFinite(value) || value <= 0) {
    throw new RangeError(`Недопустимое значение для ${name}`);
  }
}

// допустимые значения для треугольника
// сумма двух сторон > третей
export function validate(a: number, b: number, c: number): void {
  validateParametrs(a, "a");
  validateParametrs(b, "b");
  validateParametrs(c, "c");

  // неравенство треугольника
  if (a + b <= c || a + c <= b || b + c <= a) {
    throw new RangeError("Недопустимые значения сторон треуголника");
  }
}
