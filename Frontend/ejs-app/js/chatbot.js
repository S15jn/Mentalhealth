function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    if (userInput !== "") {
        addUserMessage(userInput);
        // Call a function to handle the bot's response
        botResponse(userInput);
    }
    document.getElementById("user-input").value = "";
}
 

function addUserMessage(message) {
    var chatBox = document.getElementById("chat-box");
    var chatMessage = document.createElement("div");
    chatMessage.className = "chat-message user-message";
    chatMessage.innerHTML = message;
    chatBox.appendChild(chatMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function addBotMessage(message) {
    var chatBox = document.getElementById("chat-box");
    var chatMessage = document.createElement("div");
    chatMessage.className = "chat-message bot-message";
    chatMessage.innerHTML = message;
    chatBox.appendChild(chatMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function botResponse(userInput) {
    // You can implement your bot's response logic here
    // For example, you can use if-else statements or switch-case statements
    // This is just a simple example
    var response;
    switch (userInput.toLowerCase()) {
        case "hello":
            response = "Hi there!";
            break;
        case "how are you?":
            response = "I'm just a bot, but thanks for asking!";
            break;
        default:
            response = "I'm sorry, I don't understand.";
    }
    addBotMessage(response);
}
