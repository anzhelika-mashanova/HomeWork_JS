let printTime = document.querySelector('#time');
let printDate = document.querySelector('#date');

function time() {
    let date = new Date(),
        hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
        minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
        seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
    printTime.textContent = hours + ':' + minutes + ':' + seconds;
}

setInterval(time, 1000);

function date() {
    let date = new Date(),
        day = (date.getDate() < 10) ? '0' + date.getDate() : date.getDate(),
        month = (date.getMonth() < 10) ? '0' + date.getMonth() : date.getMonth(),
        year = (date.getFullYear() < 10) ? '0' + date.getFullYear() : date.getFullYear();
    printDate.textContent = day + ':' + month + ':' + year;
}

setInterval(date, 1000);