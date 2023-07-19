let startButton = document.getElementById("start_convo");
let bodyContainer = document.querySelector(".body-container");
let closeBtn = document.querySelector("#exitBtn");
let container = document.querySelector(".container");

let openChat = document.querySelector("#open-chat");
let closeChat = document.querySelector("#close-chat");
let iconDiv = document.querySelector(".icon");

function openChatConvo(){
    if(openChat.classList.contains("active")){
        closeChat.classList.add("active");
        openChat.classList.remove("active");
        container.classList.add("active");
    }
    else{
        openChat.classList.add("active");
        closeChat.classList.remove("active");
        container.classList.remove("active");
    }
}
iconDiv.addEventListener("click", openChatConvo);

// The close container button
function exitChat(){
    openChat.classList.add("active");
    closeChat.classList.remove("active");
    container.classList.remove("active");
}
closeBtn.addEventListener("click", exitChat);

// This function Clears all the elements of the body container
function clearElements(){
    bodyContainer.innerHTML = "";
    bodyContainer.style.height = "460px";
}
startButton.addEventListener("click", clearElements);
