function signup(e) {
    e.preventDefault();
    var username = document.getElementById('username').value;
    var email = document.getElementById('email-singup').value;
    var password = document.getElementById('password-singup').value;
    var agreeCheckbox = document.getElementById('checkbox-signup');
    // Kiểm tra xem người dùng đã nhập đầy đủ thông tin đăng ký chưa
    if (username === '' || email === '' || password === '') {
        Swal.fire({
            icon: 'error',
            title: 'Lỗi',
            text: 'Vui lòng nhập đầy đủ thông tin đăng ký!',
        });
        return;
    }

    // Kiểm tra định dạng email
    var emailCheck = /^[a-zA-Z0-9._-]+@gmail\.com$/;

    if (!emailCheck.test(email)) {
        Swal.fire({
            icon: 'error',
            title: 'lỗi',
            text: 'Vui lòng nhập địa chỉ email hợp lệ!',
        });
        return;
    }

    // Kiểm tra độ dài của mật khẩu
    if (password.length < 10) {
        Swal.fire({
            icon: 'error',
            title: 'lỗi',
            text: 'Mật khẩu phải có ít nhất 10 kí tự!',
        });
        return;
    }

    // Kiểm tra xem người dùng đã đăng ký trước đó chưa
    if (localStorage.getItem(username)) {
        Swal.fire({
            icon: 'error',
            title: 'Lỗi',
            text: 'Tên đăng nhập này đã được sử dụng!',
        });
        return;
    }

    // Kiểm tra xem người dùng đã chọn checkbox chưa
    if (!agreeCheckbox.checked) {
        Swal.fire({
            icon: 'error',
            title: 'Lỗi',
            text: 'Bạn cần đồng ý với các điều khoản trước khi đăng ký!',
        });
        return;
    }

    var user = {
        username: username,
        email: email,
        password: password,
    }
    var json = JSON.stringify(user);
    localStorage.setItem(username, json);

    // Thiết lập lại giá trị của mẫu đăng ký thành rỗng (null)
    document.getElementById('username').value = '';
    document.getElementById('email-singup').value = '';
    document.getElementById('password-singup').value = '';
    agreeCheckbox.checked = false;

    Swal.fire({
        icon: 'success',
        title: 'Thành công',
        text: 'Đăng kí thành công',
    });
}

function login(e) {
    e.preventDefault();
    var username = document.getElementById('username-login').value;
    var email = document.getElementById('email-login').value;
    var password = document.getElementById('password-login').value;
    var user = JSON.parse(localStorage.getItem(username));
    if (username === '' || email === '' || password === '') {
        Swal.fire({
            icon: 'error',
            title: 'Lỗi',
            text: 'Vui lòng nhập đầy đủ thông tin đăng nhập!',
        });
        return;
    }
    else if (user && user.email === email && user.password === password) {
        window.location.href = "index.html";
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Lỗi',
            text: 'Đăng nhập không thành công, vui lòng kiểm tra lại thông tin!',
        });
        return;
    }
}

