# 리액트 훅이란?

이전에 클래스형컴포넌트에서 사용할 수 있었던 상태값의 관리나 생명주기메소드들을 함수형 컴포넌트에서도 사용할 수 있게 된 리액트 16.8버전에 추가된 사용방법.  
훅을 사용하면 재사용 가능한 로직을 쉽게 만들 수 있고, 또 React의 내장된 훅 말고 새로운 커스텀 훅을 만들수도 있다.  
또한 코드 가독성이 좋아지는 장점이 있다. (예를들어, componentDidMount + componentWillUnmount를 useEffect 로 간단하게 대체할 수 있음)  
useState, useEffect, useCallback 등의 기본적인 내장 훅이 존재한다.
