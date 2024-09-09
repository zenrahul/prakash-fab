document.addEventListener("DOMContentLoaded", function() {
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbot = document.getElementById('chatbot');
    const closeChatbot = document.getElementById('close-chatbot');
    const sendBtn = document.getElementById('send-btn');
    const userInput = document.getElementById('user-input');
    const messagesContainer = document.getElementById('chatbot-messages');

    // Show chatbot
    chatbotToggle.addEventListener('click', () => {
        chatbot.style.display = 'flex';
    });

    // Close chatbot
    closeChatbot.addEventListener('click', () => {
        chatbot.style.display = 'none';
    });

    // Send message
    sendBtn.addEventListener('click', sendMessage);

    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const userText = userInput.value.trim();
        if (userText === '') return;

        // Display user message
        addMessage(userText, 'user');
        userInput.value = '';

        // Bot response
        setTimeout(() => {
            const botResponse = getBotResponse(userText);
            addMessage(botResponse, 'bot');
        }, 500);
    }

    function addMessage(text, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chatbot-message', sender);
        messageElement.textContent = text;
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function getBotResponse(message) {
        // Simple keyword matching for basic responses
        const lowerMessage = message.toLowerCase();
        if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
            return 'Hello! How can I help you today?';
        } else if (lowerMessage.includes('services')) {
            return 'We offer Custom Fabrication, Metal Welding, Precision Cutting, and Consultation services. How can we assist you?';
        } else if (lowerMessage.includes('contact')) {
            return 'You can reach us at contact@fabricationworks.com or call us at (123) 456-7890.';
        } else if (lowerMessage.includes('bye')) {
            return 'Goodbye! Have a great day!';
        } else {
            return 'I\'m not sure about that. Can you please rephrase?';
        }
    }
});
