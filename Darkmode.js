// giữ nguyên trạng thái nút và background màn hình khi reset
document.querySelector('#checkbox_toggle').addEventListener('click', function () {
    if (this.checked) {
        document.querySelector('.checkbox').classList.toggle('active');
        var isNightMode = document.querySelector('.checkbox').classList.contains('active');
        sessionStorage.setItem('nightMode', isNightMode);

        document.querySelector('body').classList.toggle('dark');
        var isDarkMode = document.querySelector('body').classList.contains('dark');
        sessionStorage.setItem('darkMode', isDarkMode);
    }
})

if (sessionStorage.getItem('nightMode') === 'true') {
    document.querySelector('.checkbox').classList.add('active')
}

if (sessionStorage.getItem('darkMode') === 'true') {
    document.querySelector('body').classList.add('dark');
}




var audio = document.getElementById('myAudio');
var btn = document.querySelector('.boxAudio');


audio.addEventListener('play', function () {
    btn.classList.add('playing');
});

audio.addEventListener('pause', function () {
    btn.classList.remove('playing');
});

