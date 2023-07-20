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

let count = document.querySelector("#count");


// // Function to check if the textarea contains text is it does not the send button is set to opacity of .3s
// let sendMsg = document.querySelector(".send-btn");
// let userInput = document.querySelector("#user-input");

// function checkText(){
//   if(userInput.value.trim().length > 0){
//     sendMsg.classList.add("contain-text");
//   }
//   else{
//     sendMsg.classList.remove("contain-text");
//   }
// }

//################################################
var hasTyped = false;

function checkTextArea() {
  var textArea = document.getElementById("textArea");
  var sendButton = document.getElementById("sendButton");

  // Check if the textarea contains text and if it has not been typed before
  if (textArea.value.trim().length > 0 && !hasTyped) {
    sendButton.style.opacity = "1"; // Set the button opacity to 1 (fully opaque)
    hasTyped = true; // Set the hasTyped flag to true, so we don't change the opacity again
  } else if (textArea.value.trim().length === 0) {
    sendButton.style.opacity = "0.3"; // Set the button opacity to 0.3 (partially transparent)
    hasTyped = false; // Reset the hasTyped flag if the textarea is empty again
  }
}

function sendData() {
  // Your logic for sending data goes here
  // This function will be called when the Send button is clicked
  // For this example, we will just log a message to the console
  console.log("Data sent!");
}
