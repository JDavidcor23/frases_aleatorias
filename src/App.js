import React from "react";
import "./index.css";
import { frases } from "./data";
function App() {
  const [id, setId] = React.useState(0);
  function randomNumber(min, max) {
    const r = Math.random() * (max - min);
    return Math.floor(r);
  }
  const link = "https://twitter.com/intent/tweet?text=" + frases[id].frase + "  --" + frases[id].autor;
  return (
    <div id="container">
      <div id="quote-box">
        <p id="text">{frases[id].frase}</p>
        <p id="autor">{frases[id].autor}</p>
        <div id="container-link">
          <a href={link} id="tweet-quote" target="_blank" rel="noreferrer">
            <img
              src="https://res.cloudinary.com/dhu6ga6hl/image/upload/v1642616220/j22blag4ezgpkl9awve1.png"
              alt="Logo twitter"
            />
          </a>
          <button id="new-quote" onClick={() => setId(randomNumber(1, 29))}>
            Nueva frase
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
