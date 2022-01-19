import React from "react";
import "./index.css";
import { frases } from "./data";
function App() {
  const [id, setId] = React.useState(0);
  function randomNumber(min, max) {
    const r = Math.random() * (max - min);
    return Math.floor(r);
  }
  return (
    <div id="container">
      <div id="quote-box">
        <p id="text">{frases[id].frase}</p>
        <p id="author">{frases[id].autor}</p>
        <button id="new-quote" onClick={() => setId(randomNumber(1, 29))}>
          Nueva frase
        </button>
        <a href="https://twitter.com" id="tweet-quote">
          Twitter
        </a>
      </div>
    </div>
  );
}

export default App;
