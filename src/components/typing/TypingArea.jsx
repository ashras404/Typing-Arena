import React, { useMemo, useEffect, useState } from 'react';
import Character from './Character';
import { useTypingEngine } from '../../hooks/useTypingEngine';
import { useMetrics } from '../../hooks/useMetrics';
import { useStore } from '../../store/useStore';
import { ResultScreen } from '../results/ResultScreen';
import { CHALLENGE_MODES } from '../../utils/modes';

export const TypingArea = ({ text }) => {
  const [sessionKey, setSessionKey] = useState(0);
  const activeModeId = useStore((state) => state.activeMode) || 'standard';
  
  // Look up the full config for the selected mode
  const modeConfig = CHALLENGE_MODES.find(m => m.id === activeModeId) || CHALLENGE_MODES[0];

  return (
    <TypingSession 
      key={sessionKey} 
      text={text} 
      mode={modeConfig} 
      onRestart={() => setSessionKey(prev => prev + 1)} 
    />
  );
};

const TypingSession = ({ text, mode, onRestart }) => {
  const { typedText, cursorIndex, status, weakKeys } = useTypingEngine(text, mode);
  // Extract 'time' from our updated hook
  const { wpm, accuracy, time } = useMetrics(typedText, text, status);
  const saveSession = useStore((state) => state.saveSession);

  useEffect(() => {
    if (status === 'finished') {
      saveSession({ wpm, accuracy, newWeakKeys: weakKeys, modeMultiplier: mode.multiplier });
    }
  }, [status, saveSession, wpm, accuracy, weakKeys, mode]);

  const charStates = useMemo(() => {
    return text.split('').map((char, index) => {
      if (index === cursorIndex) return 'cursor';
      if (index < cursorIndex) {
        return typedText[index] === char ? 'correct' : 'incorrect';
      }
      return 'pending';
    });
  }, [text, typedText, cursorIndex]);

  if (status === 'finished') {
    return <ResultScreen wpm={wpm} accuracy={accuracy} weakKeys={weakKeys} onRestart={onRestart} />;
  }

  // Format the time to always show two digits for seconds (e.g., 0:05 instead of 0:5)
  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto p-8 animate-fade-in">
      <div className="flex justify-between w-full mb-8 text-gray-400 font-mono text-xl items-center">
        <span>WPM: <strong className="text-orange-500">{wpm}</strong></span>
        
        {/* NEW: Timer Display */}
        <span className="flex gap-4 items-center">
          <span className="text-sm bg-gray-800 px-3 py-1 rounded text-orange-500 uppercase tracking-widest font-bold">
            {mode.name}
          </span>
          <span className="text-white bg-[#242424] border border-gray-800 px-3 py-1 rounded">
            {formatTime(time)}
          </span>
        </span>
        
        <span>ACC: <strong className="text-orange-500">{accuracy}%</strong></span>
      </div>
      
      <div className="leading-relaxed tracking-wide select-none outline-none break-words w-full" tabIndex={0}>
        {text.split('').map((char, i) => {
          const distance = i - cursorIndex;
          return (
            <Character 
              key={i} 
              char={char} 
              state={charStates[i]} 
              distance={distance}
              focusMode={mode.focusMode}
            />
          );
        })}
      </div>
    </div>
  );
};