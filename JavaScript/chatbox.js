var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}


// Function to get the current time
function getTime() {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return hours + ":" + minutes;
}

// Function to display the first bot message
function firstBotMessage() {
    let firstMessage = "Welcome to Unizulu Chatbot. How can we help you?";
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();
    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

// Initialize the chat with the first message
firstBotMessage();

// Function to process user input
async function processUserInput(userText) {
    try {
        // Replace this with your NLP processing logic
        let response = processResp(userText);
        const botHtml = '<p class="botText"><span>' + response.answer + '</span></p>';
        $("#chatbox").append(botHtml);
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
    } catch (err) {
        console.error(err);
        // Handle errors that may occur during NLP processing
        const errorHtml = '<p class="botText"><span>An error occurred while processing your request.</span></p>';
        $("#chatbox").append(errorHtml);
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
    }
}
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}


// Function to get a response and display it
function getResponse() {
    const userText = $("#textInput").val().toLowerCase();

    if (userText == "") {
        userText = "Oops! Didn't get that one. Try something different.";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
    getHardResponse(userText);
    // processUserInput(userText);

    // setTimeout(() => {
    //     getHardResponse(userText); // Uncomment if needed
    // }, 1000);
}

// Function to handle sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    // Uncomment this if you want the bot to respond to this buttonSendText event
    // setTimeout(() => {
    //     getHardResponse(sampleText);
    // }, 1000);
}

// Function to send a response
function sendButton() {
    getResponse();
}

// Function for a "like" button
function heartButton() {
    buttonSendText("Response liked");
}

// Event listener for pressing Enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        sendButton();
    }
});
