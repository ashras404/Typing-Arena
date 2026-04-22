import React from 'react';
import { useStore } from '../store/useStore';
import { CHALLENGE_MODES } from '../utils/modes';

export const Challenges = ({ onBack }) => {
  const { activeMode, setActiveMode } = useStore();

  return (
    <div className="w-full max-w-3xl mx-auto p-8 animate-fade-in">
      <button onClick={onBack} className="text-gray-400 hover:text-white mb-8 flex items-center gap-2 cursor-pointer transition-colors">
        <span>←</span> Back
      </button>

      <div className="mb-10">
        <h1 className="text-4xl font-bold text-white mb-2">Challenge Modes</h1>
        <p className="text-gray-400">Push your limits with modified constraints</p>
      </div>

      <div className="flex flex-col gap-4">
        {CHALLENGE_MODES.map((mode) => {
          const isActive = activeMode === mode.id;
          return (
            <button
              key={mode.id}
              onClick={() => setActiveMode(mode.id)}
              className={`flex items-center justify-between p-6 rounded-lg border text-left cursor-pointer transition-all duration-200 ${
                isActive 
                  ? 'bg-orange-500/10 border-orange-500' 
                  : 'bg-[#242424] border-gray-800 hover:border-gray-600'
              }`}
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className={`text-xl font-bold ${isActive ? 'text-orange-500' : 'text-white'}`}>
                    {mode.name}
                  </h3>
                  <span className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded font-mono">
                    {mode.badge}
                  </span>
                </div>
                <p className="text-gray-400 text-sm">{mode.description}</p>
              </div>
              <div className="text-orange-500 font-mono font-bold">
                {mode.multiplier}x XP
              </div>
            </button>
          );
        })}
      </div>
      
      <div className="text-center text-gray-600 mt-12 text-sm">
        Challenge modes coming soon: Speed Burst
      </div>
    </div>
  );
};