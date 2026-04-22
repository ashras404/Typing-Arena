export const CHALLENGE_MODES = {
  STANDARD: {
    id: 'standard',
    name: 'Standard',
    allowBackspace: true,
    xpMultiplier: 1,
  },
  NO_BACKSPACE: {
    id: 'no_backspace',
    name: 'No Backspace',
    allowBackspace: false,
    xpMultiplier: 2,
  },
  FOCUS: {
    id: 'focus',
    name: 'Focus Mode',
    allowBackspace: true,
    fadeUpcoming: true,
    xpMultiplier: 1.5,
  }
};