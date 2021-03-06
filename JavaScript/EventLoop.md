# 자바스크립트와 이벤트 루프.

자바스크립트는 단일 스레드 기반의 언어.  
스레드가 하나라는 것은 동시에 하나의 작업만을 처리할 수 있다는 것.  
그러나 실제로 자바스크립트가 사용되는 환경을 생각해보면, 많은 작업이 동시에 처리되고 있는 것을 알 수 있다.  
자바스크립트의 동시성을 지원하는 것이 바로 **이벤트 루프**이다.

자바스크립트는 이벤트루프를 이용해서 비동기 방식으로 동시성을 지원한다.  
실제 V8과 같은 자바스크립트 엔진은 단일 호출 스택을 사용하고, 요청이 들어올 때마다 해당 요청을 순차적으로 호출 스택에 담아 처리한다.  
비동기 요청은 자바스크립트 엔진을 구동하는 환경인 브라우저 또는 Node.js가 담당한다.

> 자바스크립트가 단일스레드 기반의 언어라는 말은 "자바스크립트 엔진이 단일 호출 스택을 사용한다"는 관점에서만 사실.  
> 실제 자바스크립트가 구동되는 환경에서는 여러 개의 스레드가 사용되며,  
> 이러한 구동 환경이 단일 호출 스택을 사용하는 자바스크립트 엔진과 상호 연동하기 위해 사용하는 장치가 이벤트 루프이다.

### 태스크 큐와 이벤트 루프

태스크큐 : 콜백함수들이 대기하는 큐 형태의 배열.  
이벤트루프 : 호출 스택이 비워질 때마다 큐에서 콜백 함수를 꺼내와서 실행.

이벤트 루프는 **“현재 실행중인 태스크가 없는지”와 “태스크 큐에 태스크가 있는지”**를 반복적으로 확인한다.

- 모든 비동기 API 들은 작업이 완료되면 콜백 함수를 태스크 큐에 추가한다.
- 이벤트 루프는 “현재 실행중인 태스크가 없을 때”(주로 호출 스택이 비워졌을 때) 태스크 큐의 첫 번째 태스크를 꺼내와 실행한다.
