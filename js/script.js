const colors = [
  "#EBE76C",
  "#F0B86E",
  "#ED7B7B",
  "#836096",
  "#293462",
  "#F24C4C",
  "#EC9B3B",
  "#F7D716",
  "#FF6363",
  "#FFAB76",
  "#FFFDA2",
  "#BAFFB4"
];
// console.log(colors.length);
let currentIndex = 0;

const changeColorBody = document.getElementById("change-body-color");
// const changeColorTitle = document.getElementById("color-changer-title");
const changeColorButton = document.getElementById("colorBtn");
const colorDisplay = document.getElementById("colorDisplay");

changeColorButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % colors.length; // Cycle through colors
  //   console.log(currentIndex);
  colorDisplay.style.backgroundColor = colors[currentIndex];
  colorDisplay.textContent = colors[currentIndex];
  //   changeColorTitle.style.color = colors[currentIndex];
  changeColorBody.style.backgroundColor = colors[currentIndex];
});
