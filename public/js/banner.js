// DOM은 html 코드만 있으면 실행되게 하는게 좋고
// 이미지 까지 다불러오고 실행하는걸 원하면 load 왠만하면 load로 사용한다
window.addEventListener("load", function () {
  // 1. 데이터를 가져옮
  // 2. 데이터를 해석해서 html 생성

  const swBannerWrap = this.document.querySelector(
    ".sw_banner .swiper-wrapper"
  );
  // 완성시킬 html 글자
  let htmlTag = "";
  for (let i = 0; i < 6; i++) {
    const tag = `
        <div class="swiper-slide">
                <div class="banner_list">
                <a href="#">
                <img src="images/v1.png" alt="banner" title="배너" />
                </a>
                </div>
        </div>`;
    htmlTag = htmlTag + tag;
  }
  // 외우세요. 글자를 html  태그로 넣는법
  swBannerWrap.innerHTML = htmlTag;

  console.log(htmlTag);

  // 3. slide 를 생성하고 작동 시킨다.
  const swiper = new Swiper(".sw_banner", {
    slidesPerView: 2,
    spaceBetween: 25,
    speed: 1500,
    loop: true,
    pagination: {
      el: ".sw_banner .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".banner_right",
      prevEl: ".banner_left",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
  const swBanner = this.document.querySelector(".sw_banner");
  swBanner.addEventListener("mouseenter", function () {
    swiper.autoplay.stop();
  });
  swBanner.addEventListener("mouseleave", function () {
    swiper.autoplay.start();
  });
});
