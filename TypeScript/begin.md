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

**Generic (제네릭)**

JavaScript 에서는 원래 타입 선언이 필용하지 않고, 특정 타입을 위해 만들어진 클래스나 함수도 타입에러를 런타임에서 발생시킨다.  
코드를 실행시키기 전까지는 함수와 클래스가 모든 타입에 대응한다.  
타입스크립트는 정적 타입 언어이기 때문에, 기본적으로 타입을 정의한 함수 혹은 클래스는 모두 다른 타입에 재사용할 수 없지만, 제네릭을 사용하면 가능하다.

### 제네릭 문법

**Class**

```ts
class Stack<T> {
  private data: T[] = [];

  constructor() {}

  push(item: T): void {
    this.data.push(item);
  }

  pop(): T {
    return this.data.pop();
  }
}
```

**T : 타입변수(Type Variables)**  
`<T>` 는 제네릭을 사용하겠다는 의미이고 그 안에 타입으로 사용되는 식별자를 집어넣는다.  
`T`는 type 의 약자로 다른 언어에서도 제네릭을 선언할 때 관용적으로 많이 사용됨.  
타입변수가 두 개 이상일 때는 알파벳 순서대로 T,U,V 순서대로 사용하는 것이 관용적.

사용법은 생성자를 호출해 객체를 만들 때 `T`로 사용될 타입을 지정해주면 된다.

```ts
const numberStack = new Stack<number>();
const stringStack = new Stack<string>();

numberStack.push(1);
stringStack.push('a');
```

각 스택은 항상 생성할 때 선언한 타입만을 저장하고 리턴.  
컴파일러가 리턴하는 타입을 알 수 있게되므로 에디터에서 자동완성을 사용할 수 있게 되기 때문에 생상성 향상에도 기여한다는 장점이 있다.  
다만 타입은 컴파일 단계에서 검사하는 것이기 때문에 런타임에서는 막을 수 없다.

**Function**

배열을 입력으로 받고 배열의 첫번째 요소를 출력하는 함수를 구현하는 예시.

```ts
// 제네릭을 사용하지 않았을 때.

function first(arr: any[]): any {
  return arr[0];
}
```

위의 코드는 마찬가지로 어떤 타입의 배열이라도 받을 수 있기 때문에 리턴하게 되는 타입이 무엇인지 알 수 없지만 제네릭을 이용하면 아래처럼 간단하게 구현할 수 있다.

```ts
// 제네릭을 사용했을 때

function first<T>(arr: T[]): T {
  return arr[0];
}

// 사용 : 함수를 호출할 때 제네릭 문법으로 타입을 정해주면 된다.

first<number>([1, 2, 3]);
```

**두 개 이상의 타입 변수**

제네릭 함수나 클래스에서는 두 개 이상의 타입 변수도 사용할 수 있다.  
두 가지 변수를 받아 쌍으로 만들어 반환하는 함수를 구현하는 예시.

```ts
function toPair(a: any, b: any): [any, any] {
  return [a, b];
}

// 입력되는 두 가지의 변수 타입이 다르다면, 두 가지 타입변수가 필요함.
// 제네릭을 사용해 아래와 같이 구현.
function toPair<T, U>(a: T, b: U): [T, U] {
  return [a, b];
}

// 함수를 사용할 때.
toPair<string, number>('1', 1);
toPair<number, number>(1, 1);
```

**상속된 타입 변수**

타입변수는 기존에 사용하고 있는 타입을 상속할 수도 있음. 입력 받을 변수의 타입을 제한할 수 있게 만들어준다.  
이와 함께 여러 개의 타입 변수를 사용해 응용하면 아래와 같은 코드를 짤 수 있음.

```ts
// 입력받는 스택의 첫번째 요소를 반환하는 getFirst 함수.

function getFirst<T extends Stack<U>, U>(container: T): U {
  const item = container.pop();
  container.push(item);
  return item;
}

// 사용할 때.

getFirst<Stack<number>, number>(numberStack);
getFirst<number, number>(1); // Type 'number' does not satisfy the constraint 'Stack<number>
```

> 참고 링크  
> https://www.typescriptlang.org/ko/docs/handbook/2/generics.html  
> https://hyunseob.github.io/2017/01/14/typescript-generic/
