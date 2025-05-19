//console.log("셋팅잘되었니?");
//footer를 찾아 보자 .
// const footer = document.getElementsByTagName("footer");
// console.log(footer);

// load의 대한 내용 html의 document가 모두 로드 되면 실행하기
// html 의 이미지, 파일 등등 리소스가 준비되면 실행하라라는 함수
// onload를 쓰면 안된다라는걸 보여주기위함
//"load" 는 모든 리소스를 확인하고
window.onload = function () {
  const wrap = document.querySelector(".wrap");
  // console.log(wrap);
};
// 표준입니다.
window.addEventListener("load", function () {
  const wrap = document.querySelector(".wrap");
  // console.log(wrap);
});
window.addEventListener("load", function () {
  // console.log("안녕");
});
// 위에께 덮어짐
// window.onload = function () {
//   console.log("안녕");
// };
// window.addEventListener("load");

// html 만 로드 완료를 체크합니다.
// DOM은 html 그 자체만 확인하고 실행하는거라 제일 먼저 실행
// 헤더만 쓰면 아래만 써서 위에 바로 박아버리기
window.addEventListener("DOMContentLoaded", function () {
  // console.log("로딩완료");
});
