let productImg = document.querySelector("#productImg");
let btn = document.querySelectorAll(".btn");

btn[0].onclick = function () {
  productImg.src = "/image/image2.png";
  for (const bt of btn) {
    bt.classList.remove("active");
  }
  this.classList.add("active");
};
btn[1].onclick = function () {
  productImg.src = "/image/image3.png";
  for (const bt of btn) {
    bt.classList.remove("active");
  }
  this.classList.add("active");
};
btn[2].onclick = function () {
  productImg.src = "/image/image1.png";
  for (const bt of btn) {
    bt.classList.remove("active");
  }
  this.classList.add("active");
};
