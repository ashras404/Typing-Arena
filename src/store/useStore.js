import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore = create(
  persist(
    (set) => ({
      // State
      xp: 0,
      level: 1,
      bestWpm: 0,
      totalSessions: 0,
      weakKeys: {},

      // Action to save a completed test
      saveSession: ({ wpm, accuracy, newWeakKeys }) => set((state) => {
        // Base XP calculation
        const earnedXP = wpm + (accuracy > 95 ? 50 : 0);
        const newTotalXP = state.xp + earnedXP;
        
        // 1 Level = 1000 XP
        const newLevel = Math.floor(newTotalXP / 1000) + 1;

        // Merge the new weak keys with the historical weak keys
        const mergedWeakKeys = { ...state.weakKeys };
        Object.keys(newWeakKeys).forEach(key => {
          mergedWeakKeys[key] = (mergedWeakKeys[key] || 0) + newWeakKeys[key];
        });

        return {
          xp: newTotalXP,
          level: newLevel,
          bestWpm: Math.max(state.bestWpm, wpm),
          totalSessions: state.totalSessions + 1,
          weakKeys: mergedWeakKeys,
        };
      }),
    }),
    {
      name: 'typing-arena-storage', // Saves to localStorage under this key
    }
  )
);