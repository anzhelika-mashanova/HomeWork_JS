function body() {
    let containerDiv = document.querySelector(".input-info");
    let btn = document.querySelector('.btn-login');
    let welcome = document.getElementById('hello');
    let storageValue = localStorage.getItem('login');

    if (storageValue !== null) {
        containerDiv.classList.add('vision-hidden');
        welcome.textContent = "welcome " + localStorage.getItem('login');
    } else {
        btn.addEventListener('click', onClickHandler);

        function onClickHandler(event) {
            event.preventDefault();
            let inputElem = document.getElementById('textInput');
            if (inputElem.value == "") {
                alert("enter login")
                body();
            } else {
                let storageValue = localStorage.setItem("login", inputElem.value);
                sessionStorage.setItem("login", inputElem.value)
                containerDiv.classList.add('vision-hidden');
                welcome.textContent = "welcome " + inputElem.value;
            }
        }
    }
}

body();