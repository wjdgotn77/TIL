// Array 로 들어오기 때문에 rest parameter의 경우 타입을 [] 로 지정
function restParameter(...arg: (number | boolean)[]) {
  console.log(arg);
}

restParameter(1, 3, 4, 5, 6, 7, false);

// Spread Operator
let arr = [1, 2, 3, 4, 5, 6, 6, 7];
let arr2 = [1000, 455];
let arr3 = [...arr, ...arr2];

console.log(arr3);

// Destructuring
let person = { student: true, age: 20 };

// function 함수(a, b) {
//   console.log(a, b);
// }
// 이렇게도 값을 빼서 쓸 수 있지만,
// 함수(person.student, person.age);

function 함수({ student, age }: { student: boolean; age: number }) {
  console.log(student, age);
}
// 요렇게 디스트럭쳐링 써주면 더 쉽다.
함수({ student: true, age: 20 });

// 숙제1. 매개변수로 숫자들을 입력받고 가장 큰 정수를 리턴해주는 함수 만들기.
function maxNumber(...arg: number[]): number {
  let result = arg[0];
  arg.forEach((num) => {
    if (result < num) {
      result = num;
    }
  });

  return result;
}

console.log(maxNumber(1, 13, 40, 10, 300));

// 숙제 2. 아래처럼 생긴 object 자료를 파라미터로 입력할 수 있는 함수 만들기.
// 1. destructuring 문법 사용.
// 2. 함수실행 시 입력한 파라미터의 value들 (kim, [3,4,5] 이런거 )를 전부 콘솔창에 출력해줘야한다.

// 풀이방법 1.
// function returnObjectFunction(...arg: any): any {
//   return console.log(...arg);
// }

// 풀이방법 2.
function returnObjectFunction({
  user,
  comment,
  admin,
}: {
  user: string;
  comment: number[];
  admin: boolean;
}) {
  return console.log(user, comment, admin);
}

// 풀이방법 3.
type UserType = {
  user: string;
  comment: number[];
  admin: boolean;
};

function returnUserObj({ user, comment, admin }: UserType): void {
  return console.log(user, comment, admin);
}

returnObjectFunction({ user: "kim", comment: [3, 5, 4], admin: false });
returnUserObj({ user: "kim", comment: [3, 5, 4], admin: false });

// 숙제 3. 함수( [40, 'wine', false] ) array 자료를 파라미터로 입력할 수 있는 함수 만들기.

// 내가 푼 방법.
// function sayParams(a: any[]): void {
//   const [number, string, boolean] = [...a];
//   return console.log(number, string, boolean);
// }

// 바로 함수 안에서 만드는 방법

type SayParams = (number | string | boolean)[];
function sayParams([a, b, c]: SayParams) {
  console.log(a, b, c);
}

sayParams([40, "wine", false]);
