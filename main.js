const loginButton = document.getElementById('login-btn');
const userEmail = document.getElementById('user-email');
const userPassword = document.getElementById('user-password');
loginButton.addEventListener('click', function () {
    if (userEmail.value == 'riad' && userPassword.value == 'riad') {
        window.location.href = "bank.html";
    }
    else {
        alert('Unvalid Email or Password.');
    }

})