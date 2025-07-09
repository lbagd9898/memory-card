import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  return (
    <>
      <header className="navbar navbar-expand-lg bg-dark">
        <div></div>

        <div>
          <h1>Memory Card Game</h1>
          <h3>Try not to click any card twice!</h3>
        </div>
        <div>
          <h4>High Score: 0</h4>
          <h4>Current Score: 0</h4>
        </div>
      </header>
    </>
  );
}

export default App;
