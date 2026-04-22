import React from 'react';
import { useStore } from '../store/useStore';

export const Progress = ({ onBack }) => {
  const { level, xp, bestWpm, totalSessions, avgAccuracy } = useStore();
  
  const xpInCurrentLevel = xp % 1000;
  const progressPercentage = (xpInCurrentLevel / 1000) * 100;

  return (
    <div className="w-full max-w-4xl mx-auto p-8 animate-fade-in">
      <button onClick={onBack} className="text-gray-400 hover:text-white mb-8 flex items-center gap-2 cursor-pointer">
        <span>←</span> Back
      </button>

      <div className="mb-10">
        <h1 className="text-4xl font-bold text-white mb-2">Progress</h1>
        <p className="text-gray-400">Track your development over time</p>
      </div>

      <div className="bg-[#242424] p-8 rounded-lg border border-gray-800 mb-6">
        <div className="flex justify-between items-end mb-4">
          <div>
            <div className="text-gray-400 text-sm mb-1">Current Level</div>
            <div className="text-5xl font-bold text-white">{level}</div>
          </div>
          <div className="text-xl text-gray-400">
            {level < 3 ? 'Beginner' : level < 10 ? 'Intermediate' : 'Pro'}
          </div>
        </div>
        
        <div className="flex justify-between text-xs text-gray-500 mb-2 font-mono">
          <span>{xpInCurrentLevel} XP</span>
          <span>1000 XP</span>
        </div>
        <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
          <div 
            className="bg-[#d9774a] h-full transition-all duration-1000"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-[#242424] p-6 rounded-lg border border-gray-800">
          <div className="text-gray-400 text-sm mb-2">Total Sessions</div>
          <div className="text-4xl font-bold text-white">{totalSessions}</div>
        </div>
        <div className="bg-[#242424] p-6 rounded-lg border border-gray-800">
          <div className="text-gray-400 text-sm mb-2">Current Streak</div>
          <div className="text-4xl font-bold text-white">0 days</div> {/* Placeholder for streak logic */}
        </div>
        <div className="bg-[#242424] p-6 rounded-lg border border-gray-800">
          <div className="text-gray-400 text-sm mb-2">Best WPM</div>
          <div className="text-4xl font-bold text-white">{bestWpm}</div>
        </div>
        <div className="bg-[#242424] p-6 rounded-lg border border-gray-800">
          <div className="text-gray-400 text-sm mb-2">Avg Accuracy</div>
          <div className="text-4xl font-bold text-white">{avgAccuracy || 0}%</div>
        </div>
      </div>
    </div>
  );
};