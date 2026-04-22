export const CHALLENGE_MODES = [
  {
    id: 'standard',
    name: 'Standard Mode',
    description: 'Normal typing experience. Best for warmups.',
    badge: 'Normal',
    multiplier: 1,
    allowBackspace: true,
    focusMode: false,
  },
  {
    id: 'no_backspace',
    name: 'No Backspace',
    description: 'Every keystroke counts. No corrections allowed.',
    badge: 'Hard',
    multiplier: 2,
    allowBackspace: false,
    focusMode: false,
  },
  {
    id: 'focus',
    name: 'Focus Mode',
    description: 'Text fades progressively. Stay focused or lose context.',
    badge: 'Focus',
    multiplier: 1.5,
    allowBackspace: true,
    focusMode: true,
  }
];