//메인 픽스드 하기
//픽스드 내용변경

//const lang = document.querySelector("select");
//const wlogo = document.querySelector(".wLogo");
//const blogo = document.querySelector(".bLogo");
const header = document.querySelector("#header");
window.addEventListener("scroll", function () {
  if (window.scrollY > 70) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

/*
window.addEventListener("scroll", function () {
  if (window.scrollY > 70) {
    lang.classList.add("boxColorB");
  } else {
    lang.classList.remove("boxColorB");
  }
});
/*


window.addEventListener("scroll", function () {
  if (this.window.scrollY > 70) {
    wlogo.classList.add("displayN");
    blogo.classList.add("displayBb");

  } else {
    wlogo.classList.remove("displayN");
    blogo.classList.remove("displayBb");

  }
});*/

//화살표 위로가기버튼
const toTopBtn = document.querySelector("#topBtn");

window.addEventListener("scroll", function () {
  console.log(window.scrollY);
  if (window.scrollY > 300) {
    toTopBtn.style.display = "block";
    if (scrollY >= 4200) {
      toTopBtn.classList.add("stay-bottom");
    } else {
      toTopBtn.classList.remove("stay-bottom");
    } //4200에서 사라지면 버튼 사라진쪽에 고정
  } else {
    toTopBtn.style.display = "none";
  }
});
//css-.topBtn/#topBtn.stay-bottom 추가
//top버튼을 클릭하면 상단으로 이동
//toTopBtn을 클릭하면 해야할일
toTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
}); //***
