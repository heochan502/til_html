# CSS 정리

## 1. 추천 라이브러리(팀에서 협의)

- reset.css (https://meyerweb.com/eric/tools/css/reset/)
- normalize.css (https://necolas.github.io/normalize.css/)

- normalize 예제 (무조건 제일 위에)

```html
<link
  rel="Stylesheet"
  href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
/>
```

## 2. 추천

- header.css 는 무조건 z-index:999 이상
- header 영역이 스크롤시 `position:fixed 되면서 높이가 반영안됨.`
- header 영역이 margin의 오류로 padding 변경

```
margin-top 의 오류라고 해서 유명합니다. (웹 브라우저 문제)
이런 경우 padding-top 또는 테두리를 주어서 해결합니다.
```

- header 영역이 스크롤시 `position-fixed 되면서 높이가 반영안됨`

```
  position:fixed 라고 셋팅하면 높이값이 반영이 안됩니다.
  강제로 main 영역의 상단에 공간을 padding-top
```

- 베너 슬라이드는 단반향이라서 , 즉 무한루프 가아니라서 버튼 출력이 수정 필요

<!-- 반응형은 필수입니다.
  웹브라우저 너비에 맞추도록 div 들을 위치조절, 너비 조절, 속성 조절함.
    - 안어렵습니다
    - 넓은 화면을 먼저 작성하고
      작은 화면을 고친다 -->

## 3. CSS 자동 정리 도구 활용

- 필수 사항은 아닙니다.
- `ttps://h-owo-ld.tistory.com/184`
- `PostCSS Sorting` 검색 및 설치

```json
"postcssSorting.config": {
   "order": [
     "custom-properties",
     "dollar-variables",
     "at-variables",
     {
       "type": "at-rule",
       "name": "extend"
     },
     {
       "type": "at-rule",
       "name": "include"
     },
     "declarations",
     {
       "type": "at-rule",
       "name": "media"
     },
     "rules"
   ],
   "properties-order": [
     "position",
     "top",
     "right",
     "bottom",
     "left",
     "z-index",

     "display",
     "flex",
     "flex-grow",
     "flex-shrink",
     "flex-basis",
     "flex-direction",
     "flex-wrap",
     "justify-content",
     "align-items",
     "align-content",
     "order",

     "float",
     "clear",
     "box-sizing",
     "width",
     "min-width",
     "max-width",
     "height",
     "min-height",
     "max-height",
     "margin",
     "padding",
     "overflow",
     "overflow-x",
     "overflow-y",

     "font",
     "font-family",
     "font-size",
     "font-weight",
     "line-height",
     "letter-spacing",
     "text-align",
     "text-decoration",
     "text-transform",
     "color",

     "background",
     "background-color",
     "background-image",
     "background-size",
     "background-position",
     "background-repeat",

     "border",
     "border-width",
     "border-style",
     "border-color",
     "border-radius",

     "box-shadow",
     "opacity",
     "transition",
     "transform",

     "cursor",
     "visibility",
     "content"
   ],
   "unspecified-properties-position": "bottom"
 }
```

- 단축키 설정하기 : 설정 > Keyboard Shortcut 선택
- 검색어로 `postCSS Sorting` 선택 : shift +`

## 4. 반응형 작업

### 4-1. 필수 체크 사항

- 아래 구문이 없으면 화면 체크를 못해서 반응형 곤란

```js
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

- 포토샵 또는 Figma로 디자인 제공되어짐(PC, 타블렛, 모바일)
- 가능하면 큰 화면에서 모두 배치하고, 줄여가면서 배치하기를 권장
- 필요하면 작업하면서 계속 @media를 추가

```css
/* 최대 크기 */
@media all and (max-width: 1280px) {
}
@media all and (max-width: 1024px) {
}
@media all and (max-width: 960px) {
}
@media all and (max-width: 760px) {
}
@media all and (max-width: 540px) {
}
```

### 4-2. 작업시 참조

- 웹브라우저 F12 활용
- Dock 위치를 조절 or 디바이스 아이콘으로 화면을 띄우고 진행

### 4-3. CSS작업

```css
@media all and (max-width: 1280px) {
  .layout {
    max-width: 1024px;
  }
}
@media all and (max-width: 1240px) {
  .layout {
    max-width: 760px;
  }
}
@media all and (max-width: 760px) {
  .layout {
    max-width: 100%;
  }
}
```

- header 영역 css 작업
- header 와 반응형 header 를 분리해서 만들면 편함
