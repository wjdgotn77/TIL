var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Array 로 들어오기 때문에 rest parameter의 경우 타입을 [] 로 지정
function restParameter() {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    console.log(arg);
}
restParameter(1, 3, 4, 5, 6, 7, false);
// Spread Operator
var arr = [1, 2, 3, 4, 5, 6, 6, 7];
var arr2 = [1000, 455];
var arr3 = __spreadArray(__spreadArray([], arr, true), arr2, true);
console.log(arr3);
// Destructuring
var person = { student: true, age: 20 };
// function 함수(a, b) {
//   console.log(a, b);
// }
// 이렇게도 값을 빼서 쓸 수 있지만,
// 함수(person.student, person.age);
function 함수(_a) {
    var student = _a.student, age = _a.age;
    console.log(student, age);
}
// 요렇게 디스트럭쳐링 써주면 더 쉽다.
함수({ student: true, age: 20 });
// 숙제1. 매개변수로 숫자들을 입력받고 가장 큰 정수를 리턴해주는 함수 만들기.
function maxNumber() {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    var result = arg[0];
    arg.forEach(function (num) {
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
function returnObjectFunction(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    return console.log(user, comment, admin);
}
function returnUserObj(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    return console.log(user, comment, admin);
}
returnObjectFunction({ user: "kim", comment: [3, 5, 4], admin: false });
returnUserObj({ user: "kim", comment: [3, 5, 4], admin: false });
function sayParams(_a) {
    var a = _a[0], b = _a[1], c = _a[2];
    console.log(a, b, c);
}
sayParams([40, "wine", false]);
// Null & Undefined 체크하는 방법.
var 변수 = undefined;
var strs = "바나나";
// 변수가 undefined 라면 undefined가 남아서 if 문이 실행되지 않는다.
// if문 조건식 안에 falsy 한 값이 남으면 실행되지 않으니까~~
if (변수 && typeof strs === "string") {
    console.log(strs);
}
function 함수(x) {
    if (x.wheel === "4개") {
        console.log("이 차는 " + x.color);
    }
    else {
        console.log("이 바이크는 " + x.color);
    }
}
function 함수(animal) {
    if ("swim" in animal) {
        return animal.swim;
    }
    return animal.fly;
}
// Never Type
// function 함수(): never {
// // 1. 절대 return 을 하지 않는다.
// // 2. 함수 실행이 끝나지 않아야 한다. (endpoint 가 없어야 한다.)
// // 아래 처럼 무한하게 실행되기 때문에 사용이 가능.
// while (true) {
//   console.log(123);
// }
// }
// Throw new error 문법에도 사용할 수 있다.
function 함수() {
    throw new Error("에러메세지");
}
// 정리.
// 1. 무언가 리턴하지 않고 2. 끝나지도 않는 함수를 표현하고 싶을 때 never 타입을 지정한다.
// 그러나, 2번 조건의 함수를 만들 일이 거의 없기 때문에 never 타입은 쓸 일이 거의 없다.
// 무언가 return 하고 싶지 않다면 void 타입을 이용한다.
// 가끔 코드 이상하게 짜면 자동으로 never가 등장한다.
// 1. Parameter가 Never Type이 되는 경우가 있다.
function 함수(parameter) {
    if (typeof parameter === "string") {
        parameter + 1;
    }
    else {
        // 위에 () 내에 parameter를 string으로 정의 해놓고,
        // parameter의 타입이 string이 아니라면, else 의 코드를 실행시키는 것으로 말이 안된다.
        // 그래서 마우스 hover 해보면 never 타입으로 정의 되어있음.
        parameter;
    }
}
// 2. 자동으로 Never Type 을 가지는 경우.
// 함수 표현식에서 아무것도 return 하지 않고 끝나지도 않는 경우 return 의 타입이 never 타입으로 할당된다.
// => 함수 선언문은 같은 경우 void
// 3. tsconfig.json 에서 strict 옵션을 켜둘 경우 함부러 any 타입을 지정해주지 않는 경우가 있음.
// 그럴 때 array 같은 것을 대충 타입 지정 없이 만들면, 원래는 array[] 이런 타입이 되는데 any를 가질 수 없어서 never[] 이런 타입이 발견되기도 함.
