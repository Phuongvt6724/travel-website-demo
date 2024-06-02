var boxContentElement = document.querySelector('.wrap-title-2');
var inputElement = document.querySelector('.row-contact-3 input');
var btnSendElement = document.querySelector('.row-contact-3 .btn-send');


btnSendElement.addEventListener('click', function () {
  var message = inputElement.value.trim();
  if (message !== '') {
    var messageElement = document.createElement('div');
    messageElement.classList.add('box-chat');
    messageElement.textContent = message;
    boxContentElement.appendChild(messageElement);
    inputElement.value = '';
    btnSendElement.classList.remove('show');
  }
});

inputElement.addEventListener('input', function () {
  if (inputElement.value.trim() !== '') {
    btnSendElement.classList.add('show');
  } else {
    btnSendElement.classList.remove('show');
  }
});


