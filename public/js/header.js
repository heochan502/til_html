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
window.addEventListener("DOMContentLoaded", function () {
  const header = this.document.querySelector(".header");
  header.onclick = function () {
    alert("반가워");
  };
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

  this.window.addEventListener("scroll", function () {
    const scrollY = this.window.scrollY;
    const headerTopH = this.document.querySelector(".header_top");
    console.log(headerTopH.offsetHeight);

    if (scrollY <= headerTopH.offsetHeight) {
      console.log("모두 보여라");
    } else {
      console.log("일부만 보여라");
    }
    // console.log("스크롤 : " + scrollY);
  });
});
