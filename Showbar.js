// click vào icon hiện thị thanh điều hướng khi giao diện web chuyển sang moblie
document.querySelector("#toggle").addEventListener("click", function () {
    document.querySelector(".nav-bar").classList.toggle("active");
})



// click vào hiển thị vị trí vĩ độ và kinh độ
document.getElementById('buttonLocation').addEventListener('click', function () {
    document.querySelector('.boxhidden-location').classList.add('active');
})
document.querySelector("#exitLocation").addEventListener('click', function () {
    document.querySelector('.boxhidden-location').classList.remove('active');
    content.innerHTML = '';
})


let button = document.querySelector('#find-location');
let content = document.querySelector('#content');
button.addEventListener('click', function () {
    getLocation();
});

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function showPosition(p) {
            content.innerHTML = `Bạn nằm ở kinh độ: ${p.coords.longitude}
                                và vĩ độ: ${p.coords.latitude}`

        })
    } else {
        content.innerHTML = 'Trình duyệt của bạn không hổ trợ geolocation'
    }
}

