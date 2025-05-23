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

<!-- 반응형은 필수입니다.
  웹브라우저 너비에 맞추도록 div 들을 위치조절, 너비 조절, 속성 조절함.
    - 안어렵습니다
    - 넓은 화면을 먼저 작성하고
      작은 화면을 고친다 -->
