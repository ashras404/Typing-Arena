import React from 'react';
import { useStore } from '../store/useStore';

export const WeakKeys = ({ onBack }) => {
  const { weakKeys } = useStore();

  // Convert the object { 'a': 5, 'b': 2 } into a sorted array
  const sortedKeys = Object.entries(weakKeys)
    .sort(([, countA], [, countB]) => countB - countA);

  const totalMistakes = sortedKeys.reduce((sum, [, count]) => sum + count, 0);

  return (
    <div className="w-full max-w-4xl mx-auto p-8 animate-fade-in">
      <button onClick={onBack} className="text-gray-400 hover:text-white mb-8 flex items-center gap-2 cursor-pointer transition-colors">
        <span>←</span> Back
      </button>

      <div className="mb-10">
        <h1 className="text-4xl font-bold text-white mb-2">Weak Keys</h1>
        <p className="text-gray-400">Target your problem areas</p>
      </div>

      {sortedKeys.length === 0 ? (
        <div className="bg-[#242424] border border-gray-800 rounded-lg p-12 text-center text-gray-500">
          No mistakes recorded yet. Start a session to generate data!
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {sortedKeys.map(([char, count], index) => {
            // Determine severity color based on position in the sorted list
            let borderClass = 'border-gray-800';
            let textClass = 'text-gray-300';
            
            if (index < 3) { // Top 3 worst keys
              borderClass = 'border-red-500/50';
              textClass = 'text-red-500';
            } else if (index < 8) { // Next 5
              borderClass = 'border-orange-500/50';
              textClass = 'text-orange-500';
            }

            const displayChar = char === ' ' ? 'Space' : char.toUpperCase();

            return (
              <div 
                key={char} 
                className={`bg-[#242424] border ${borderClass} rounded-lg p-6 flex flex-col items-center justify-center`}
              >
                <div className={`text-3xl font-mono font-bold mb-2 ${textClass}`}>
                  {displayChar}
                </div>
                <div className="text-sm text-gray-500">
                  {count} {count === 1 ? 'error' : 'errors'}
                </div>
                <div className="text-xs text-gray-600 mt-2">
                  {Math.round((count / totalMistakes) * 100)}% of total
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};