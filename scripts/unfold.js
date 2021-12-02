let x = 0;
// развернуть меню
function unfold() {
    x++;
    menu = document.querySelector("#mobile-menu");
    menu.classList.toggle("active");
    if (x == 1)
        document.getElementById("unfold").style = "background-image: url('images/close.png')";
    else
        document.getElementById("unfold").style = "background-image: url('images/menu.png')";
    x = x % 2;
}  