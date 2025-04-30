# css

- html을 꾸며주기
- display 중요함.
- position 중요함.

## 1. css 작성법 3가지

- 작성법 3가지 중에 누가 최종적으로 적용되는가?(누가 힘이 쎈가?)

### 1.1. inline 방식

    - html 태그에 직접 작성해 주는 방식

### 1.2. link 방식

    - file 로 작성해서 link 하는 방식 (경로/파일명.css)
    - css 폴더/common.css 파일 생성

### 1.3. @import방식

    - css 파일에서 또다른 css 파일을 참조하는 방식

## 2. 모든 태그에 초기화 진행하기

- 웹 브라우저 마다 기본적인 css 는 적용이 되어있음.
- 그래서, 웹브라우저 마다 모양이 다르게 보인다.
- 아래 내용은 css 값으로 추천합니다.

```css
@charset "utf-8";
* {
  margin: 0;
  padding: 0;
  outline-style: none; /*선택사항*/
  box-sizing: border-box;
  /*  선택영역이 안보이게 하는거 커서나 선택이가면 어디 선택하고 있는지 보이게하는거 
    없애는거 outline-style: none; */
  /* 영역기준으로 모든걸 계산해서 테두리 그리는거/ 디자이너가 주는데로 이미지 박을려고 하는거
    box-sizing : border-box; */
}
```

## 3. 선택하는 법(selector)

### 3.1. 태그 선택법

```css
태그 {
}
```

- css/common.css 예제

```css
@charset "utf-8";
* {
  margin: 0;
  padding: 0;
  outline-style: none; /*선택사항*/
  box-sizing: border-box;
  /*  선택영역이 안보이게 하는거 커서나 선택이가면 어디 선택하고 있는지 보이게하는거 
    없애는거 outline-style: none; */
  /* 영역기준으로 모든걸 계산해서 테두리 그리는거/ 디자이너가 주는데로 이미지 박을려고 하는거
    box-sizing : border-box; */
}

/* 대상 구역명 {}<<-  대괄호 안에 다쓴다 // 이걸 body 바로 뒤에 박아도 실행은됨*/
/* body {
  background-color: rgb(240, 209, 107, 0.966);
  color: red;
}
div.wrap {
  border: 5px solid black;
}

header {
  background-color: yellowgreen;
} */

/* 태그 선택 : 추천하는 각 태그별 기본 값*/
a {
  text-decoration: none; /*언더라인 없애는거*/
  /*디자인 보고 수정*/
  color: #000000; /*#적고 rgb 값적으면 적용됨 rgb(r,g,b)이런식 값 넣어도됨*/
}
ul {
  list-style: none; /* 의도하지 않은 점은 뺐다*/
  padding: 100px; /* 앞에 들여쓰기 */
}
html {
  width: 100%; /*너비 가득 채워라*/
  /*디자인 보고 수정*/
  font-size: 12px; /*글자 기본 크기 대중적으로 사용하는 크기(16)*/
}
body {
  width: 100%; /*너비 가득 채워라*/
  font-size: 1rem; /*전체 html에 지정해둔 수에서 배수 지금은 x1 인거고 xn이 가능*/
  /* 디자인 보고 수정 */
  color: #000000; /*본문의 글씨 색상은 검은색이다*/
  /* 글꼴이 필요로 함 . */
}
```

### 3.2. 클래스 선택법

```css
태그.클래스명 {
}
```

```css
.클래스 {
}
```

### 3.3. 단계별 선택법

```css
태그 > 태그 > 태그 {
}
```

```css
.클래스 > 태그 > 태그 {
}
```

### 3.4. 범위 선택법

- div div {} 이런식이면 div 안에 모든 div를 찾아라임

```css
태그 태그 {
}
```

- .클래스 div {} .클래스 안에서 모든 div

```css
.클래스 태그 {
}
```

## 4. display의 이해

### 4.1 display: block

- 벽돌 처럼 한 영역을 모두 차지한다.
- 공간이 남더라도 절대로 양보하지 않음.
- div, ul, li, h1~h6, p 태그 등은 defaut 로 block이 적용되어있다.

### 4.2. display: inline

- 너비, 높이 지정불가
- 한줄에 배치해라 라고 되서 데이터 양 많큼 공간 배열 설정하고 한라인으로 다 출력을 해버린다.
- <div></div> 이런식으로 있으면 공백없이 옆에 박스 해서 다붙이는데
- <div></div>
  <div></div> 이런식이면 데이터 사이 공백이 발생한다.
- 글자 처럼 한줄에 배치가 가능하다.
- 그러나, width, height등이 적용안됨.
- img, span, b 태그 등은 default 로 inline 이 적용되어짐.
- 엔터키/공백 조차도 글자로 인식한다
- font-size 0; 하면 엔터키 공백 줄일수 있다.(안의 글자도 0됨)

### 4.3 display:inline-block;

- 한줄의 배치가 가능하다.
- 그러나 width, height 등이 적용이됨.
- <div></div>
  <div></div> 이런식이면 데이터 사이 공백이 발생한다.
- font-size 0; 하면 엔터키 공백 줄일수 있다.(안의 글자도 0됨)
- 엔터키에 의한 공백을 없애려면 font-size:0 적용
-

### 4.4 block을 유지하면서 inline 적용하기

- overflow: hidden 과 float: left 조합

```css
@charset "utf-8";
.box_wrap {
  display: block;
  border: 3px solid red;
  overflow: hidden;
}
.box {
  display: block;
  width: 50px;
  border: 3px solid black;
  float: left;
}
```

- float: left;
- block을 유지하면서 바로 바로 옆에 붙을수있다(공백을 없앤다)
- 대신 상위 그룹의 범위를 무시하는 경우가 있다
  그래서 이걸 넣으면 overflow: hidden; 상위 그룹의 범위를 보존이 가능하다.

  ### 4.4.1. orverflow::fidden으로 레이아웃 유지

  ```css
  .box_wrap {
    display: block;
    border: 3px solid red;
  }
  .clearboth::after {
    content: "";
    display: block;
    width: 100%;
    clear: both;
  }

  .box {
    display: block;
    width: 50px;
    border: 3px solid black;
    float: left;
  }
  ```

  ### 4.4.2 clearboth 클래스 만들어서 레이아웃 유지

  ```css
  .box_wrap {
    display: block;
    border: 3px solid red;
  }
  .clearboth::after
      /*  .box_wrap::after box_wrap의 영역안의 마지막 부분을 after
      맨처음을 before로 지정 가능하다. float: left;가 있으면 앞으로 안가고 맨뒤로 가게 된다 새로운 것은 무조건 왼쪽으로 붙여서*/ {
    content: "";
    display: block;
    width: 100%;
    clear: both;
    /* clear:both 는 float : left 를 못붙이게 하는거 */
  }
  .box {
    display: block;
    width: 50px;
    border: 3px solid black;
    float: left;
  }
  ```

  ### 4.4.3 heigth 를 주어서 레이아웃 유지

```css
.box_wrap {
  display: block;
  border: 3px solid red;
  height: 100px;
}
.box {
  display: block;
  width: 50px;
  border: 3px solid black;
  float: left;
}
```

## 4.5. display: none

- 화면에 내용을 안보이게 함.(스크롤이 되면)
- 실제로 태그가 없는 것처럼 작동함.
- `js 에서 태그를 찾아서 기능을 부여 못 할수도 있다.`

### 4.6. 가능하면 flex 적극 도입

- https://studiomeal.com/archives/197

## 5. css 적용 우선 순위

### 5.1. 태그 css가 만약 중복이라면

- 1번 inline 스타일 시트는 사장 우선 적용이 된다.

- 2번 `작성 순서가 마지막에 것이 적용`된다.
-

```css
div {
  background-color: yellowgreen;
}
/* 아래에 작성했으로 덮어씌움. */
div {
  background-color: orange;
}
```

- 3번 `클래스가 태그보다 우선순위가 높다`

```css
.box_wrap {
  background-color: hotpink;
}
div {
  background-color: yellowgreen;
}
```

- 4번 `클래스가 중복이라면 작성순서가 나중이 우선권`

```html
<style>
  .box_wrap {
    background-color: hotpink;
  }
  .hi {
    background-color: yellowgreen;
  }
</style>
<div class="box_wrap clearboth hi">안녕</div>
```

- 5번 `id는 최우선권을 가진다. 단. inline은 못이김.`
- id는 단 1개만 적용 가능
- id는 javascrip // style 시트는 class

```html
<style>
  #gogo {
    background-color: brown;
  }
  .box_wrap {
    background-color: hotpink;
  }
  .hi {
    background-color: yellowgreen;
  }
</style>
<div class="box_wrap clearboth hi">안녕</div>
```

- 6번 `단계 선택이 범위선택 보다 우선권 가짐`

```html
<style>
  ul > li > a {
    background-color: green;
  }
  ul a {
    background-color: red;
  }
</style>
```

### 5.2. 무조건 적용하기

```html
<style>
  div {
    background-color: yellowgreen !important;
  }
</style>
```

### 5.3. 우선 순위 정리

- 작성 순서를 고려함.
  `태그 < 클래스 < 아이디 < 인라인`
- 랜더링 과정을 고려함
  `태그 ==> 태그 구조 (DOM)==> 태그 css => 클래스css ==> 인라인 css`

- 웹브라우저의 F12을 참조하자.
- !importent는 정말 해결이 필요한 곳에만 활용

## 6. 끌골 설정

- 반드시 글꼴 설정 후 작업이 진행 되어야 합니다.
- 글자의 종류와 글자 간의 간격, 행간의 간격, 글꼴의 크기 등이 너비, 높이 등의 단위가 됩니다.
- body 셋팅을 위한 자료임.
-

### 6.1. 글꼴 구하기

- `웹폰트` 와 `로컬 폰트`의 구분 및 이해
- 구글폰트 (https://fonts.google.com/)
- 눈누 (https://noonnu.cc/font_page/pick)
- 깃허브 (https://github.com/orioncactus/pretendard)
- 아이콘폰트 (https://fontawesome.com/icons)

### 6.2. 글꼴 활용하기

- css/common.css 참조

## 7. CSS 살펴보기

- margin (영역 바깥으로의 여백)
- margin-top은 오류가 발생할 수 있다.

## position을 꼭 기억하자.
