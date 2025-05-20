## js 적용

- JS는 2가지로 크게 분류됩니다.
- Node와 Web(웹브라우저)으로 분류 합니다.

## JS 코딩 좋은 위치

- 가장 좋은 자리는 html이 완료되는 시점.

```js
// load의 대한 내용 html의 document가 모두 로드 되면 실행하기
// html 의 이미지, 파일 등등 리소스가 준비되면 실행하라라는 함수
// onload를 쓰면 안된다라는걸 보여주기위함
//"load" 는 모든 리소스를 확인하고
window.onload = function () {
  const wrap = document.querySelector(".wrap");
  console.log(wrap);
};
// html 만 로드 완료를 체크합니다.
// DOM은 html 그 자체만 확인하고 실행하는거라 제일 먼저 실행
// 헤더만 쓰면 아래만 써서 위에 바로 박아버리기
window.addEventListener("DOMContentLoaded", function () {
  console.log("로딩완료");
});
```

## 요소 (Elemet) 선택법

```js
// DOM 만 완성화면 됩니다. 기준으로 코드를 진행함.
window.addEventListener("DOMContentLoaded", function () {
  // 우리가 원하는 요소(Element) 를 선택하는 법?
  // - Tag 를 선택하고 싶어요. (Tag Element)
  this.document.getElementsByTagName("header");
  this.document.getElementsByClassName("header");
  // - CSS 선택자를 이용해서 선택하고 싶어요. (Css Selector)
  this.document.querySelector(".header");
  this.document.querySelectorAll(".header");
  // - ID 선택자를 이용해서 선택하고 싶어요. (ID)
  this.document.getElementById("header");
});
```

- 예제

```js
// DOM 만 완성화면 됩니다. 기준으로 코드를 진행함.
// div 기준영역을 잡는걸 권장한다.
window.addEventListener("DOMContentLoaded", function () {
  const header = this.document.querySelector(".header");
  console.log(header);

  const logo = this.document.querySelector(".logo");
  console.log(logo);

  const search = this.document.querySelector(".search");
  console.log(search);

  const headerNav = this.document.querySelector(".header_bottom_nav");
  console.log(headerNav);

  const eventMenu = this.document.querySelector(".header_bottom_eventmenu");
  console.log(eventMenu);

  const memberMenu = this.document.querySelector(".header_top_right");
  console.log(memberMenu);
});
```

## 다양한 이벤트의 이해

- 웹브라우저가 체크하는 변화를 `이벤트` 라고 함.
- 이벤트 작성법 3가지

### 1. 태그에 직접 이벤트 작성하기

- 장점 바로 직관적으로 알수있다.
- 단점 모든 css를 다 화긴해야한다.

```js
<header class="header" onclick="alert('안녕')"> </heard>

```

### 2. 요소에 속성으로 이벤트 작성하기

```js
// 속성
const aaa = {
  속성1 : 값,
  속성2 : function(){},

}
// 리터럴
aaa.속성1 =100;
aaa.속성2 =fucntion(){};

// DOM 만 완성화면 됩니다. 기준으로 코드를 진행함.
// div 기준영역을 잡는걸 권장한다.

요소.on이벤트 = function () {};
window.addEventListener("DOMContentLoaded", function () {

const header = this.document.querySelector(".header");
header.onclick = function () {
    alert("반가워");
};

  const logo = this.document.querySelector(".logo");
  console.log(logo);

  const search = this.document.querySelector(".search");
  console.log(search);

  const headerNav = this.document.querySelector(".header_bottom_nav");
  console.log(headerNav);

  const eventMenu = this.document.querySelector(".header_bottom_eventmenu");
  console.log(eventMenu);

  const memberMenu = this.document.querySelector(".header_top_right");
  console.log(memberMenu);
});


```

### 3. 요소에 이벤트 핸들러로 이벤트 작성하기(표준)

```js
요소.addEventListener("이벤트", function () {});

const header = this.document.querySelector(".header");
header.addEventListener("click", function () {
  alert("표준 반가워");
});
```

### 4. 활용빈도가 높은 이벤트

- `load` :
- `DOMContentLoaded` :
- `resize` : 웹브라우저 너비, 높이 변경시 발생
- `scroll` : 웹브라우저에 스크롤이 일어나면 발생

### 5. 활용빈도가 높은 `마우스 이벤트`

- `click` : 마우스 클릭(왼쪽)
- `mouseenter` : 마우스 커서가 요소에 걸쳐지면
- `mouseleave` : 마우스 커서가 요소에서 벗어나면

### 6. 활용빈도가 높은 `키보드 이벤트`

- `keyup` : 키보드에서 키 입력 후 이벤트
- `keydown` : 키보드에서 키 입력 후 이벤트
- `keypress` : 키보드에서 키누르고 있으면 이벤트

### 7. 활용 빈도가 높은 Form 관련 이벤트 (추후 정리)

## CSS 제어법

### 1. inline 형태로 적용하기 (가끔 활용함)

- `대상.style.css속성 = 값`

```js
// DOM 만 완성화면 됩니다. 기준으로 코드를 진행함.
//div 기준영역을 잡는걸 권장한다
// 아래 문장은 html이 완성되어졌다면 실행하자.
window.addEventListener("DOMContentLoaded", function () {
  // 아래 구문은 header 변수를 만들고 html (document)에서 css 선택자로 값을 셋팅
  const header = this.document.querySelector(".header");
  //header.onclick = function () {
  //alert("반가워");
  //};
  //  console.log(header);

  const logo = this.document.querySelector(".logo");
  //console.log(logo);

  const search = this.document.querySelector(".search");
  //console.log(search);

  const headerNav = this.document.querySelector(".header_bottom_nav");
  //console.log(headerNav);

  const eventMenu = this.document.querySelector(".header_bottom_eventmenu");
  //console.log(eventMenu);
  const memberMenu = this.document.querySelector(".header_top_right");
  //console.log(memberMenu);

  // 윈도우에 스크롤(scroll 이벤트)이 일어난다면 기능을 작동하겠다.
  this.window.addEventListener("scroll", function () {
    // 스크롤이 되었을 때 스크롤바의 Y 축의 상단 픽셀 위치값
    const scrollY = this.window.scrollY;
    const headerTopH = this.document.querySelector(".header_top");
    console.log(headerTopH.offsetHeight);

    // 만약 50보다 작으면 전체를 보이고, 그렇지 않으면 일부분을 숨긴다.
    if (scrollY <= headerTopH.offsetHeight) {
      //console.log("모두 보여라");
      logo.style.display = "block";
      eventMenu.style.display = "block";
    } else {
      // console.log("일부만 보여라");
      // 로고를 CSS로 제어하겠다.
      logo.style.display = "none";
      eventMenu.style.display = "none";
      search.style.position = "absolute";
      search.style.left = "350px";
      search.style.top = "48px";
    }
    // console.log("스크롤 : " + scrollY);
  });
});
```

### 2. css 클래스 활용하기 (적극 활용함)

- `대상.classList.add("클래스명")`
- `대상.classList.remove("클래스명")`
- `대상.classList.toggle("클래스명")` add remove 자동으로하는거
- `대상.classList.contain("클래스명")` 클래스가 있냐 없냐 라는 것을 판별

```js
// DOM 만 완성화면 됩니다. 기준으로 코드를 진행함.
//div 기준영역을 잡는걸 권장한다
// 아래 문장은 html이 완성되어졌다면 실행하자.
window.addEventListener("DOMContentLoaded", function () {
  // 아래 구문은 header 변수를 만들고 html (document)에서 css 선택자로 값을 셋팅
  const header = this.document.querySelector(".header");
  const header_top = this.document.querySelector(".header_top");
  //header.onclick = function () {
  //alert("반가워");
  //};
  //  console.log(header);

  const logo = this.document.querySelector(".logo");
  //console.log(logo);

  const search = this.document.querySelector(".search");
  //console.log(search);

  const headerNav = this.document.querySelector(".header_bottom");
  //console.log(headerNav);

  const eventMenu = this.document.querySelector(".header_bottom_eventmenu");
  //console.log(eventMenu);
  const memberMenu = this.document.querySelector(".header_top_right");
  //console.log(memberMenu);

  // 윈도우에 스크롤(scroll 이벤트)이 일어난다면 기능을 작동하겠다.
  this.window.addEventListener("scroll", function () {
    // 스크롤이 되었을 때 스크롤바의 Y 축의 상단 픽셀 위치값
    const scrollY = this.window.scrollY;
    const headerTopH = this.document.querySelector(".header_top");
    console.log(headerTopH.offsetHeight);

    // 만약 50보다 작으면 전체를 보이고, 그렇지 않으면 일부분을 숨긴다.
    if (scrollY <= headerTopH.offsetHeight) {
      //console.log("모두 보여라");
      logo.style.display = "block";
      eventMenu.style.display = "block";

      //class 제거로 변경
      search.classList.remove("search_down");
      memberMenu.classList.remove("member_down");
      header.classList.remove("header_down");
      header_top.classList.remove("header_down");
    } else {
      // console.log("일부만 보여라");
      // 로고를 CSS로 제어하겠다.
      logo.style.display = "none";
      eventMenu.style.display = "none";
      // search.style.position = "absolute";
      // search.style.left = "350px";
      // search.style.top = "48px";

      //class 추가
      search.classList.add("search_down");
      memberMenu.classList.add("member_down");
      header.classList.add("header_down");
      header_top.classList.add("header_down");
    }
    // console.log("스크롤 : " + scrollY);
  });
});
```

- 아래 처럼 css 만들어서 당겨와서 쓴다

```css
.header_down {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 100;
}
.header_top_down {
  margin: 0px;
}
.search_down {
  position: absolute;
  left: 350px;
  top: 30px;
}
```

## 슬라이드 외부 라이브러리 활용하기

- 절대로 직접 만들지 마세요.
- `Swiper` : 가장 추천 (https://swiperjs.com/)
- `Slick` : 추천 (https://kenwheeler.github.io/slick/)
- `bxSlide` : 비추천 (https://bxslider.com/)
