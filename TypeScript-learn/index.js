var myName = "maeve";
var myAge = 29;
var f = { name: "jay" };
// type project = {
//   member: string[];
//   days: number;
//   started: boolean;
// };
var project2 = {
    member: ["kim", "park"],
    days: 30,
    started: true,
};
// union 타입
var member = 123;
var members = [1, "2", 3];
var obj = { a: "123" };
// any 타입 모든 자료형 허용해준다. => 타입실드 해제문법
var anyName;
anyName = {};
// unknown Type => any와 마찬가지로 모든 자료형, any 보다는 안전함.
var unknownName;
unknownName = 2;
unknownName = {};
// unknown 이 any 보다 안전한 이유.
// unknown은 에러 발생한다.
// let variable1: string = unknownName;
// any 는 에러 발생 X.
var variable2 = anyName;
// Age + 1 이 안되는 이유.
//let age: string | number;
// age + 1; // Error => 변경하려는 변수의 타입이 확실해야 연산을 수행한다.
// 다음 변수 4개에 타입 지정해보기.
var user = "kim";
var age = undefined;
var married = false;
var 철수 = [user, age, married];
// 학교라는 변수에 타입지정해보십시오.
var 학교 = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
