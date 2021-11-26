// отправить объявление
function send() {
    var ul = document.getElementById('announcements-list');
    var textArea = document.getElementById('text-field');
    var li = document.createElement("li");
    li.className = "announcement";

    var spanText = document.createElement("span");
    spanText.className = "announcement-text";
    var spanName = document.createElement("span");
    spanName.className = "announcement-name";
    var spanTime = document.createElement("span");
    spanTime.className = "announcement-time";

    spanText.append(textArea.value);
    spanName.append("Павел Савинов");
    spanTime.append(getTime());
    
    li.append(spanText, spanName, spanTime);
    ul.append(li);
    textArea.value = "";
}

const now = new Date()
const month = (date) => {
    const m = date.getMonth() + 1;
    if (m.toString().length === 1) {
        return `0${m}`;
    } else {
        return m;
    }
};
const day = (date) => {
    const d = date.getDate();
    if (d.toString().length === 1) {
        return `0${d}`;
    } else {
        return d;
    }
};

// текущее время
function getTime() {
    return `${day(now)}.${month(now)}.${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`;
}