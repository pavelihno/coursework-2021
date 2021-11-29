var lflButton = document.getElementById('lfl-button');
var aflButton = document.getElementById('afl-button');
var lfcButton = document.getElementById('lfc-button');
var otherButton = document.getElementById('other-button');
var buttons = [lflButton, aflButton, lfcButton, otherButton];

var lfl = document.getElementById('lfl');
var afl = document.getElementById('afl');
var lfc = document.getElementById('lfc');
var other = document.getElementById('other');
var blocks = [lfl, afl, lfc, other];

function display(i) {
    for (var j = 0; j < 4; j++) {
        // отключать видимость
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