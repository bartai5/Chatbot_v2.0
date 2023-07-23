let startButton = document.getElementById("start_convo");
let bodyContainer = document.querySelector(".body-container");
let closeBtn = document.querySelector("#exitBtn");
let container = document.querySelector(".container");

let openChat = document.querySelector("#open-chat");
let closeChat = document.querySelector("#close-chat");
let iconDiv = document.querySelector(".icon");

// Function to open and close the chat screen using the exit and the toggle open button
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
let chatContainer = document.querySelector(".chat-container");
function startConversation(){
  bodyContainer.classList.add("active")
  chatContainer.classList.remove("active");
}
startButton.addEventListener("click", startConversation);

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
