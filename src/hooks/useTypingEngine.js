import { useState, useCallback, useEffect } from 'react';

export const useTypingEngine = (originalText, modeConfig = {}) => {
  const [typedText, setTypedText] = useState('');
  const [cursorIndex, setCursorIndex] = useState(0);
  const [errors, setErrors] = useState(0);
  const [weakKeys, setWeakKeys] = useState({});
  const [status, setStatus] = useState('idle'); // idle, typing, finished

  const handleKeyDown = useCallback((e) => {
    if (status === 'finished') return;
    if (status === 'idle') setStatus('typing');

    const key = e.key;
    const isBackspace = key === 'Backspace';
    // Strictly match single characters, ignore modifiers like Shift/Ctrl/Alt
    const isChar = key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey;

    if (isBackspace && modeConfig.allowBackspace !== false) {
      e.preventDefault();
      setTypedText((prev) => prev.slice(0, -1));
      setCursorIndex((prev) => Math.max(0, prev - 1));
      return;
    }

    if (isChar && cursorIndex < originalText.length) {
      e.preventDefault();
      const expectedChar = originalText[cursorIndex];
      const isCorrect = key === expectedChar;

      if (!isCorrect) {
        setErrors((prev) => prev + 1);
        setWeakKeys((prev) => ({ ...prev, [expectedChar]: (prev[expectedChar] || 0) + 1 }));
      }

      setTypedText((prev) => prev + key);
      setCursorIndex((prev) => prev + 1);

      if (cursorIndex + 1 === originalText.length) {
        setStatus('finished');
      }
    }
  }, [cursorIndex, originalText, status, modeConfig]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return { typedText, cursorIndex, errors, weakKeys, status };
};