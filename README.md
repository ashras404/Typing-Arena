# ⌨️ Typing Arena

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Zustand-443E38?style=for-the-badge&logo=react&logoColor=white" alt="Zustand" />

</div>

<br />

> A high-performance, modular typing speed application built to track keystroke precision, calculate real-time WPM, and gamify the typing experience through custom constraints and analytics.

<!-- <img width="1920" height="814" alt="Recording 2026-04-26 151937" src="https://github.com/user-attachments/assets/3675d2db-94e6-46eb-9fe0-428f5f416836" /> -->
<img width="1890" height="820" alt="GIF" src="https://github.com/user-attachments/assets/c31c5270-131f-4bd0-a539-8533dd802cdb" />

## ✨ Key Features

### 🏎️ Zero-Lag Typing Engine
Built with a highly optimized React architecture. The core typing logic is isolated within custom hooks (`useTypingEngine`, `useMetrics`), separating the state from the global UI. This ensures 60fps keystroke registration without triggering unnecessary component tree re-renders.

### 📊 Persistent Analytics & Weak Key Detection
Powered by **Zustand** with local storage persistence. The app goes beyond standard WPM tracking by recording your lifetime statistics, leveling up your profile (XP system), and executing a custom algorithm to aggregate and identify your specific "Weak Keys" across all sessions.

<img width="1919" height="811" alt="Screenshot 2026-04-26 151346" src="https://github.com/user-attachments/assets/4f62dfba-1aa9-475c-ab9e-b21e2cfeae50" />


### 🎮 Dynamic Challenge Modes
Features a scalable configuration matrix that modifies the engine's behavior on the fly:
* **Focus Mode:** UI constraint where text progressively fades away from the cursor, forcing visual lock-in.
* **No Backspace:** Disables error correction for strict accuracy training.
* **Speed Burst:** A sudden-death mode featuring a live timer where dropping below 40 WPM after a 5-second grace period triggers an instant fail state.

### 🪄 Game Feel & UI/UX Optimization
Features a custom dark-mode interface built with Tailwind CSS. Includes custom CSS keyframe animations (letters physically "fly off" and leave a ghost trail upon correct input) to provide satisfying physical feedback and enhance user engagement.

---

## 🛠️ Tech Stack & Architecture

* **Frontend:** React 18, Vite
* **Styling:** Tailwind CSS (Custom thematic configurations)
* **State Management:** Zustand (w/ persist middleware)
* **Routing:** Custom lightweight state-based view router

**Architecture Highlight:** The codebase strictly enforces a separation of concerns. UI components (like `TypingArea.jsx` and `ResultScreen.jsx`) remain completely declarative, while business logic and complex state calculations are abstracted into modular `hooks/` and `utils/`.

---

## 🚀 Run Locally

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/YOUR_USERNAME/typing-arena.git](https://github.com/YOUR_USERNAME/typing-arena.git)
2. **Navigate into the directory:**
    ```bash
    cd typing-arena
3. **Install dependencies:**
   ```bash
   npm install
4. **Start the development server:**
   ```bash
   npm run dev

---

THANKYOU- By **Ashras404**
