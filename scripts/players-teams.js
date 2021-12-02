// кнопки навигации
let lflButton = document.getElementById('lfl-button');
let aflButton = document.getElementById('afl-button');
let lfcButton = document.getElementById('lfc-button');
let otherButton = document.getElementById('other-button');
let buttons = [lflButton, aflButton, lfcButton, otherButton];

// информативные блоки
let lfl = document.getElementById('lfl');
let afl = document.getElementById('afl');
let lfc = document.getElementById('lfc');
let other = document.getElementById('other');
let blocks = [lfl, afl, lfc, other];

// отобразить информативный блок
function display(i) {
    for (let j = 0; j < 4; j++) {
        // отключить видимость
        if (j != i) {
            buttons[j].style["border"] = "none";
            buttons[j].style["background"] = "transparent";
            blocks[j].style["display"] = "none";

        }
        // включить видимость
        else {
            buttons[j].style["border-bottom"] = "solid 1px #00000036";
            buttons[j].style["background"] = "#dddddda2";
            blocks[j].style["display"] = "flex";
        }
    }
}