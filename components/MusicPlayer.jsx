import { useState, useEffect } from 'react';
import { Howl } from 'howler';
import { FaPlay, FaPause, FaVolumeUp, FaMusic } from 'react-icons/fa';

export default function MusicPlayer({ songUrl }) {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [progress, setProgress] = useState(0);
  const [sound, setSound] = useState(null);

  useEffect(() => {
    const newSound = new Howl({
      src: [songUrl],
      html5: true,
      volume: volume,
      onplay: () => setPlaying(true),
      onpause: () => setPlaying(false),
      onend: () => setPlaying(false),
      onload: () => console.log('Song loaded!'),
    });

    setSound(newSound);

    return () => {
      newSound.unload();
    };
  }, [songUrl]);

  useEffect(() => {
    if (sound) {
      sound.volume(volume);
    }
  }, [volume, sound]);

  const togglePlay = () => {
    if (!sound) return;
    
    if (playing) {
      sound.pause();
    } else {
      sound.play();
    }
  };

  return (
    <div className="pixel-art bg-purple-900 p-6 rounded-lg border-4 border-yellow-400 mt-8 max-w-md mx-auto">
      <div className="flex items-center gap-4 mb-4">
        <FaMusic className="text-yellow-400 text-2xl" />
        <h2 className="pixel-font text-yellow-400 text-xl">Click play! 🎵</h2>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={togglePlay}
          className="pixel-button bg-blue-600 hover:bg-blue-700 text-yellow-400 px-4 py-2"
        >
          {playing ? <FaPause /> : <FaPlay />}
        </button>

        <div className="flex-1 bg-gray-800 h-2 rounded-full">
          <div 
            className="bg-yellow-400 h-2 rounded-full transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center gap-2">
          <FaVolumeUp className="text-yellow-400" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="pixel-slider"
          />
        </div>
      </div>
    </div>
  );
}