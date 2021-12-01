// изменяемые поля
var surname = document.getElementById('name');
var birthdate = document.getElementById('birthdate');
var position = document.getElementById('position');
var age = document.getElementById('age');
var tel = document.getElementById('tel-number');
var teams = document.getElementById('teams');
var leagues = document.getElementById('leagues');

// поля для ввода
var editSurname = document.getElementById('edit-name');
var editBirtdate = document.getElementById('edit-birthdate');
var editPosition = document.getElementById('edit-position');
var editTel = document.getElementById('edit-tel'); 
var editTeams = document.getElementById('edit-teams');
var editLeagues = document.getElementById('edit-leagues');

editSurname.setAttribute("value", surname.innerText);
editPosition.setAttribute("value", position.innerText);
editTel.setAttribute("value", tel.innerText);
editTeams.innerText = teams.innerText;
editLeagues.innerText = leagues.innerText

// изменить информацию в профиле
function editProfile() {
    surname.innerText = editSurname.value;
    birthdate.innerText = editDateFormat(editBirtdate.value);
    changeAge(editBirtdate.value);
    position.innerText = editPosition.value;
    tel.innerText = editTel.value;
    teams.innerText = editTeams.value;
    leagues.innerText = editLeagues.value;
}
// изменить формат даты
function editDateFormat(date) {
    var date = date.split('-');
    var string = date[2] + "." + date[1] + "." + date[0];
    return string;
}

// пересчитать возраст
function changeAge(date) {
    var now = new Date();
    var date = new Date(date);
    age.innerText = "Возраст: " + Math.floor((now - date) / (1000*60*60*24*365));
}

// добавить видео
function addVideo() {
    var url = document.getElementById('video-link').value;
    if (validateURL(url)) {
        var videoList = document.getElementById("video-list");
        var video = document.createElement("div");
        video.className = "video";
        var iframe = document.createElement("iframe");
        iframe.setAttribute("src", url);
        video.append(iframe);
        videoList.append(video);   
    }
    else
        alert("Указана неверная ссылка");
    document.getElementById('video-link').value = "";
}

// проверить ссылку 
function validateURL(text) {
    var urlregex = new RegExp(
          "^(http|https|ftp)\://([a-zA-Z0-9\.\-]+(\:[a-zA-Z0-9\.&amp;%\$\-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|([a-zA-Z0-9\-]+\.)*[a-zA-Z0-9\-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(\:[0-9]+)*(/($|[a-zA-Z0-9\.\,\?\'\\\+&amp;%\$#\=~_\-]+))*$"
          );
    return urlregex.test(text);
}