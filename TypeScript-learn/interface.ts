// Object에 쓸 수 있는 interface 문법.
// Class 정의하듯, 대문자로 정의해준다.

interface Obj {
  color: "red";
  width: 100;
}

interface Student {
  name: string;
}

interface Teacher {
  name: string;
  age: number;
}

// interface 의 장점은 extends 로 복사 가능하다.
// 아래 Teacher 는 Student의 name 속성을 복사함.
interface Student {
  name: string;
}

interface Teacher extends Student {
  age: number;
}

let 학생: Student = { name: "kim" };
let 선생: Teacher = { name: "Lee", age: 22 };

// Type 도 비슷한 기능 지원을 하긴 함.
// 외부라이브러리를 쓰는 경우 interface는 type선언을 덮어쓰거나 override 할 수 있다. 근데 type은 안댐.
type Animal2 = { name: string };
type Cat = { age: number } & Animal2; // &기호 Intersection Type, 두 타입 전부를 만족하는 타입이다.
// 일반적인 상황에서는 type 키워드 자주 활용하면 되지만,
// 다른 사람이 내 코드를 이용하는 상황이 많다면 interface로 유연하게 만드는 것이 좋다.

// 숙제1. 간단한 타입 만들기.
interface Product {
  brand: string;
  serialNumber: number;
  model: string[];
}

let 상품: Product = {
  brand: "Samsung",
  serialNumber: 1360,
  model: ["TV", "phone"],
};

// 숙제2. array 안에 object 여러개가 필요합니다.
interface Cart {
  product: string;
  price: number;
}

let 장바구니: Cart[] = [
  { product: "청소기", price: 7000 },
  { product: "삼다수", price: 800 },
];

// 숙제3. 위에서 만든 타입을 extends 하기.

interface UpdateCart extends Cart {
  card: boolean;
}

let new장바구니: UpdateCart = { product: "청소기", price: 7000, card: false };

// 숙제4.object 안에 함수를 2개 넣기.
interface MathObj {
  plus: (a: number, b: number) => number;
  minus: (a: number, b: number) => number;
}

const 오브젝트: MathObj = {
  plus(a, b) {
    return a + b;
  },
  minus(a, b) {
    return a - b;
  },
};
