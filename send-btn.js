let inputTextarea = document.getElementById("input-textarea");
let sendBtn = document.querySelector(".bx-send");

// Check if the textarea contains some text, if it does not contain text, the button opacity is not 1
function checkUserInput() {
    let userInput = inputTextarea.value;

  if (userInput !== "") {
    sendBtn.classList.add("active");
  } else {
    sendBtn.classList.remove("active");
  }
}

inputTextarea.addEventListener("input", checkUserInput);


let sendMsgBtn = document.querySelector("#send-msg");
let userText = document.querySelector("#input-textarea");
let screenChat = document.querySelector(".chat-screen");

// A function to always scroll to the botton of the convo when a new message arrives 
function scrollToBottom() {
  screenChat.scrollTop = screenChat.scrollHeight;
}

// This is a function to append messages from the send and receive chat messages.
let numValue = 0;
function sendMessage(){
  let userMessage = userText.value;
  if (userMessage !== ""){
    if(numValue % 2 != 0){
      screenChat.innerHTML += `
        <div class="receive-chat">
          <pre class="message">${userMessage}</pre>
          <p class="receive-name">Japheth</p>
        </div>
      `
    }
    else{
      screenChat.innerHTML += `
      <div class="send-chat">
        <pre class="message">${userMessage}</pre>
        <p class="send-name">You</p>
      </div>
      `
    }
    numValue += 1;
    scrollToBottom();
    userText.value = "";
    checkUserInput()
  }
  
}
sendMsgBtn.addEventListener("click", sendMessage);
