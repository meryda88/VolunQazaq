import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './ChatBot.css';

const ChatBot = () => {
  const [question, setQuestion] = useState('');
  const [chat, setChat] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const savedChat = localStorage.getItem('volunteerChat');
    if (savedChat) {
      setChat(JSON.parse(savedChat));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('volunteerChat', JSON.stringify(chat));
  }, [chat]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 200);
    }
  }, [isOpen]);

  const ask = async () => {
    if (!question.trim()) return;

    const isVolunteerQuestion = /волонтер|волонтёр|помощь|добровол/i.test(question);

    setChat([...chat, { question, answer: isVolunteerQuestion ? '...' : '' }]);
    setLoading(true);
    setQuestion('');

    if (!isVolunteerQuestion) {
      setTimeout(() => {
        setChat((prev) => {
          const newChat = [...prev];
          newChat[newChat.length - 1].answer = 'Извините, я могу отвечать только на вопросы о волонтерстве.';
          return newChat;
        });
        setLoading(false);
      }, 1000);
      return;
    }

    try {
      const res = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAtOX-Yvymqz8ogViLD1EyzdqLPK85W3wQ`,
        {
          contents: [{ parts: [{ text: question }] }]
        },
        {
          headers: { 'Content-Type': 'application/json' }
        }
      );

      let reply = res.data.candidates?.[0]?.content?.parts?.[0]?.text || 'Ответ не получен.';
      reply = reply.replace(/\*/g, '').trim();

      setChat((prev) => {
        const newChat = [...prev];
        newChat[newChat.length - 1].answer = reply;
        return newChat;
      });
    } catch (err) {
      console.error(err);
      setChat((prev) => {
        const newChat = [...prev];
        newChat[newChat.length - 1].answer = 'Произошла ошибка. Повторите позже.';
        return newChat;
      });
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    setChat([]);
    localStorage.removeItem('volunteerChat');
  };

  return (
    <div className="chatbot-container">
      {!isOpen && (
        <button className="chat-toggle" onClick={() => setIsOpen(true)} title="Открыть чат">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="white" viewBox="0 0 24 24">
            <path d="M2 2v20l4-4h16V2H2zm16 11H6v-2h12v2z" />
          </svg>
        </button>
      )}

      {isOpen && (
        <div className="chat-box">
          <div className="chat-header">
            Чат-помощник
            <button className="chat-close" onClick={() => setIsOpen(false)}>✕</button>
          </div>

          <div className="chat-messages">
            {chat.map((entry, idx) => (
              <div key={idx} className="chat-message">
                <p className="chat-q">Вы: {entry.question}</p>
                <p className="chat-a">Бот: {entry.answer}</p>
              </div>
            ))}
            {loading && <div className="chat-typing">Бот печатает...</div>}
          </div>

          <div className="chat-input">
            <input
              ref={inputRef}
              type="text"
              placeholder="Ваш вопрос о волонтерстве..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && ask()}
            />
            <button onClick={ask}>Отправить</button>
          </div>

          <div className="chat-footer">
            <button className="clear-button" onClick={clearChat}>Очистить чат</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
