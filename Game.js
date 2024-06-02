document.getElementById('buttonClick').addEventListener('click', function () {
    document.querySelector('.container-game').classList.add('active');
})

document.getElementById('exitGame').addEventListener('click', function () {
    document.querySelector('.container-game').classList.remove('active');
})

var count = 0;
function allowDrop(e) {
    e.preventDefault();
}

function drag(e) {
    e.dataTransfer.setData("text", e.target.id);
}

function drop(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    //Kiểm tra xem ô mà hình được thả vào có phải là ô đúng hay không
    if (e.target.classList.contains("box-square") && data === "Textremove2") {
        e.target.appendChild(document.getElementById(data));
        count++;
    } else if (e.target.classList.contains("box-rectangle") && data === "Textremove3") {
        e.target.appendChild(document.getElementById(data));
        count++;
    } else if (e.target.classList.contains("box-circle") && data === "Textremove") {
        e.target.appendChild(document.getElementById(data));
        count++;
    } else {
        return;
    }

    if (count === 3) {
        Swal.fire({
            icon: 'success',
            title: 'Thắng',
            text: 'Bạn nhận được 10 điểm thưởng tích tũy!',
        });
        return;
    }


}