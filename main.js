const menu_icon = document.querySelector(".menu_icon");
const nav__con = document.querySelector(".nav__con");
const clsoe_icon = document.querySelector(".clsoe_icon");
const bodey = document.querySelector("body");
const darkBtn = document.querySelector(
  "body > header > div > div > nav > div.mode__and__menubtn > div.moon_icon"
);
const vokathis__text_qna = document.querySelectorAll(".vokathis__text_qna");
// -----------------------------
menu_icon.addEventListener("click", () => {
  nav__con.classList.toggle("active");
});
clsoe_icon.addEventListener("click", () => {
  nav__con.classList.remove("active");
});

darkBtn.addEventListener("click", () => {
  bodey.classList.toggle("dark__mode");
});

for (const items of vokathis__text_qna) {
  const curr_item = items.childNodes;
  const quation = curr_item[1];
  const ans = curr_item[3];
  const icon = quation.querySelector(".arrowGt__svg");
  icon.addEventListener("click", () => {
    ans.classList.toggle("disable");
  });
}

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});
