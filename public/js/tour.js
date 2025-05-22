// 이미지 등의 리소스가 불러들여지면 그떄 슬라이드 처리가 자연스러움
// load 이벤트를 썻다
window.addEventListener("load", function () {
  //api주소
  const apiUrl = "http://127.0.0.1:5500/public/api/tour/tour.json";

  // 현재 출력한 카테고리 /검은색 버튼으로 변경
  let cateFocusIndex = 0;

  // 카테고리 button 태그 DOM 보관
  let cateButtonArr = [];

  // 카테고리 글자 배열 // const로하면 변수 변경안되서 이거는 let로해야 전역에서 원본데이터를 복사해서 쓸 수 있다
  let cateNameArr = [];

  // 카테고리별 목록 배열
  let cateListArr = [];

  // 투어 슬라이드 변수
  let swTour;

  // aopi 호출 함수 // 외부데이터 연동 try catch 무조건 있어야한다
  async function getData(_url, _fn) {
    try {
      const res = await fetch(_url);
      const data = await res.json();
      _fn(data);
    } catch (error) {
      console.log(error);
    }
  }

  // 데이터를 처리하는 함수
  const parseData = function (_data) {
    // console.log(_data);
    //1. 카테고리 글자만 추출하기
    // 아래랑 같음
    // const cateArr = _data.map(function (item, index, arr) {
    //   return item.cate;
    // });
    // 아래 가 화살표 함수 - 한줄만 쓸떄는 아래와같이 표현한다 위에 주석과 같은내용
    const cateArr = _data.map((item) => item.cate);
    // console.log(cateArr);
    // 아래는 배열 복사방법
    cateNameArr = [...cateArr];

    // 2. 카테고리 목록만 출력 하기
    // const listArr = _data.map((item) => item.list);
    const listArr = _data.map(function (item, index, arr) {
      return item.list;
    });
    // console.log(listArr);
    cateListArr = [...listArr];
    console.log(cateListArr);

    makeTourInit();
    activeCateFocus();
    addBtsEvent();
  };

  // 번호에 따라서 실제 화면에 보여줄 tag 만들기
  // 최초 데이터가 전달되면 1번만 실행
  // 카테고리 버튼은 1번만 만들어도됨.
  function makeTourInit(_index) {
    //console.log(cateNameArr);
    //console.log(cateListArr);

    // 배치될 장소
    const cateBts = document.querySelector(".section_category_bts");

    // 최종 html 글자
    let html = "";
    // for (let i; i < cateNameArr.length; i++) {
    //   const tag = `<li><button>${cateNameArr[i]}</button></li>`;
    //   html += tag;
    // }

    cateNameArr.forEach((item, index) => {
      const tag = `<li><button>${item}</button></li>`;
      // const tag = `<li><button onclick ="changeFocusIndex(${index})">${item}</button></li>`;
      html = html + tag;
    });

    // cateNameArr.forEach(function (item, index) {
    //   let tag = "";
    //   if (index === 0) {
    //     tag = `<li><button class="cate_focus">${item}</button></li>`;
    //   } else {
    //     tag = `<li><button>${item}</button></li>`;
    //   }
    //   html = html + tag;
    // });
    cateBts.innerHTML = html;

    // 버튼 태그 모음
    cateButtonArr = document.querySelectorAll(
      ".section_category_bts > li > button"
    );

    console.log(html);
  }

  // 카테고리 현재 인덱스 변경하기
  function chageFocusIndex(_index) {
    cateFocusIndex = _index;
    //console.log("gogogo");
    activeCateFocus();
  }

  // 실시간으로 생성된 버튼에 이벤트 연결 하기
  function addBtsEvent() {
    cateButtonArr.forEach(function (item, index) {
      item.addEventListener("click", function () {
        // 동일한 버튼 클릭시 작동 방지 (류지민 협찬)
        if (cateFocusIndex === index) {
          return;
        }
        cateFocusIndex = index;
        removeFocusAll();
        activeCateFocus();
      });
    });
  }

  // 포커스 모두 제거하기
  function removeFocusAll() {
    cateButtonArr.forEach(function (item) {
      item.classList.remove("cate_focus");
    });
    console.log(cateButtonArr);
  }

  // 카테고리 버튼에 현재 포커스(검은 버튼) 표현하기
  function activeCateFocus() {
    const bts = document.querySelectorAll(
      ".section_category_bts > li > button"
    );
    bts[cateFocusIndex].classList.add("cate_focus");
    cateButtonArr[cateFocusIndex].classList.add("cate_focus");
    makeTourListHtml();
    //console.log(bts);
  }

  // 목록 html 을 만든다.
  function makeTourListHtml() {
    console.log("어느 목록을 출력할 것인가? " + cateListArr[cateFocusIndex]);
    // 1. html 태그만들기
    // 1.1. 어디다가 만들지? querySelector 찾아줌.
    const swTourWrap = document.querySelector(".sw_tour .swiper-wrapper");
    // 1.2. html 로 만들기
    let html = "";
    const listArr = cateListArr[cateFocusIndex];
    listArr.forEach(function (item) {
      const tag = `
      <div class="swiper-slide">
        <div class="item">
          <a href="${item.link}">
            <div class="item_image">
              <img
                src="${item.image}"
                alt="${item.title}"
                title="${item.title}"
              />
            </div>
            <span class="item_name">${item.city}</span>
            <div class="item_text">
              <span class="item_cupon">
              ${item.title}
              </span>
              <p class="item_desc">
              ${item.content}
              </p>
              <span class="item_price"><b>${item.price}</b>원~</span>
            </div>
          </a>
        </div>
      </div>
      `;
      html = html + tag;
    });
    swTourWrap.innerHTML = html;

    // 2. 항상 슬라이드가 만들어져 있다면 삭제하고
    if (swTour) {
      // swiper 를 제거합니다. (swiper 사이트의 레퍼런스 참조)
      swTour.destroy(true, true);
    }

    // 3. 슬라이드를 생성해야 합니다.
    swTour = new Swiper(".sw_tour", {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroupSkip: 3,
      navigation: {
        nextEl: ".tour_next",
        prevEl: ".tour_prev",
      },
    });

    // 2. swiper 생성
  }
  // 함수 호출
  getData(apiUrl, parseData);
});

// swiper 를 먼저 테스트를 한다
