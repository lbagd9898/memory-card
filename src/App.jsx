import { useState, useEffect } from "react";
import Card from "./components/Card.jsx";

function App() {
  const [currentScore, setCurrentScore] = useState(0);

  const [highScore, setHighScore] = useState(0);

  const [showAlert, setShowAlert] = useState(false);

  const originalPokemons = [
    { name: "ditto", clicked: false },
    { name: "pikachu", clicked: false },
    { name: "bulbasaur", clicked: false },
    { name: "charmeleon", clicked: false },
    { name: "squirtle", clicked: false },
    { name: "vileplume", clicked: false },
    { name: "butterfree", clicked: false },
    { name: "caterpie", clicked: false },
    { name: "weedle", clicked: false },
    { name: "jigglypuff", clicked: false },
  ];

  const [pokemons, setPokemons] = useState(originalPokemons);

  const originalIndices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [indices, setIndices] = useState(originalIndices);

  function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function setToClicked(selected) {
    setPokemons((prev) =>
      prev.map((pokemon) =>
        pokemon === selected ? { ...pokemon, clicked: true } : pokemon
      )
    );
  }

  useEffect(() => {
    setIndices((prev) => {
      const newIndices = shuffleArray(prev);
      return newIndices;
    });
  }, [pokemons]);

  function handleClick(pokemon) {
    if (pokemon.clicked === true) {
      if (currentScore > highScore) {
        setHighScore(currentScore);
      }
      setCurrentScore(0);
      setPokemons(originalPokemons);
      setIndices(originalIndices);
      setShowAlert(true);
    } else {
      setToClicked(pokemon);
      setCurrentScore((prev) => prev + 1);
    }
  }

  return (
    <>
      <header className="navbar navbar-expand-lg bg-dark">
        <div></div>

        <div>
          <h1>Memory Card Game</h1>
          <h3>Try not to click any card twice!</h3>
        </div>
        <div>
          <h4>High Score: {highScore}</h4>
          <h4>Current Score: {currentScore}</h4>
        </div>
      </header>
      <main>
        <section className="grid">
          {indices.map((index) => (
            <div className="gridItem">
              <Card
                onClick={() => handleClick(pokemons[index])}
                pokemon={pokemons[index]}
              ></Card>
            </div>
          ))}
        </section>
      </main>
      {showAlert && (
        <div className="alert-overlay" role="alert" aria-modal="true">
          <div
            role="alert"
            className="alert-box alert alert-dismissible alert-danger"
          >
            You Lost!
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={() => setShowAlert(false)}
            ></button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
