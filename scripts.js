const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");
const displayedImage = document.querySelector(".image");
const add = document.getElementById("addbutton");
const subtract = document.getElementById("subtractbutton");
let s = Number(document.querySelector(".indicator").textContent);
const addtocart = document.getElementById("addtocart");
img1.addEventListener("click", () => {
  displayedImage.setAttribute("src", img1.getAttribute("src"));
});
img2.addEventListener("click", () => {
  displayedImage.setAttribute("src", img2.getAttribute("src"));
});
img3.addEventListener("click", () => {
  displayedImage.setAttribute("src", img3.getAttribute("src"));
});
add.addEventListener("click", () => {
  s += 1;
  document.querySelector(".indicator p").textContent = s;
});
subtract.addEventListener("click", () => {
  if (s > 0) {
    s -= 1;
    document.querySelector(".indicator p").textContent = s;
  } else {
    document.querySelector(".indicator p").textContent = "0";
  }
});
