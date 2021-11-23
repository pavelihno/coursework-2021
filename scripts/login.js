document.getElementById('check').onclick = function() {
    let login = document.getElementById('login').value;
    let password = document.getElementById('password').value;

    if (login.length && password.length) {
        window.location.href = "profile.html";
    }
    else {
        alert("Неверный логин или пароль");
    }
}