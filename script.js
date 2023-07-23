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
// Get the users full name
const names = document.querySelector(".full-name");
let screenChat1 = document.querySelector(".chat-screen");
let chatContainer = document.querySelector(".chat-container");

function startConversation(){
  let userFullName = names.value;
  let fullName = userFullName.split(" ");
  let userName = fullName[0];

  screenChat1.innerHTML += `
    <div class="receive-chat">
    <pre class="message">Hello ${userName}, Welcome to AlphaMax Software International. 
How may I help you?</pre>
      <p class="receive-name">Japheth</p>
    </div>
`;
  bodyContainer.classList.add("active")
  chatContainer.classList.remove("active");
}
startButton.addEventListener("click", startConversation);