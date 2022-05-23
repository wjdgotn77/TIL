var Person3 = /** @class */ (function () {
    function Person3(a) {
        this.data = 0;
        this.name = a;
        this.age = 30;
    }
    return Person3;
}());
var Car = /** @class */ (function () {
    // 항상 object 가 return 되기 때문에 따로 지정해줄 필요 없다.
    function Car(a, b) {
        this.model = a;
        this.price = b;
    }
    Car.prototype.tax = function () {
        return this.price / 10;
    };
    return Car;
}());
Person3.prototype.func = function (arg) { return console.log("".concat(arg, " hi")); };
var 사람 = new Person3("dd");
var car1 = new Car("소나타", 3000);
console.log(car1);
console.log(car1.tax());
console.log(사람.func("해수"));
