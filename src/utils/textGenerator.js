const TEXT_BANK = [
  "Thankyou for giving this a chance, really appreciate it. I hope you have fun playing around with it and maybe even find it useful for improving your typing skills!",
  "Meow is not meowing because meow need to meow more to meow the meow. Meow is meowing because meow is meowing.",
  "The secret to great typing is practice, practice, and more practice. Don’t give up!",
  "The dev name is Ashras, What a cool name right? I know, I know, you wish your name was Ashras too.",
  "Typa Stuff We be doing instead of preparing for Finals, haina?",
  "The quick brown fox rage quit after the lazy dog stole its snacks and WiFi password.",
  "Typing fast is cool until you accidentally send 'I love you' to your professor instead of 'I’ll review'.",
  "My code works perfectly, I just have no idea why. Please don’t touch anything.",
  "I opened 47 tabs to stay productive, and now I’m emotionally attached to all of them.",
  "If at first you don’t succeed, rename the function and pretend it was intentional."
];

export const getRandomText = () => {
  const randomIndex = Math.floor(Math.random() * TEXT_BANK.length);
  return TEXT_BANK[randomIndex];
};