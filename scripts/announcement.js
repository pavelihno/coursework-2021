// отправить объявление
function send() {
    let ul = document.getElementById('announcements-list');
    let textArea = document.getElementById('text-field');
    let li = document.createElement("li");
    li.className = "announcement";

    let spanText = document.createElement("span");
    spanText.className = "announcement-text";
    let spanName = document.createElement("span");
    spanName.className = "announcement-name";
    let spanTime = document.createElement("span");
    spanTime.className = "announcement-time";

    spanText.append(textArea.value);
    spanName.append("Павел Савинов");
    spanTime.append(getTime());
    
    li.append(spanText, spanName, spanTime);
    ul.append(li);
    textArea.value = "";
}

const now = new Date()
// форматирование месяца
const month = (date) => {
    const m = date.getMonth() + 1;
    if (m.toString().length === 1) {
        return `0${m}`;
    } else {
        return m;
    }
};
// форматирование числа
const day = (date) => {
    const d = date.getDate();
    if (d.toString().length === 1) {
        return `0${d}`;
    } else {
        return d;
    }
};

// получить текущее время
function getTime() {
    return `${day(now)}.${month(now)}.${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`;
}