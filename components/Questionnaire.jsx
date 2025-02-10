import { useState } from 'react';
import { FiHeart } from 'react-icons/fi';

const questions = [
  {
    question: "Meow! Where should we feast? 🐟",
    options: [
      "Fancy Restaurant 🍷", 
      "Home-cooked Meal 🧑🍳", 
      "Food Truck Adventure 🌮"
    ]
  },
  {
    question: "Purr... Choose our activity:",
    options: [
      "Cozy Movie Night 🍿", 
      "A stardew valley date 🌾", 
      "A beach walk at sunset 🌅"
    ]
  },
  {
    question: "Final Decision! Dessert?",
    options: [
      "Waffles with Ice Cream 🍦", 
      "Lots of Chocolate 🍫", 
      "Maria's Cat Treats 🐾"
    ]
  }
];

export default function Questionnaire({ onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showCursor, setShowCursor] = useState(true);

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onComplete([...answers, answer]);
    }
  };

  return (
    <div className="pixel-art bg-blue-900 text-white p-8 rounded-lg border-4 border-yellow-400 max-w-2xl mx-auto">
      {/* Cat Sprite */}
      <div className="maria-sprite animate-float mb-8 mx-auto w-32 h-32 bg-contain bg-no-repeat" />
      
      {/* Dialogue Box */}
      <div className="dialogue-box bg-gray-800 p-6 border-4 border-gray-300 relative">
        <div className="text-lg pixel-font mb-4">
          {questions[currentQuestion].question}
        </div>
        
        <div className="grid gap-4">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className="pixel-button bg-gray-700 hover:bg-gray-600 text-yellow-400 p-4 border-2 border-gray-400 
              flex items-center justify-start gap-2 text-left"
            >
              <FiHeart className="text-red-500" />
              <span className="pixel-font">{option}</span>
            </button>
          ))}
        </div>
        
        <div className="absolute bottom-2 right-4 text-yellow-400 pixel-font">
          {`${currentQuestion + 1}/${questions.length}`}
        </div>
      </div>
    </div>
  );
}