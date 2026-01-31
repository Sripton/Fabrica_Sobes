// Абстрактный класс для всех геометрических фигур
// наследуемся от EventTarget -> доступные методы (addEventListener(), removeEventListener(), dispatchEvent())
import type { ShapeType } from "../shape/shapeTypes";
let FORM_ID = 0; // cсчетчик для присвоения каждому объекту свой id

export abstract class Form extends EventTarget {
  // свойства класса
  public readonly id: number; // id обекта
  public readonly type: ShapeType; // тип объекта

  // констурктор объекта для создания конктерных фигур
  protected constructor(type: ShapeType) {
    super(); // вызываем EventTarget
    this.id = ++FORM_ID;
    this.type = type;
  }

  // изменение фигуры. для фронта
  protected formChange(): void {
    this.dispatchEvent(
      new CustomEvent("change", {
        detail: { id: this.id, type: this.type },
      }),
    );
  }
}
 