"use strict";

const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

async function sendMessage() {
  const message = userInput.value.trim();
  if (!message) return;

  const userMsg = document.createElement("div");
  userMsg.className = "self-end bg-white text-[#CC3363] px-3 py-2 rounded font-bold";
  userMsg.textContent = message;
  chatBox.appendChild(userMsg);

  userInput.value = "";

  const botMsg = document.createElement("div");
  botMsg.className = "self-start bg-white text-[#20063B] px-3 py-2 rounded font-bold";
  botMsg.textContent = "Checking...";
  chatBox.appendChild(botMsg);

  chatBox.scrollTop = chatBox.scrollHeight;
  sendBtn.disabled = true;
}

sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendMessage();
})

async function getKey() {
const options = {method: "POST"}
  const response = await fetch("https://proxy-key-j3wx.onrender.com/get-key",options);
  const data = await response.json();
    return data.key;
}
