let containerDiv = document.querySelector(".input-info");
let btn = document.querySelector('.btn-login');
let welcome = document.getElementById('hello');
let cookies = document.cookie;
let date = new Date(Date.now() + 86400e3);
date = date.toUTCString();


function body() {

    if (cookies) {
        containerDiv.classList.add('vision-hidden');
        welcome.textContent = "welcome " + getCookies(cookies);
    } else {
        btn.addEventListener('click', onClickHandler);

        function onClickHandler(event) {
            event.preventDefault();
            let inputElem = document.getElementById('textInput');
            if (inputElem.value == "") {
                alert("enter login");
                body();
            } else {
                cookies =  "login = " + inputElem.value;
                containerDiv.classList.add('vision-hidden');
                welcome.textContent = "welcome " + getCookies(cookies);
                console.log(cookies)
            }
        }
    }
}
function getCookies(cookie){
    let cookies = cookie.split('=');
    return cookies[1];
}

body();