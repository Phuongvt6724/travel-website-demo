

// Lấy danh sách các sản phẩm
const products = document.querySelectorAll('.list-product');

// Lặp qua danh sách các sản phẩm và thêm sự kiện click cho mỗi sản phẩm
products.forEach((product) => {
    product.addEventListener('click', (event) => {
        // Lấy thông tin sản phẩm
        const productImg = product.querySelector('img').getAttribute('src');
        const productName = product.querySelector('h3').textContent;
        const productPrice = product.querySelector('.price-product span:first-child').textContent.trim();

        // Lưu thông tin sản phẩm vào localStorage
        localStorage.setItem('productImg', productImg);
        localStorage.setItem('productName', productName);
        localStorage.setItem('productPrice', productPrice);

        // Chuyển đến trang web2.html
        // window.location.href = "web2.html";
    });
});