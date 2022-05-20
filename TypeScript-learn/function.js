// 함수 타입 지정하는 법 & void 타입
// function func(x: number): number {
//   // arg에서는 number만 들어올 수 있고, return도 number만 가능.
//   return x + 2;
// }
// void : 어떤 값을 return 하고 싶지 않을 때, 없을 때.
var func2 = function (x) {
    1 + 1;
};
// 함수를 사용할 때, 타입이 지정된 파라미터는 필수.
// func(); // Error : parameter 없자나!
func2(3);
// 파라미터가 옵션일 경우에는 ? 넣어주면 된다.
function dupFunc(x) {
    // arg에서는 number만 들어올 수 있고, return도 number만 가능.
    return x + 2;
}
dupFunc(); // 이제 Error 안뜸.
// 💡 중요!
// 변수?:number === 변수: number | undefined
// 알아두면 나중에 겪을 미스테리가 해결된다...?
function 함수(x) {
    if (typeof x === "number") {
        console.log(x + 3);
    }
    else {
        console.log("string");
    }
}
함수(2);
// (숙제1) 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고
// 아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다.
// 파라미터와 return 타입지정도 잘 해봅시다.
function sayHi(name) {
    if (name) {
        console.log("\uC548\uB155\uD558\uC138\uC694 ".concat(name));
    }
    else {
        console.log("이름이 없습니다");
    }
}
sayHi();
// (숙제2) 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.
// 예를 들어 '245' 이런 문자를 입력하면 3이 return 되어야합니다.
// 숫자도 마찬가지로 9567 이런 숫자를 입력하면 4가 return 되어야합니다.
// 숫자 또는 문자 이외의 자료가 들어오면 안됩니다.
function a(arg) {
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
function canMarry(월소득, 집보유, 매력점수) {
    var 월소득score = 월소득 * 1;
    var 집보유score = 집보유 ? 500 : 0;
    var 매력점수score = 매력점수 === "상" ? 100 : 0;
    var total = 월소득score + 집보유score + 매력점수score;
    return total > 600 ? "결혼가능" : null;
}
console.log(canMarry(700, false, "중"));
function 결혼가능하냐(money, house, charm) {
    var score = 0;
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
function myFunc(x) {
    var array = [];
    if (typeof x === "number") {
        array[0] = x;
    }
    else {
        return;
    }
    // Assertion 문법 (타입 덮어쓰기)
    // 편하다고 막 쓰면 안된다. => 남이 짠 코드를 수정할 때 또는 왜 타입에러가 나는지 모르겠을 때 비상용으로 주로 쓴다.
    // <용도>
    // 1. narrowing 할 때 쓴다. => 타입을 a 에서 b로 변경할 때 쓰는 것이 아니다.
    // 2. 어떤 타입이 들어올지 100% 확실할 때 사용해야 한다.
    var array2 = [];
    array2[0] = x; // 왼쪽의 변수를 오른쪽의 타입으로 덮어씌워주세요 라는 뜻.
}
myFunc(123);
function 변환기(data) {
    return JSON.parse(data);
}
var jake = 변환기('{"name":"kim"}');
var ar = [1, 2, "3", 4];
// 숙제 1번.
function cleanStr(x) {
    var answer = [];
    x.forEach(function (item) {
        if (typeof item === "string") {
            answer.push(+item);
        }
        else {
            answer.push(item);
        }
    });
    return answer;
}
console.log(cleanStr(ar));
// 숙제 2번.
var 철수쌤 = { subject: "math" };
var 영희쌤 = { subject: ["science", "english"] };
var 민수쌤 = { subject: ["science", "art", "korean"] };
function returnLastSubject(x) {
    if (typeof x.subject === "string") {
        return x.subject;
    }
    else if (Array.isArray(x.subject)) {
        return x.subject[x.subject.length - 1];
    }
    else {
        return;
    }
}
console.log(returnLastSubject(철수쌤));
var 동물 = 123;
var assign2 = { color: "white", size: 1, position: [1, 2, 3] };
var practiceAlias = { name: "kim", phone: 123, email: "abc@naver.com" };
var 회원가입정보 = {
    name: "kim",
    adult: false,
    phone: 123444444
};
// Literal Type
function rsp(x) {
    return [x];
}
rsp("가위");
// const 변수의 한계 => reference 타입이라서 내부적으로 바꿀 수 있음.
// Literal Type은 const 변수와 유사하게 사용할 수 있다. 자료를 여러개 저장할 수 있다.
var 자료 = {
    name: "kim"
};
// Kim 이라는 타입만 들어올 수 있다는 뜻.
// 자료.name은 'string' 타입임.
function 내함수(a) {
    return a;
}
자료.name;
내함수(자료.name); // 에러가 난다.
// 함수 표현식으로 type 지정을 한다.
var ABC = function (x, y) {
    return x + y;
};
var 회원정보 = {
    name: "kim",
    age: 30,
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () {
        console.log("안녕");
    }
};
회원정보.plusOne(1);
회원정보.changeName();
var cutZero = function (x) {
    x;
    var arr = x.split("");
    return arr.splice(1, arr.length).join("");
};
var removeDash = function (x) {
    return +x.split("-").join("");
};
console.log(cutZero("0eeeee"));
console.log(removeDash("010-7226-2627"));
var 함수다함수 = function (x, y, z) {
    var firstResult = y(x);
    return z(firstResult);
};
console.log(함수다함수("010-1111-2222", cutZero, removeDash));
