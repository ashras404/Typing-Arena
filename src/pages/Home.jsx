import React from 'react';

export const Home = ({ onStart, onNavigate }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] w-full animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-white mb-3 tracking-tight">
          Typing <span className="text-orange-500">Arena</span>
        </h1>
        <p className="text-gray-400 text-lg">Build precision through practice</p>
      </div>

      <button 
        onClick={onStart}
        className="px-8 py-3 bg-[#d9774a] hover:bg-[#c2653a] text-[#1a1a1a] font-bold rounded-md transition-colors flex items-center gap-2 mb-16 cursor-pointer"
      >
        Start Session <span>➔</span>
      </button>

      <div className="w-full max-w-2xl border-t border-gray-800 pt-8 flex justify-center gap-8 text-gray-400">
        <button onClick={() => onNavigate('challenges')} className="hover:text-white transition-colors cursor-pointer">
          Challenges
        </button>
        <button onClick={() => onNavigate('progress')} className="hover:text-white transition-colors cursor-pointer">
          Progress
        </button>
        <button onClick={() => onNavigate('weakKeys')} className="hover:text-white transition-colors cursor-pointer">
          Weak Keys
        </button>
      </div>
    </div>
  );
};