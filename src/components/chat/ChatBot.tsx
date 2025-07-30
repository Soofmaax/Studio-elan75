import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, ChevronDown } from 'lucide-react';
import Button from '../ui/Button';

interface Message {
  id: string;
  type: 'user' | 'bot';
  text: string;
  options?: string[];
}

const initialMessage: Message = {
  id: '0',
  type: 'bot',
  text: 'Bonjour ! Je suis là pour vous aider. Que souhaitez-vous savoir ?',
  options: [
    'Horaires des cours',
    'Tarifs',
    'Réserver un cours',
    'Questions sur le yoga',
    'Contacter le studio'
  ]
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const newUserMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      text
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputValue('');

    // Simuler la réponse du bot
    setTimeout(() => {
      const botResponse = getBotResponse(text);
      setMessages(prev => [...prev, botResponse]);
    }, 500);
  };

  const getBotResponse = (userMessage: string): Message => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('horaire') || lowerMessage === 'horaires des cours') {
      return {
        id: Date.now().toString(),
        type: 'bot',
        text: 'Nos cours sont disponibles tous les jours :\n- Lundi au Vendredi : 7h00 - 21h00\n- Samedi : 8h00 - 20h00\n- Dimanche : 9h00 - 18h00',
        options: ['Voir le planning', 'Réserver un cours']
      };
    }

    if (lowerMessage.includes('tarif') || lowerMessage === 'tarifs') {
      return {
        id: Date.now().toString(),
        type: 'bot',
        text: 'Nous proposons plusieurs formules :\n- Cours unique : 55€\n- Pack 20 cours : 950€ (47.5€/cours)\n- Pack 50 cours : 2200€ (44€/cours)',
        options: ['Voir tous les tarifs', 'Réserver un cours']
      };
    }

    if (lowerMessage.includes('réserv') || lowerMessage === 'réserver un cours') {
      return {
        id: Date.now().toString(),
        type: 'bot',
        text: 'Vous pouvez réserver votre cours directement en ligne. Souhaitez-vous réserver maintenant ?',
        options: ['Oui, réserver', 'Voir les horaires d\'abord']
      };
    }

    if (lowerMessage.includes('yoga') || lowerMessage === 'questions sur le yoga') {
      return {
        id: Date.now().toString(),
        type: 'bot',
        text: 'Nous proposons différents types de yoga :\n- Yoga Prénatal\n- Yoga Doux\n- Yoga Tonique\n- Yoga Enfants\nQuel type vous intéresse ?',
        options: ['En savoir plus sur les cours', 'Rencontrer nos professeurs']
      };
    }

    if (lowerMessage.includes('contact') || lowerMessage === 'contacter le studio') {
      return {
        id: Date.now().toString(),
        type: 'bot',
        text: 'Vous pouvez nous contacter :\n- Par téléphone : 01 42 55 78 90\n- Par email : contact@studio-elan.fr\n- Sur place : 15 Rue des Abbesses, 75018 Paris',
        options: ['Voir l\'itinéraire', 'Envoyer un email']
      };
    }

    return {
      id: Date.now().toString(),
      type: 'bot',
      text: 'Je peux vous aider avec les sujets suivants :',
      options: [
        'Horaires des cours',
        'Tarifs',
        'Réserver un cours',
        'Questions sur le yoga',
        'Contacter le studio'
      ]
    };
  };

  const handleOptionClick = (option: string) => {
    handleSendMessage(option);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-40 bg-sage dark:bg-sage-dark text-white p-4 rounded-full shadow-lg hover:bg-sage-dark dark:hover:bg-sage transition-colors"
        aria-label="Ouvrir le chat"
      >
        <MessageCircle size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 right-8 z-40 w-96 max-w-[calc(100vw-2rem)] bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-sage dark:bg-sage-dark text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <MessageCircle size={20} />
                <span className="font-medium">Chat Studio Élan</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Fermer le chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.type === 'user'
                        ? 'bg-sage dark:bg-sage-dark text-white'
                        : 'bg-gray-100 dark:bg-gray-700'
                    }`}
                  >
                    <p className="whitespace-pre-line">{message.text}</p>
                    {message.options && (
                      <div className="mt-2 space-y-2">
                        {message.options.map((option) => (
                          <button
                            key={option}
                            onClick={() => handleOptionClick(option)}
                            className="block w-full text-left px-3 py-2 rounded bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors text-sm"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t dark:border-gray-700">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage(inputValue);
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Tapez votre message..."
                  className="flex-1 px-4 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sage dark:focus:ring-sage-dark"
                />
                <Button
                  type="submit"
                  variant="primary"
                  className="px-4"
                  aria-label="Envoyer"
                >
                  <Send size={20} />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;