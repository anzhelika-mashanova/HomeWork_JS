import '../common/css/normalize.css';
import '../common/css/skeleton.css';
import '../common/css/dark-theme.css';
import './styles.css';

import $ from 'jquery';
import Chat from './Chat';


enterToChat();
const talk = new Chat({
    onMessage: addLog,
});

const $log = $('#log');
const $messageInput = $('#message');
const $authorInput = $('#author');
let date = new Date;


$('#chatForm').on('submit', (e) => {
    e.preventDefault();
    sendMessage();
});

talk.initConnection();

function addLog({payload}) {
    const $message = $(`<div>${payload.username}: ${payload.message} ; ${date.toLocaleString()}</div>`);
    if (`${payload.username}` !== "System") {
        let newAuthor = `${payload.username}`;
        addAuthor(newAuthor);
        if (`${payload.message}`!==""){
            $log.append($message);
        }

    }

    setTimeout(() => {
        if (localStorage.getItem('user') == `${payload.username}`) {
            $message.addClass('chat-output');
        } else {
            $message.addClass('message');
        }
    });
}

function sendMessage() {
    talk.send(localStorage.getItem('user'), $messageInput.val());
    $messageInput.val('');

}

const logIn = document.getElementById('btn-log');
logIn.addEventListener('click', enterToChat);

function enterToChat() {
    let username = document.getElementById('username');
    let loginZONE = document.getElementById('login-container');
    let chatZONE = document.getElementById('chat-container');
    const logIn = document.getElementById('btn-log');
    logIn.addEventListener('click', onClickItem);

    function onClickItem(key, value) {
        localStorage.setItem('user', username.value);
        loginZONE.classList.add('hidden');
        chatZONE.classList.remove('hidden');
    }

    if (localStorage.getItem('user')) {
        loginZONE.classList.add('hidden');
        chatZONE.classList.remove('hidden');
    }
}

let logOut = document.getElementById('logOut');
logOut.addEventListener('click', onClickLogOut);

function onClickLogOut() {
    let loginZONE = document.getElementById('login-container');
    let chatZONE = document.getElementById('chat-container');
    localStorage.removeItem('user');
    chatZONE.classList.add('hidden');
    loginZONE.classList.remove('hidden');
}

function addAuthor(user) {
    const authorList = document.getElementById('authorList');
    let newAuthor = document.createElement('li');
    let list = document.querySelectorAll("li");
    if(user!==localStorage.getItem('user')){


    if(list.length>0){
    for (let i = 0; i < list.length; i++) {
        if (list[i].textContent!==user){
            newAuthor.textContent = user;
            authorList.appendChild(newAuthor);
        }
    }
    }else {
        newAuthor.textContent = user;
        authorList.appendChild(newAuthor);
    }
    }
}

