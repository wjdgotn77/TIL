class Person3 {
  data = 0;
  name: string;
  age: number;
  constructor(a: string) {
    this.name = a;
    this.age = 30;
  }
}

class Car {
  model: string;
  price: number;

  // 항상 object 가 return 되기 때문에 따로 지정해줄 필요 없다.
  constructor(a: string, b: number) {
    this.model = a;
    this.price = b;
  }

  tax(): number {
    return this.price / 10;
  }
}

// Prototype 정의 하려면 사전에 interface 정의
interface Person3 {
  func(arg: string): void;
}
Person3.prototype.func = (arg) => console.log(`${arg} hi`);

let 사람 = new Person3("dd");

let car1 = new Car("소나타", 3000);

console.log(car1);
console.log(car1.tax());

console.log(사람.func("해수"));
