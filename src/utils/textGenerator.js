const TEXT_BANK = [
  "Practice makes progress, not perfection. Each attempt builds skill through repetition and focused effort.",
  "The quick brown fox jumps over the lazy dog. This sentence contains every letter in the English alphabet, making it perfect for typing practice.",
  "Clean architecture isolates your business logic from the UI. This prevents unnecessary re-renders and keeps your application highly performant.",
  "State management is crucial in complex applications. Using tools like Zustand allows you to decouple your global data from your local component tree.",
  "Consistency is the key to mastering any skill. Typing a little bit every day will build muscle memory much faster than cramming for hours.",
  "Good developers write code that machines can understand. Great developers write code that other humans can understand."
];

export const getRandomText = () => {
  const randomIndex = Math.floor(Math.random() * TEXT_BANK.length);
  return TEXT_BANK[randomIndex];
};