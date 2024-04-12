// Реалізуйте клас, що описує геометричну фігуру з властивостями та методами:
// ■ get-властивість для отримання назви фігури;
// ■ метод для виведення інформації про фігуру (сторони та їх
// довжина);
// ■ метод для обчислення площі фігури;
// ■ метод для обчислення периметра фігури.
// Реалізуйте класи-спадкоємці: квадрат, прямокутник, трикутник. Перевизначте методи виведення та обчислень у класах-спадкоємцях.
// Створіть масив з різними фігурами та виведіть інформацію
// про кожну з них, включаючи площу та периметр

class Figure {
  constructor(figureName) {
    this.figureName = figureName;
  }
  getfigureInfo() {
    console.log(`Фігура ${this.figureName}`);
  }
}

class Square extends Figure {
  constructor(side) {
    super("Square");
    this.side = side;
  }
  getfigureInfo() {
    super.getfigureInfo();
    return `Довжина сторін ${this.side}`;
  }
  getSquare() {
    return this.side * this.side;
  }
  getPerimeter() {
    return 4 * this.side;
  }
}

class Rectangle extends Figure {
  constructor(a, b) {
    super("Rectangle");
    this.a = a;
    this.b = b;
  }
  getfigureInfo() {
    super.getfigureInfo();
    return `Сторони ${this.a} та ${this.b}`;
  }
  getSquare() {
    return this.a * this.b;
  }
  getPerimeter() {
    return 2 * (this.a + this.b);
  }
}

class Triangle extends Figure {
  constructor(a, b, c) {
    super("Triangle");
    this.a = a;
    this.b = b;
    this.c = c;
  }
  getfigureInfo() {
    super.getfigureInfo();
    return `Сторони ${this.a}, ${this.b} та ${this.c}`;
  }
  getSquare() {
    return this.a * this.b * this.c;
  }
  getPerimeter() {
    return this.a + this.b + this.c;
  }
}

const square = new Square(5);
const rectangle = new Rectangle(5, 10);
const triangle = new Triangle(5, 5, 8);

console.log(square.getfigureInfo());
console.log(square.getPerimeter());
console.log(square.getSquare());

console.log(rectangle.getfigureInfo());
console.log(rectangle.getPerimeter());
console.log(rectangle.getSquare());

console.log(triangle.getfigureInfo());
console.log(triangle.getPerimeter());
console.log(triangle.getSquare());

const figures = [];
figures.push(square, rectangle, triangle);
console.log(figures);

figures.forEach((figure) => {
  figure.getfigureInfo();
  console.log(`Площа: ${figure.getSquare()}`);
  console.log(`Периметр: ${figure.getPerimeter()}`);
});
