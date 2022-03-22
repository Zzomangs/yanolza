const home = document.querySelector(".site_header");
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  //   console.log(`homeHeight: ${homeHeight}`);    663

  // 컨셉) opacity 값을 바로 적용. (1-스크롤px / 홈의 높이)
  //   console.log(1 - window.scrollY / homeHeight); -> opacity의 값.
  home.style.opacity = 0 + window.scrollY / homeHeight;
});