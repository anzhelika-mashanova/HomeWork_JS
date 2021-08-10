function body() {
    let containerDiv = document.querySelector(".input-info");
    let btn = document.querySelector('.btn-login');
    let welcome = document.getElementById('hello');
    let cookieValue = document.cookie;
    cookieValue = sessionStorage.getItem('login');
    if (cookieValue !== null && cookieValue !== "") {
        containerDiv.classList.add('vision-hidden');
        welcome.textContent = "welcome " + sessionStorage.getItem('login');
    } else {
        btn.addEventListener('click', onClickHandler);

        function onClickHandler(event) {
            event.preventDefault();
            let inputElem = document.getElementById('textInput');
            if (inputElem.value == "" || inputElem.value == null) {
                alert("enter login");
                body();
            } else {
                let cookieValue = document.cookie = "login = " + inputElem.value + ";";
                sessionStorage.setItem("login", inputElem.value);
                containerDiv.classList.add('vision-hidden');
                welcome.textContent = "welcome " + inputElem.value;
            }
        }
    }
}

body();