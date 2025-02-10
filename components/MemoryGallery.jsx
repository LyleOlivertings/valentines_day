import { useState } from 'react';
import { FiHeart } from 'react-icons/fi';

const memories = [
  {
    id: 1,
    image: '/memories/1.png',
    caption: 'Our Anniversary 🎉',
    mariaComment: 'I remember you both smelled like nervous kittens!'
  },
  {
    id: 2,
    image: '/memories/2.png',
    caption: 'llama day ',
    mariaComment: 'I swear I saw a llama in the background!'
  },
  {
    id: 3,
    image: '/memories/3.png',
    caption: 'Our last Xmas 🎄',
    mariaComment: 'I got a new toy that day!'
  },
];

export default function MemoryGallery() {
  const [activeMemory, setActiveMemory] = useState(null);

  return (
    <div className="pixel-art bg-blue-900 p-8 rounded-lg border-4 border-yellow-400 mt-8 max-w-4xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="pixel-font text-yellow-400 text-3xl mb-2">
          🐾 Memory Archive v1.0
        </h2>
        <p className="text-white pixel-font">Curated by Maria</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {memories.map((memory) => (
          <div 
            key={memory.id}
            className="relative pixel-memory-frame bg-gray-800 p-4 rounded-lg border-4 border-gray-300 hover:border-yellow-400 transition-all"
            onMouseEnter={() => setActiveMemory(memory.id)}
            onMouseLeave={() => setActiveMemory(null)}
          >
            {/* Memory Image */}
            <div className="pixel-image-wrapper relative">
              <img 
                src={memory.image}
                alt={memory.caption}
                className="w-full h-48 object-cover pixel-art"
              />
              
              {/* Maria's Commentary */}
              {activeMemory === memory.id && (
                <div className="pixel-commentary absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black p-4 rounded-lg border-4 border-gray-800 w-64 z-20">
                  <div className="maria-sprite-small absolute -top-8 left-1/2 transform -translate-x-1/2" />
                  <p className="pixel-font text-sm mb-2">🐱 Maria says:</p>
                  <p className="pixel-font text-xs">{memory.mariaComment}</p>
                </div>
              )}
            </div>

            {/* Caption */}
            <div className="mt-4 text-center">
              <div className="flex items-center justify-center gap-2 pixel-font text-yellow-400">
                <FiHeart className="text-red-500" />
                <span>{memory.caption}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}