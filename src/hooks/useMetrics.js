import { useState, useEffect } from 'react';

export const useMetrics = (typedText, originalText, status) => {
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [startTime, setStartTime] = useState(null);
  const [time, setTime] = useState(0); // New timer state

  // Timer Effect
  useEffect(() => {
    let interval;
    if (status === 'typing') {
      if (!startTime) setStartTime(Date.now());
      
      // Update the timer every second
      interval = setInterval(() => {
        setTime(Math.floor((Date.now() - (startTime || Date.now())) / 1000));
      }, 1000);
    } else if (status === 'idle') {
      setTime(0);
      setStartTime(null);
    }

    return () => clearInterval(interval);
  }, [status, startTime]);

  // WPM & Accuracy Effect
  useEffect(() => {
    if (status === 'typing' && typedText.length > 0 && startTime) {
      const timeElapsedMinutes = (Date.now() - startTime) / 60000;
      
      let correctChars = 0;
      for (let i = 0; i < typedText.length; i++) {
        if (typedText[i] === originalText[i]) correctChars++;
      }

      const currentWpm = Math.round((correctChars / 5) / timeElapsedMinutes);
      const currentAcc = Math.round((correctChars / typedText.length) * 100);

      setWpm(isFinite(currentWpm) && currentWpm > 0 ? currentWpm : 0);
      setAccuracy(currentAcc);
    }
  }, [typedText, status, startTime, originalText]);

  return { wpm, accuracy, time };
};