import React from 'react';
import { useStore } from '../../store/useStore';

export const ResultScreen = ({ wpm, accuracy, weakKeys, onRestart }) => {
  const { level, xp, bestWpm } = useStore();
  
  // Math for the XP progress bar
  const xpInCurrentLevel = xp % 1000;
  const progressPercentage = (xpInCurrentLevel / 1000) * 100;

  // Grab the top 3 weak keys from this session to display
  const topWeakKeys = Object.entries(weakKeys)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3);

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto p-8 mt-8">
      <h2 className="text-3xl font-bold text-white mb-8">Session Complete</h2>
      
      <div className="grid grid-cols-2 gap-6 w-full mb-8">
        <div className="bg-[#242424] p-6 rounded-lg text-center border border-gray-800">
          <div className="text-gray-400 text-sm uppercase tracking-wider mb-2">WPM</div>
          <div className="text-5xl font-bold text-orange-500">{wpm}</div>
          {wpm >= bestWpm && wpm > 0 && (
            <div className="text-green-500 text-xs mt-2 font-bold tracking-widest">NEW BEST!</div>
          )}
        </div>
        <div className="bg-[#242424] p-6 rounded-lg text-center border border-gray-800">
          <div className="text-gray-400 text-sm uppercase tracking-wider mb-2">Accuracy</div>
          <div className="text-5xl font-bold text-orange-500">{accuracy}%</div>
        </div>
      </div>

      <div className="w-full bg-[#242424] p-6 rounded-lg border border-gray-800 mb-8">
        <div className="flex justify-between items-end mb-2">
          <span className="text-gray-300 font-bold">Level {level}</span>
          <span className="text-gray-500 text-sm">{xpInCurrentLevel} / 1000 XP</span>
        </div>
        <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
          <div 
            className="bg-orange-500 h-full transition-all duration-1000 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {topWeakKeys.length > 0 && (
        <div className="mb-8 text-center">
          <span className="text-gray-500 text-sm mr-3">Trouble Keys:</span>
          <div className="flex gap-2 justify-center mt-2">
            {topWeakKeys.map(([key, count]) => (
              <span key={key} className="bg-red-500/20 text-red-500 px-3 py-1 rounded font-mono">
                {key === ' ' ? 'Space' : key} ({count})
              </span>
            ))}
          </div>
        </div>
      )}

      <button 
        onClick={onRestart}
        className="px-8 py-3 bg-orange-600 hover:bg-orange-500 text-white rounded font-bold transition-colors cursor-pointer"
      >
        Next Challenge ➔
      </button>
    </div>
  );
};