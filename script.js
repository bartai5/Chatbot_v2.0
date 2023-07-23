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
        resetElements();
        bodyContainer.style.height = "auto";
    }
}
iconDiv.addEventListener("click", openChatConvo);

// The close container button
function exitChat(){
    openChat.classList.add("active");
    closeChat.classList.remove("active");
    container.classList.remove("active");
    resetElements();
    bodyContainer.style.height = "auto";
}
closeBtn.addEventListener("click", exitChat);


// This function Clears all the elements of the body container
function clearElements(){
    bodyContainer.innerHTML = "";
    bodyContainer.style.height = "460px";
}
startButton.addEventListener("click", clearElements);

function resetElements() {
  bodyContainer.innerHTML = `
    <p>Share Your Queries Here And We Will Get Back To You As Soon As Possible...</p>
    <div class="user_name cont">
      <span>Full Name</span>
      <input type="text" class="full-name" placeholder="e.g. John Doe">
    </div>
    <div class="user_email cont">
      <span>Email Address</span>
      <input type="text" class="email-add" placeholder="e.g. johndoe123@gmail.com">
    </div>
    <hr>
    <div class="start-buttons cont">
      <button type="button" id="start_convo">Start Conversation</button>
    </div>
  `;
}