// Retrieve the product information from localStorage
const productImg = localStorage.getItem("productImg");
const productName = localStorage.getItem("productName");
const productPrice = localStorage.getItem("productPrice");

// Cập nhật thông tin sản phẩm trên trang
document.querySelector(".img-order img").src = productImg;
document.querySelector(".name-order").textContent = productName;
document.querySelector(".row-aside1 h2").textContent = productName;
document.querySelector(".total").textContent = productPrice;
