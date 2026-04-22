import React, { memo } from 'react';

const Character = memo(({ char, state, distance, focusMode }) => {
  let colorClass = 'text-gray-500'; // default pending color
  let opacityStyle = {};
  let animationClass = '';

  if (state === 'correct') {
    colorClass = 'text-gray-300';
    animationClass = 'animate-fly-off'; // Trigger fly off
  }
  
  if (state === 'incorrect') {
    colorClass = 'text-red-500 font-bold'; // Keep it red so they know it was an error
    animationClass = 'animate-fly-off'; // Trigger fly off
  }
  
  if (state === 'cursor') {
    colorClass = 'text-gray-500 border-l-2 border-orange-500 animate-pulse';
  }

  // Focus Mode Logic (Fading text ahead of the cursor)
  if (focusMode && state === 'pending') {
    const fadePoint = Math.max(0, 1 - (distance / 10)); 
    opacityStyle = { opacity: fadePoint };
  }

  return (
    <span 
      className={`${colorClass} ${animationClass} font-mono text-2xl transition-colors duration-75 inline-block whitespace-pre`}
      style={opacityStyle}
    >
      {char}
    </span>
  );
});

Character.displayName = 'Character';
export default Character;