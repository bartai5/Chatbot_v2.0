let inputTextarea = document.getElementById("input-textarea");
let sendBtn = document.querySelector(".bx-send");

function checkUserInput() {
    let userInput = inputTextarea.value;

  if (userInput !== "") {
    sendBtn.classList.add("active");
  } else {
    sendBtn.classList.remove("active");
  }
}

inputTextarea.addEventListener("input", checkUserInput);
