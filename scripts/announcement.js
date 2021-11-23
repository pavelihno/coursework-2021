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
    spanName.append("Я");
    spanTime.append(getTime());
    
    li.append(spanText, spanName, spanTime);
    ul.append(li);
    
    textArea.value = "";
}

function getTime() {
    var time = new Date();
    var timeString = time.getDate() + "." + time.getMonth() + "." + time.getFullYear() + " " + time.getHours() + ":" + time.getMinutes();
    return timeString;
}