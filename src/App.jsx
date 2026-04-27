import React, { useEffect, useMemo, useRef } from 'react';
import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { TypingArea } from './components/typing/TypingArea';
import { Home } from './pages/Home';
import { Progress } from './pages/Progress';
import { Challenges } from './pages/Challenges';
import { WeakKeys } from './pages/WeakKeys';
import { getRandomText } from './utils/textGenerator';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [currentText, setCurrentText] = useState('');

  const handleStartSession = () => {
    setCurrentText(getRandomText());
    setCurrentView('typing');
  };

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return (
          <Home 
            onStart={handleStartSession} 
            onNavigate={(view) => setCurrentView(view)} 
          />
        );
      case 'progress':
        return <Progress onBack={() => setCurrentView('home')} />;
      case 'challenges':
        return <Challenges onBack={() => setCurrentView('home')} />;
      case 'weakKeys':
        return <WeakKeys onBack={() => setCurrentView('home')} />;
      case 'typing':
        return (
          <div className="w-full relative animate-fade-in">
            <button 
              onClick={() => setCurrentView('home')}
              className="absolute -top-12 left-0 text-gray-500 hover:text-white flex items-center gap-2 cursor-pointer transition-colors"
            >
              <span>←</span> Exit Session
            </button>
            <TypingArea text={currentText} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="min-h-screen bg-[#1a1a1a] flex flex-col items-center justify-center p-4">
        {renderView()}
      </div>
      <Analytics />
    </>
  );
}