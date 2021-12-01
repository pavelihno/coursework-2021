// войти
function enter() {
    let login = document.getElementById('l-login').value;
    let password = document.getElementById('l-password').value;

    if (login.length && password.length)
        window.location.href = "profile.html";
    else
        alert("Неверный логин или пароль");
}