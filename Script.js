let user1Timer, user2Timer;

function sendMessage(user) {
    const messageInput = user === 'user1'
        ? document.getElementById("user1-message")
        : document.getElementById("user2-message");

    const message = messageInput.value;
    if (message.trim() === "") return;

    const chatBox = document.getElementById("chat-box");
    const time = new Date().toLocaleTimeString();

    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.classList.add(user === 'user1' ? 'user1' : 'user2');
    messageElement.innerHTML = `
        <b>${user === 'user1' ? 'User 1' : 'User 2'}:</b> ${message}
        <div class="timestamp">${time}</div>
        <div class="status">Sent</div>
    `;

    chatBox.appendChild(messageElement);
    messageInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;

    // Simulate message being seen after 2 seconds
    setTimeout(() => {
        messageElement.querySelector('.status').innerText = "Seen";
        messageElement.querySelector('.status').classList.add("seen");
    }, 2000);
}

function clearChat() {
    document.getElementById("chat-box").innerHTML = "";
}

function setOnline(user) {
    if (user === 'user1') {
        document.getElementById("user1-status").innerText = "Online";
        document.getElementById("user1-status").classList.add("online");
        clearTimeout(user1Timer);
    } else {
        document.getElementById("user2-status").innerText = "Online";
        document.getElementById("user2-status").classList.add("online");
        clearTimeout(user2Timer);
    }
}

function setOffline(user) {
    if (user === 'user1') {
        user1Timer = setTimeout(() => {
            document.getElementById("user1-status").innerText = "Offline";
            document.getElementById("user1-status").classList.remove("online");
            document.getElementById("user1-status").classList.add("offline");
        }, 10000);
    } else {
        user2Timer = setTimeout(() => {
            document.getElementById("user2-status").innerText = "Offline";
            document.getElementById("user2-status").classList.remove("online");
            document.getElementById("user2-status").classList.add("offline");
        }, 10000);
    }
}