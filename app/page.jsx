"use client"

import { useState } from "react";
import Head from "next/head";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";
import { FiHeart } from "react-icons/fi";
import Questionnaire from "../components/Questionnaire";
import MusicPlayer from '../components/MusicPlayer';
import MemoryGallery from '../components/MemoryGallery';

export default function Home() {
  const [answered, setAnswered] = useState(false);
  const [answer, setAnswer] = useState(null);
  const [noButtonPosition, setNoButtonPosition] = useState({});
  const [width, height] = useWindowSize();
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const [datePlan, setDatePlan] = useState(null);
  const [musicPlaying, setMusicPlaying] = useState(false);

  const handleNoClick = () => {
    const newPosition = {
      left:
        Math.random() *
        (typeof window !== "undefined" ? window.innerWidth - 100 : 0),
      top:
        Math.random() *
        (typeof window !== "undefined" ? window.innerHeight - 50 : 0),
    };
    setNoButtonPosition(newPosition);
  };

  



  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 to-red-300 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <Head>
        <title>Will You Be My Valentine? 💝</title>
      </Head>

      {answer === "yes" && (
        <Confetti width={width} height={height} recycle={false} />
      )}

      <div className="text-center space-y-8 z-10">
        <h1 className="text-4xl md:text-6xl font-cursive text-red-600 animate-pulse">
          💖 Kelsey, Will You Be My Valentine? 💖
        </h1>

        {!answered ? (
          <div className="space-x-4 mt-8">
            <button
              onClick={() => {
                setAnswered(true);
                setAnswer("yes");
              }}
              className="bg-green-500 hover:bg-green-600 text-white text-2xl px-8 py-4 rounded-full shadow-lg transform transition-all duration-200 hover:scale-110"
            >
              Yes! 💐
            </button>
            <button
              onMouseEnter={handleNoClick}
              onClick={handleNoClick}
              style={{
                position: "absolute",
                left: `${noButtonPosition.left}px`,
                top: `${noButtonPosition.top}px`,
                transition: "all 0.3s ease",
              }}
              className="bg-red-500 hover:bg-red-600 text-white text-2xl px-8 py-4 rounded-full shadow-lg transform transition-all duration-200 relative"
            >
              Ummm... 🫣
            </button>
          </div>
        ) : (
          <div className="animate-bounce">
            {answer === "yes" ? (
              <div className="space-y-4">
                <p className="text-4xl text-pink-600 font-bold">YIPPIEE! 💖🎉</p>
                <p className="text-2xl text-gray-700">
                  You've just made me the happiest person! 🥰
                </p>
                <div className="text-4xl animate-spin">💝</div>
              </div>
            ) : (
              <p className="text-2xl text-red-600">
                Nice try! Let's try that again 😉
              </p>
            )}
          </div>
        )}

{answer === 'yes' && (
  <div className="mt-8">
    <MusicPlayer songUrl="/our-song.mp3" />
  </div>
)}

{answer === 'yes' && (
  <div className="mt-8 w-full px-4">
    <MemoryGallery />
  </div>
)}

        {answer === "yes" && (
          <div className="mt-12 w-full px-4">
            {!showQuestionnaire ? (
              <button
                onClick={() => setShowQuestionnaire(true)}
                className="pixel-button bg-blue-600 hover:bg-blue-700 text-yellow-400 mx-auto block px-8 py-4 text-2xl"
              >
                🎮 Help Maria Plan Our Date!
              </button>
            ) : (
              <Questionnaire
                onComplete={(plan) => {
                  setDatePlan(plan);
                  setShowQuestionnaire(false);
                }}
              />

              
            )}

            
          </div>
        )}



        {datePlan && (
          <div className="pixel-art mt-8 bg-green-900 p-6 border-4 border-yellow-400 max-w-2xl">
            <h2 className="pixel-font text-2xl text-yellow-400 mb-4">
              🐾 Maria's Purr-fect Plan:
            </h2>
            <ul className="space-y-2 text-white">
              {datePlan.map((item, index) => (
                <li key={index} className="flex items-center gap-2 pixel-font">
                  <FiHeart className="text-red-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="absolute inset-0 flex justify-between items-center pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="text-2xl animate-float"
            style={{
              animationDelay: `${i * 2}s`,
              left: `${Math.random() * 100}%`,
            }}
          >
            💖
          </div>
        ))}
      </div>
    </div>
  );
}
