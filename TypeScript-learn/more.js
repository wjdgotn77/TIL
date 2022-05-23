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
