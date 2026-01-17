// BioMind AI Chatbot
// Shared across all pages

const chatToggle = document.getElementById('chat-toggle');
const chatWindow = document.getElementById('chat-window');
const chatClose = document.getElementById('chat-close');
const chatInput = document.getElementById('chat-input');
const chatSend = document.getElementById('chat-send');
const chatMessages = document.getElementById('chat-messages');

// Toggle chat window
chatToggle.addEventListener('click', () => {
    chatWindow.style.display = chatWindow.style.display === 'none' ? 'flex' : 'none';
    if (chatWindow.style.display === 'flex' && chatMessages.children.length === 0) {
        addMessage('Hello! I\'m your BioMind AI assistant. I can help you learn about biology, neuroscience, psychology, and mental well-being. What would you like to explore?', 'bot');
    }
});

chatClose.addEventListener('click', () => {
    chatWindow.style.display = 'none';
});

// Send message
function sendMessage() {
    const message = chatInput.value.trim();
    if (message) {
        addMessage(message, 'user');
        chatInput.value = '';
        setTimeout(() => generateResponse(message), 500);
    }
}

chatSend.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

// Add message to chat
function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.style.cssText = `margin-bottom: 15px; padding: 12px 16px; border-radius: 15px; max-width: 80%; ${sender === 'user' ? 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; margin-left: auto; text-align: right;' : 'background: white; color: #333; box-shadow: 0 2px 5px rgba(0,0,0,0.1);'}`;
    messageDiv.textContent = text;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Generate AI response based on BioMind content
function generateResponse(userMessage) {
    const msg = userMessage.toLowerCase();
    let response = '';

    // Biology topics
    if (msg.includes('cell') || msg.includes('biology') || msg.includes('dna') || msg.includes('gene')) {
        response = 'Biology is fascinating! Cells are the basic building blocks of life, containing DNA that carries genetic information. Would you like to explore cell biology, genetics, human anatomy, or biochemistry? Visit our Explore page for detailed topics!';
    }
    // Neuroscience topics
    else if (msg.includes('brain') || msg.includes('neuro') || msg.includes('memory') || msg.includes('sleep')) {
        response = 'The brain is incredibly complex! Neuroscience explores how the brain and nervous system shape our thoughts, emotions, and behaviors. Key topics include brain structure, neurotransmitters, memory formation, sleep cycles, and neuroplasticity. Check out our Learning Center for in-depth articles!';
    }
    // Psychology topics
    else if (msg.includes('emotion') || msg.includes('psych') || msg.includes('mind') || msg.includes('behavior')) {
        response = 'Psychology helps us understand the human mind and behavior! It covers cognitive processes, emotional intelligence, developmental stages, social behavior, and personality theories. Our resources can help you learn about these fascinating topics!';
    }
    // Mental well-being
    else if (msg.includes('stress') || msg.includes('mindful') || msg.includes('mental health') || msg.includes('well-being') || msg.includes('wellness')) {
        response = 'Mental well-being is crucial! Evidence-based strategies include stress management, mindfulness meditation, healthy lifestyle habits, building resilience, and work-life balance. Remember, BioMind provides educational content - always consult healthcare professionals for medical concerns.';
    }
    // General help
    else {
        response = 'I can help you learn about: \n🧬 Biology - cells, genetics, human anatomy\n🧠 Neuroscience - brain, memory, sleep\n💭 Psychology - emotions, cognition, behavior\n🌿 Mental Well-being - stress management, mindfulness\n\nWhat interests you most?';
    }

    addMessage(response, 'bot');
}
