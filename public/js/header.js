// // DOM 만 완성화면 됩니다. 기준으로 코드를 진행함.
// window.addEventListener("DOMContentLoaded", function () {
//     // 우리가 원하는 요소(Element) 를 선택하는 법?
//     // - Tag 를 선택하고 싶어요. (Tag Element)
//     this.document.getElementsByTagName("header");
//     this.document.getElementsByClassName("header");
//     // - CSS 선택자를 이용해서 선택하고 싶어요. (Css Selector)
//     this.document.querySelector(".header");
//     this.document.querySelectorAll(".header");
//     // - ID 선택자를 이용해서 선택하고 싶어요. (ID)
//     this.document.getElementById("header");
// });

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
  const member = this.document.querySelector(".header_top_right");
  //console.log(member);
  const banner = this.document.querySelector(".banner");

  const main = this.document.querySelector(".main");

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
      member.classList.remove("member_down");
      header.classList.remove("header_down");
      header_top.classList.remove("header_down");

      // eventMenu.classList.removed("header_bottom_eventmenu");
      //banner.classList.remove("banner_fix");
      main.classList.remove("main_fixed");
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
      member.classList.add("member_down");
      header.classList.add("header_down");

      // header_top.classList.add("header_down");
      //banner.classList.add("banner_fix");
      main.classList.add("main_fixed");
    }
    // console.log("스크롤 : " + scrollY);
  });
});
