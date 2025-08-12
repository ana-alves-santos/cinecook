import React, { useState } from "react";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <header className="header-logos">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Logo do Vite" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="Logo do React" />
        </a>
      </header>

      <main className="main-content">
        <h1>Vite + React</h1>

        <div className="card">
          <button onClick={increment}>
            count is {count}
          </button>
          <p>
            Edite o arquivo <code>src/App.jsx</code> e salve para testar HMR
          </p>
        </div>

        <p className="read-the-docs">
          Clique nos logos do Vite e React para saber mais
        </p>
      </main>
    </div>
  );
}

export default App;
