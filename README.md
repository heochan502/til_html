# css

- html 을 꾸며주기
- display 중요
- position 중요

## 1. css 작성법 3가지

- 작성법 3가지 중 누가 최종적으로 적용되는가 ? (뭐가 우선 순위인가)

#### 1-1. lnline 방식

- html 태그에 직접 작성해 주는 방식

#### 1-2. link 방식 (추천)

- file로 작성해서 link 하는 방식(경로/파일명.css)
- css 폴더/common.css 파일을 생성

#### 1-3. @import 방식 (글꼴)

- css 파일에서 다른 css 파일을 참조하는 방식

## 2. 모든 태그에 초기화 진행하기

- 웹브라우저 마다 기본적인 css 는 적용이 되어 있음
- 그래서 웹브라우저 마다 모양이 다르게 보인다
- 아래 내용은 기본 css 값으로 추천

```
@charset "utf-8";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  선택 사항 /_ outline-style: none; _/
```

## 3.선택하는 방법(selector)

#### 1-1. 태그 선택 방법

```css
태그 {
}
```

- css/common.css 예

```css
@charset "utf-8";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  /* outline-style: none; */
}

/* 태그 선택 : 추천하는 각 태그별 기본 값*/
a {
  text-decoration: none;
  color: #000000; /* 디자인 보고 수정 */
}
ul {
  list-style: none;
}
html {
  width: 100%;
  font-size: 12px; /* 디자인 보고 수정 */
}
body {
  width: 100%;
  font-size: 1rem;
  color: #000000; /* 디자인 보고 수정 */
  /* 글꼴 필요 */
}
```

#### 1-2. 클래스 선택 방법

```css
.클래스명 {
}
```

```css
태그.클래스명 {
}
```
