const btn = document.querySelector(".btn");
const btnCircle = document.querySelector(".btnCircle");
const topBg = document.querySelector(".topBg");
const mainText = document.querySelector(".mainText");
const darkText = document.querySelector(".darkText");
const midText = document.querySelector(".midText");
const cards = document.querySelectorAll(".allDash");
const mineCards = document.querySelectorAll(".overFaceOne");
const main = document.querySelector("body");

btn.addEventListener("click", function () {
  btnCircle.classList.toggle("btnCircleDark");
  btn.classList.toggle("changeDarkmodeBtnBG");
  mineCards.forEach((ele) => {
    ele.classList.toggle("changeBGCards");
  });
  topBg.classList.toggle("changetopBg");
  cards.forEach((item) => {
    item.classList.toggle("changeBGCards");
  });
  main.classList.toggle("changeBG");
  mainText.classList.toggle("changeMainText");
  main.classList.toggle("changeMainText");
  darkText.classList.toggle("changeMainText");
  midText.classList.toggle("changeMainText");
});
