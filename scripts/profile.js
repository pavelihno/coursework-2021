// изменяемые поля
let surname = document.getElementById('name');
let birthdate = document.getElementById('birthdate');
let position = document.getElementById('position');
let age = document.getElementById('age');
let tel = document.getElementById('tel-number');
let teams = document.getElementById('teams');
let leagues = document.getElementById('leagues');

// поля для ввода
let editSurname = document.getElementById('edit-name');
let editBirtdate = document.getElementById('edit-birthdate');
let editPosition = document.getElementById('edit-position');
let editTel = document.getElementById('edit-tel'); 
let editTeams = document.getElementById('edit-teams');
let editLeagues = document.getElementById('edit-leagues');

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
    date = date.split('-');
    let string = date[2] + "." + date[1] + "." + date[0];
    return string;
}

// пересчитать возраст
function changeAge(date) {
    let now = new Date();
    date = new Date(date);
    age.innerText = "Возраст: " + Math.floor((now - date) / (1000*60*60*24*365));
}

// добавить видео
function addVideo() {
    let url = document.getElementById('video-link').value;
    if (validateURL(url)) {
        let videoList = document.getElementById("video-list");
        let video = document.createElement("div");
        video.className = "video";
        let iframe = document.createElement("iframe");
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
    let urlregex = new RegExp(
          "^(http|https|ftp)\://([a-zA-Z0-9\.\-]+(\:[a-zA-Z0-9\.&amp;%\$\-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|([a-zA-Z0-9\-]+\.)*[a-zA-Z0-9\-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(\:[0-9]+)*(/($|[a-zA-Z0-9\.\,\?\'\\\+&amp;%\$#\=~_\-]+))*$"
          );
    return urlregex.test(text);
}