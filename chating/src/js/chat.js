"use strict";
const socket = io();

const nickName = document.querySelector('#nickname');
const chatList = document.querySelector('.chatting-list');
const chatInput = document.querySelector('.chatting-input');
const sendButton = document.querySelector('.send-button');
const displayContainer = document.querySelector('.display-container')

chatInput.addEventListener("keypress", (e) =>{
    if(e.keyCode === 13) {
        send()
    }
})

const send = () => {
    const param = {
        name: nickName.value,
        msg: chatInput.value
    }

    if(chatInput.value !== "" ) {
        socket.emit("chatting", param);
        chatInput.value = "";
    } else {
        alert("내용을 입력해 주세요")
    }
}

sendButton.addEventListener('click', () => {
    send()
});



socket.on("chatting", (data) => {
    const {name, msg, time} = data;
    const item = new LiModel(name, msg, time);
    item.makeLi();
    displayContainer.scrollTo(0, displayContainer.scrollHeight)
})

// const LiModel = (name, message, time) => {
//     this.name = name;
//     this.message = message;
//     this.time = time;

//     this.makeLi = () => {
//         const li = document.createElement('li');
//         const dom = `
//         <li class="received">
//             <span class="profile">
//                 <span class="user">${this.name}</span>
//                 <img src="https://placeimg.com/50/50/any" class="image"/>
//             </span>
//             <span class="message">
//                 ${this.message}
//             </span>
//             <span class="time">${this.time}</span>
//         </li>
//         `;

//         li.innerHTML = dom

//         chatList.appendChild(li);
//     }
// }

class LiModel {
    constructor(name, message, time) {
        this.name = name;
        this.message = message;
        this.time = time
    }

    makeLi() {
        const li = document.createElement('li');
        li.classList.add(nickName.value === this.name ? "send" : "recived")
        const dom = `
        <li class="received">
            <span class="profile">
                <span class="user">${this.name}</span>
                <img src="https://placeimg.com/50/50/any" class="image"/>
            </span>
            <span class="message">
                ${this.message}
            </span>
            <span class="time">${this.time}</span>
        </li>
        `;

        li.innerHTML = dom

        chatList.appendChild(li);
    }
}