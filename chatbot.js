// BioMind AI Chatbot
// Shared across all pages
// Enhanced with bilingual support (English & Bengali)

const chatToggle = document.getElementById('chat-toggle');
const chatWindow = document.getElementById('chat-window');
const chatClose = document.getElementById('chat-close');
const chatInput = document.getElementById('chat-input');
const chatSend = document.getElementById('chat-send');
const chatMessages = document.getElementById('chat-messages');

// Language detection
function detectLanguage(text) {
  // Bengali Unicode range: \u0980-\u09FF
  const bengaliPattern = /[\u0980-\u09FF]/g;
  const bengaliCount = (text.match(bengaliPattern) || []).length;
  const englishCount = text.length - bengaliCount;
  
  if (bengaliCount > englishCount) {
    return 'bn';
  }
  return 'en';
}

// Language-specific greetings
const greetings = {
  en: "Hello! I'm your BioMind AI assistant. Biomind focuses on biotechnology, neuroscience, artificial intelligence, and scientific learning. I'm here to make complex ideas clear and accessible. What would you like to explore?",
  bn: "হ্যালো! আমি আপনার BioMind AI সহায়ক। Biomind বায়োটেকনোলজি, নিউরোসায়েন্স, কৃত্রিম বুদ্ধিমত্তা এবং বৈজ্ঞানিক শিক্ষার উপর ফোকাস করে। আমি জটিল ধারণাগুলিকে স্পষ্ট এবং সহজবোধ্য করতে এখানে আছি। আপনি কী অন্বেষণ করতে চান?"
};

// Toggle chat window
chatToggle.addEventListener('click', () => {
  chatWindow.style.display = chatWindow.style.display === 'none' ? 'flex' : 'none';
  if (chatWindow.style.display === 'flex' && chatMessages.children.length === 0) {
    // Detect user's system language preference, default to English
    const userLanguage = navigator.language.startsWith('bn') ? 'bn' : 'en';
    addMessage(greetings[userLanguage], 'bot');
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
  const lang = detectLanguage(userMessage);
  let response = '';
  
  // English responses
  if (lang === 'en') {
    // Biotechnology topics
    if (msg.includes('biotech') || msg.includes('genetic') || msg.includes('dna') || msg.includes('cell')) {
      response = 'Biotechnology is a fascinating field! It involves using biological systems and organisms to develop new products and technologies. Key areas include genetic engineering, cell biology, and molecular medicine. Would you like to explore specific applications or learn about cutting-edge developments?';
    }
    // Neuroscience topics
    else if (msg.includes('brain') || msg.includes('neuro') || msg.includes('memory') || msg.includes('sleep') || msg.includes('neural')) {
      response = 'Neuroscience explores how the brain and nervous system work! It covers brain structure, neurotransmitters, synaptic plasticity, learning, memory formation, and sleep science. These insights help us understand consciousness, behavior, and develop treatments for neurological conditions. What aspect interests you most?';
    }
    // Artificial Intelligence topics
    else if (msg.includes('ai') || msg.includes('artificial') || msg.includes('machine learning') || msg.includes('algorithm') || msg.includes('neural network')) {
      response = 'Artificial Intelligence is revolutionizing science! AI involves creating systems that can learn and make decisions. Key topics include machine learning, neural networks, and deep learning. AI is being applied across biology for drug discovery, protein folding, and medical diagnostics. Would you like to explore specific AI applications?';
    }
    // Scientific learning
    else if (msg.includes('science') || msg.includes('learn') || msg.includes('education') || msg.includes('research')) {
      response = 'Scientific learning is at the heart of BioMind! We break down complex concepts into clear explanations. Whether you\'re interested in fundamental biology, cutting-edge AI applications, or neuroscience breakthroughs, we\'re here to help. What topic would you like to explore?';
    }
    // Default helpful response
    else {
      response = 'I can help you learn about:\n\n🧬 Biotechnology - genetic engineering, molecular medicine\n🧠 Neuroscience - brain science, cognition, behavior\n🤖 Artificial Intelligence - machine learning, neural networks\n🔬 Scientific Learning - research methods, discovery\n\nWhich topic interests you, or would you like clarification on something?';
    }
  }
  // Bengali responses
  else if (lang === 'bn') {
    // Biotechnology topics (Bengali)
    if (msg.includes('বায়') || msg.includes('জিন') || msg.includes('ডিএনএ') || msg.includes('কোষ') || msg.includes('প্রযুক্তি')) {
      response = 'বায়োটেকনোলজি একটি আকর্ষণীয় ক্ষেত্র! এটি জৈব ব্যবস্থা এবং জীবিত জিনিসগুলি ব্যবহার করে নতুন পণ্য এবং প্রযুক্তি তৈরি করে। মূল ক্ষেত্রগুলির মধ্যে রয়েছে জেনেটিক ইঞ্জিনিয়ারিং এবং অণুজীব চিকিৎসা। আপনি নির্দিষ্ট প্রয়োগ সম্পর্কে শিখতে চান?';
    }
    // Neuroscience topics (Bengali)
    else if (msg.includes('মস্তিষ্ক') || msg.includes('নিউরো') || msg.includes('স্মৃতি') || msg.includes('ঘুম') || msg.includes('স্নায়ু')) {
      response = 'নিউরোসায়েন্স মস্তিষ্ক এবং স্নায়ুতন্ত্র কীভাবে কাজ করে তা অন্বেষণ করে! এতে মস্তিষ্কের গঠন, নিউরোট্রান্সমিটার এবং স্মৃতি গঠন অন্তর্ভুক্ত রয়েছে। এই অন্তর্দৃষ্টি আমাদের চেতনা এবং আচরণ বুঝতে সাহায্য করে। আপনি কোন দিকটি সবচেয়ে বেশি আগ্রহী?';
    }
    // AI topics (Bengali)
    else if (msg.includes('এআই') || msg.includes('কৃত্রিম') || msg.includes('যন্ত্র') || msg.includes('অ্যালগরিদম')) {
      response = 'কৃত্রিম বুদ্ধিমত্তা বিজ্ঞানকে রূপান্তরিত করছে! AI এমন সিস্টেম তৈরি করা যা শিখতে এবং সিদ্ধান্ত নিতে পারে। AI প্রোটিন অনুমান এবং চিকিৎসা নির্ণয়ে প্রয়োগ করা হচ্ছে। আপনি কোন AI প্রয়োগ সম্পর্কে জানতে চান?';
    }
    // Default (Bengali)
    else {
      response = 'আমি আপনাকে সাহায্য করতে পারি:\n\n🧬 বায়োটেকনোলজি\n🧠 নিউরোসায়েন্স\n🤖 কৃত্রিম বুদ্ধিমত্তা\n🔬 বৈজ্ঞানিক শিক্ষা\n\nআপনি কোন বিষয়ে আগ্রহী বা কি ব্যাপারে স্পষ্টকরণ চান?';
    }
  }
  
  addMessage(response, 'bot');
}
