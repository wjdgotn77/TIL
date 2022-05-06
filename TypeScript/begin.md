# Beginning TypeScript

### 타입추론 (Type by Inference)

변수를 생성하면서 동시에 값을 할당하는 경우, 해당 변수의 타입으로 타입을 생성한다.

```ts
let word = 'hello';

// word : string
```

### 타입 정의하기 (Defining Types)

동적 프로그래밍을 사용하고 있을 경우 TypeScript에 어떤 타입이 되어야하는지 명시 가능한 확장버전을 제공.

`interface` 를 사용.

1. 객체의 형태를 명시적으로 나타냄.
2. class 로 새로운 객체를 만들 수도 있다.
3. 함수 내 매개변수 또는 리턴 값.

객체의 형태를 명시적으로 나타내기 위해서는 `interface` 로 선언.

```ts
interface User {
  name: string;
  id: number;
}
```

이제 변수 선언 뒤에 `:TypeName` 구문을 사용해 JavaScript 객체가 새로운 `interface` 의 형태를 따르고 있음을 선언할 수 있다.

```ts
interface User {
  name: string;
  id: number;
}

// ---- cut -----

const user: User = {
  name: 'Maeve',
  id: 0,
};
```

`interface` 는 클래스로도 선언할 수 있다.

```ts
interface User {
  name: string;
  id: number;
}
class UserAccount {
  name: string;
  id: number;
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}
const user: User = new UserAccount('Murphy', 1);
```

함수에서 매개변수와 리턴 값을 명시하는데 사용되기도 함.

```ts
// @noErrors
interface User {
  name: string;
  id: number;
}
// ---cut---
function getAdminUser(): User {
  //...
}
function deleteUser(user: User) {
  // ...
}
```

### **타입 구성 (Composing Types)**

Unions | Generic

**Unions (유니언)**

유니언은 타입이 여러 타입 중 하나일 수 있음을 선언.

예를 들어, Boolean 타입을 true 또는 false 로 설명할 수 있다.

```ts
type MyBool = true | false;
```

유니언 타입이 가장 많이 사용된 사례 중 하나는 값이 다음과 같이 허용되는 `string` 또는 `number` 의 [리터럴](https://www.typescriptlang.org/docs/handbook/literal-types.html) 집합을 설명하는 것.

```ts
type WindowStates = 'open' | 'closed' | 'minimized';
type LockStates = 'locked' | 'unlocked';
type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
```

유니언은 다양한 타입을 처리하는 방법을 제공하는데, 예를 들어 `array`
 또는 `string` 을 받는 함수가 있을 수 있다.

```ts
function getLength(obj: string | string[]) {
  return obj.length;
}
```
