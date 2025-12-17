const API_URL = "https://web-production-e5f8d0.up.railway.app";

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. CREATE AND INJECT CSS ---
  const style = document.createElement('style');
  style.innerHTML = `
    .chatbot-button {
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 60px;
      height: 60px;
      background-color: #7b16ff;
      border-radius: 50%;
      color: white;
      font-size: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      z-index: 1000;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
      transition: transform 0.2s ease-in-out;
    }
    .chatbot-button:hover {
      transform: scale(1.1);
    }
    .chatbot-popup {
      display: none;
      position: fixed;
      bottom: 100px;
      right: 30px;
      width: 370px;
      max-width: 90vw;
      height: 70vh;
      max-height: 600px;
      background: white;
      border-radius: 15px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.2);
      z-index: 1000;
      overflow: hidden;
      flex-direction: column;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    }
    .chatbot-popup.show {
      display: flex;
    }
    .chatbot-header {
      background-color: #7b16ff;
      color: white;
      padding: 15px 20px;
      font-size: 1.2rem;
      font-weight: bold;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .chatbot-close-btn {
        background: none;
        border: none;
        color: white;
        font-size: 24px;
        cursor: pointer;
    }
    .chatbot-messages {
      flex-grow: 1;
      padding: 20px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .chatbot-message {
      padding: 10px 15px;
      border-radius: 20px;
      max-width: 80%;
      line-height: 1.5;
    }
    .chatbot-message.user {
      background-color: #f0f0f0;
      color: #333;
      align-self: flex-end;
      border-bottom-right-radius: 5px;
    }
    .chatbot-message.bot {
      background-color: #7b16ff;
      color: white;
      align-self: flex-start;
      border-bottom-left-radius: 5px;
    }
    .chatbot-input-container {
      display: flex;
      padding: 15px;
      border-top: 1px solid #e0e0e0;
    }
    .chatbot-input {
      flex-grow: 1;
      border: 1px solid #ccc;
      border-radius: 20px;
      padding: 10px 15px;
      font-size: 1rem;
      margin-right: 10px;
    }
    .chatbot-send-btn {
      background-color: #7b16ff;
      color: white;
      border: none;
      border-radius: 50%;
      width: 45px;
      height: 45px;
      font-size: 20px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `;
  document.head.appendChild(style);

  // --- 2. CREATE AND INJECT HTML ---
  const chatButton = document.createElement('div');
  chatButton.classList.add('chatbot-button');
  chatButton.innerHTML = '💬';

  const chatPopup = document.createElement('div');
  chatPopup.classList.add('chatbot-popup');
  chatPopup.innerHTML = `
    <div class="chatbot-header">
      <span>Ask the Book</span>
      <button class="chatbot-close-btn">&times;</button>
    </div>
    <div class="chatbot-messages"></div>
    <div class="chatbot-input-container">
      <input type="text" class="chatbot-input" placeholder="Type your message...">
      <button class="chatbot-send-btn">➤</button>
    </div>
  `;

  document.body.appendChild(chatButton);
  document.body.appendChild(chatPopup);

  // --- 3. GET DOM REFERENCES AND ADD EVENT LISTENERS ---
  const popup = document.querySelector('.chatbot-popup') as HTMLElement;
  const closeBtn = document.querySelector('.chatbot-close-btn') as HTMLButtonElement;
  const messagesContainer = document.querySelector('.chatbot-messages') as HTMLElement;
  const input = document.querySelector('.chatbot-input') as HTMLInputElement;
  const sendBtn = document.querySelector('.chatbot-send-btn') as HTMLButtonElement;

  chatButton.addEventListener('click', () => popup.classList.toggle('show'));
  closeBtn.addEventListener('click', () => popup.classList.remove('show'));
  sendBtn.addEventListener('click', sendMessage);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
    }
  });

  // --- 4. DEFINE CORE FUNCTIONS ---
  function addMessage(text: string, sender: 'user' | 'bot') {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chatbot-message', sender);
    messageElement.textContent = text;
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  async function sendMessage() {
    const question = input.value.trim();
    if (!question) return;

    addMessage(question, 'user');
    input.value = '';

    try {
      const response = await fetch('http://127.0.0.1:8000/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("BACKEND DATA:", data);   // 👈 PROOF TEST LINE

      const botResponse = data.answer || 'Sorry, I could not get a response.';
      addMessage(botResponse, 'bot');


    } catch (error) {
      console.error('Chatbot API Error:', error);
      addMessage('Sorry, something went wrong. Please try again.', 'bot');
    }
  }

  // Add a welcome message
  setTimeout(() => {
    addMessage("Hello! How can I help you with the contents of this book?", "bot");
  }, 1000);
});
