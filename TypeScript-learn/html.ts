const $title = document.querySelector("#title");

// Error 이유: 셀렉터로 html을 찾으면 타입이 Element | null 이기 떄문에 HTML 을 못 찾을 경우 null이 된다.
//$title.innerHTML = "반갑소";

// Narrowing 으로 해결.
if ($title !== null) {
  $title.innerHTML = "Narrowing";
}

// instanceof 사용하는 Narrowing. => 가장 좋은 방법.
if ($title instanceof HTMLElement) {
  $title.innerHTML = "Instanceof";
}

// 또는 Assertion. => 비추
const $title2 = document.querySelector("#title") as HTMLElement;
$title2.innerHTML = "Assertion";

// 또는 optional chaining 연산자.
if ($title?.innerHTML !== undefined) {
  $title.innerHTML = "옵셔널체이닝";
}

const $link = document.querySelector("#link");
// Error
// if ($link instanceof HTMLElement) {
if ($link instanceof HTMLAnchorElement) {
  $link.href = "https://kakao.com";
}
// html 태그 종류별로 정확한 타입명칭이 있다.
// a Tag HTMLAnchorElement
// img Tag HTMLImageElement
// H4 Tag HTMLHeadingElement
// ... 등등 정확한 타입으로 Narrowing 해줘야 html 속성 수정을 제대로 할 수 있다.

// EventListener 부착.
let $button = document.getElementById("button");
$button?.addEventListener("click", () => {
  console.log("hi");
});

let $image = document.querySelector("#image");

if ($image instanceof HTMLImageElement) {
  $image.src = "new.jpg";
}

let $aTag = document.querySelectorAll(".naver");

$aTag.forEach((el) => {
  if (el instanceof HTMLAnchorElement) {
    el.href = "kakao.com";
  }
});
