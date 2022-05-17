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
