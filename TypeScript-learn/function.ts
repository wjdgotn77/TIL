// 함수 타입 지정하는 법 & void 타입

// function func(x: number): number {
//   // arg에서는 number만 들어올 수 있고, return도 number만 가능.
//   return x + 2;
// }

// void : 어떤 값을 return 하고 싶지 않을 때, 없을 때.
const func2 = (x: number): void => {
  1 + 1;
};

// 함수를 사용할 때, 타입이 지정된 파라미터는 필수.
// func(); // Error : parameter 없자나!
func2(3);

// 파라미터가 옵션일 경우에는 ? 넣어주면 된다.
function dupFunc(x?: number): number {
  // arg에서는 number만 들어올 수 있고, return도 number만 가능.
  return x + 2;
}
dupFunc(); // 이제 Error 안뜸.

// 💡 중요!
// 변수?:number === 변수: number | undefined
// 알아두면 나중에 겪을 미스테리가 해결된다...?

function 함수(x: number | string): void {
  if (typeof x === "number") {
    console.log(x + 3);
  } else {
    console.log("string");
  }
}

함수(2);

// (숙제1) 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고
// 아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다.
// 파라미터와 return 타입지정도 잘 해봅시다.

function sayHi(name?: string): void {
  if (name) {
    console.log(`안녕하세요 ${name}`);
  } else {
    console.log("이름이 없습니다");
  }
}
sayHi();

// (숙제2) 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.
// 예를 들어 '245' 이런 문자를 입력하면 3이 return 되어야합니다.
// 숫자도 마찬가지로 9567 이런 숫자를 입력하면 4가 return 되어야합니다.
// 숫자 또는 문자 이외의 자료가 들어오면 안됩니다.

function a(arg?: number | string): number {
  return arg.toString().length;
}

console.log(a(489));

// (숙제3) 결혼 가능 확률을 알려주는 함수를 만들어봅시다.
// 1. 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력할 수 있어야합니다.
// 2. 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다.
// 3. 총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return하지 않습니다.
// (예시)

// 결혼가능하냐(700, false, '중') 이렇게 사용할 경우 "결혼가능"을 return 해줍니다.
// 결혼가능하냐(100, false, '상') 이렇게 사용할 경우 아무것도 return되지 않습니다.

function canMarry(월소득: number, 집보유: boolean, 매력점수: string): string {
  const 월소득score: number = 월소득 * 1;
  const 집보유score: number = 집보유 ? 500 : 0;
  const 매력점수score: number = 매력점수 === "상" ? 100 : 0;
  const total = 월소득score + 집보유score + 매력점수score;

  return total > 600 ? "결혼가능" : null;
}

console.log(canMarry(700, false, "중"));

function 결혼가능하냐(
  money: number,
  house: boolean,
  charm: string
): string | void {
  let score: number = 0;
  score += money;
  if (house === true) {
    score += 500;
  }
  if (charm === "상") {
    score += 100;
  }
  if (score >= 600) {
    return "결혼가능";
  }
}
console.log(결혼가능하냐(100, true, "상"));

// Narrowing
// typeof 변수
// 속성명 in 오브젝트자료
// 인스턴스 instanceof 부모
function myFunc(x: number | string) {
  let array: number[] = [];
  if (typeof x === "number") {
    array[0] = x;
  } else {
    return;
  }

  // Assertion 문법 (타입 덮어쓰기)
  // 편하다고 막 쓰면 안된다. => 남이 짠 코드를 수정할 때 또는 왜 타입에러가 나는지 모르겠을 때 비상용으로 주로 쓴다.
  // <용도>
  // 1. narrowing 할 때 쓴다. => 타입을 a 에서 b로 변경할 때 쓰는 것이 아니다.
  // 2. 어떤 타입이 들어올지 100% 확실할 때 사용해야 한다.

  let array2: number[] = [];
  array2[0] = x as number; // 왼쪽의 변수를 오른쪽의 타입으로 덮어씌워주세요 라는 뜻.
}

myFunc(123);

// Assertion 추가 설명.
// as 키워드 사용시 특징.
// 1. as 키워드는 union type 같은 복잡한 타입을 하나의 정확한 타입으로 줄이는 역할을 수행한다.(number 타입을 as string 이렇게 바꾸려고 하면 에러)
// 2. 타입실드 임시 해제용이다. 실제 코드 실행결과는 as 있을 때나 없을 때나 거의 동일하다.

// 예전 assertion 문법.
// let 이름 :number = 123;
// (이름 as string) + 1;  //현재문법
// <string>이름 + 1;   //옛날문법 : 리액트의 jsx랑 헷갈릴 수 있다.

// 유용하게 쓰일 때.
// 가끔 타입을 강제로 부여하는 기계를 하나 만들어쓰고 싶은 때가 있습니다.
// 그럴 때 함수에 데이터를 넣으면 as 타입명을 붙여서 return 하는 함수를 만들어서 사용하면 된다.
type Person = {
  name: string;
};
function 변환기<T>(data: string): T {
  return JSON.parse(data) as T;
}
const jake = 변환기<Person>('{"name":"kim"}');

const ar = [1, 2, "3", 4];

// 숙제 1번.
function cleanStr(x: (number | string)[]): number[] {
  let answer: number[] = [];

  x.forEach((item) => {
    if (typeof item === "string") {
      answer.push(+item);
    } else {
      answer.push(item);
    }
  });

  return answer;
}

console.log(cleanStr(ar));

// 숙제 2번.
let 철수쌤 = { subject: "math" };
let 영희쌤 = { subject: ["science", "english"] };
let 민수쌤 = { subject: ["science", "art", "korean"] };

function returnLastSubject(x: { subject: string | string[] }): string {
  if (typeof x.subject === "string") {
    return x.subject;
  } else if (Array.isArray(x.subject)) {
    return x.subject[x.subject.length - 1];
  } else {
    return;
  }
}

console.log(returnLastSubject(철수쌤));

// Type 키워드 => Type alias & read only
// 대문자로 쓰기.
type Animal = string | number | undefined;
let 동물: Animal = 123;

type Person1 = { name: string; age: number };

// Object 내 자료 수정을 막을 수 있다. Object Read Only (읽기 전용)
type City = {
  readonly region: string;
};

// const 출생지역: Aria = { region: "Seoul" };
// 출생지역.region = 'Pusan'; Error 발생.
//타입스크립트 에러는 에디터 & 터미널에만 존재함 => 실제 js 파일은 실행된다.

// region이 있어도 되고 없어도 되고~
type City2 = {
  region?: string;
};

// Type 변수도 Union Type으로 합치기 가능.
// Type 사용할 때 주의점 같은 이름의 Type 변수 재정의 불가능

// type Name = string;
// type Age = number;
// type Person2 = Name | Age;

// & 연산자로 Object Extend 한다. (합친다)
type PositionX = { x: number };
type PositionY = { y: number };
// 하고 싶은 것은 { x : number, y: number }
type NewPosition = PositionX & PositionY; //{ x : number, y: number }

// 숙제 1번
// type Aame = string;
// type Bame = string;

// 숙제 2번
type Assign2 = { color?: string; size: number; readonly position: number[] };
const assign2: Assign2 = { color: "white", size: 1, position: [1, 2, 3] };

// 숙제 3번
type Name = { name: string };
type Phone = { phone: number };
type Email = { email: string };

type User = { name: string; email?: string; phone: number };
const practiceAlias = { name: "kim", phone: 123, email: "abc@naver.com" };

type Adult = { adult: boolean };
type NewUser = User & Adult;

let 회원가입정보: NewUser = {
  name: "kim",
  adult: false,
  phone: 123444444,
};

// Literal Type
function rsp(x: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
  return [x];
}
rsp("가위");

// const 변수의 한계 => reference 타입이라서 내부적으로 바꿀 수 있음.
// Literal Type은 const 변수와 유사하게 사용할 수 있다. 자료를 여러개 저장할 수 있다.

var 자료 = {
  name: "kim",
};

// Kim 이라는 타입만 들어올 수 있다는 뜻.
// 자료.name은 'string' 타입임.
function 내함수(a: "kim") {
  return a;
}

자료.name;
내함수(자료.name); // 에러가 난다.
// 해결 방법
// 1. var 자료 : {name: 'kim'} = {
//      name: "kim",
//    };
// 2. Assertion을 사용 => 내함수(자료.name as 'kim')
// 3. as const 를 사용해서 object value 값을 그대로 타입으로 지정해준다.
//      var 자료 = {
//      name: "kim",
//    } as const;

// as const
// Object 자료를 완전히 잠가놓고 싶으면 as const 를 써보기.
// 효과1. object value 값을 그대로 타입으로 지정해줌.
// 효과2. object 속성들에 모두 readonly를 붙여준다.
