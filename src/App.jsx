import { useState, useEffect } from "react";
import Card from "./components/Card.jsx";

function App() {
  const [pokemons, setPokemons] = useState([
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
  ]);

  function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function setToClicked(selected) {
    console.log(selected);
    setPokemons((prev) =>
      prev.map((pokemon) =>
        pokemon === selected ? { ...pokemon, clicked: true } : pokemon
      )
    );
  }

  useEffect(() => {
    console.log("Updated pokemons:", pokemons);
  }, [pokemons]);

  function handleClick(pokemon) {
    setToClicked(pokemon);
    let arr = shuffleArray(pokemons);
    setPokemons(arr);
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
          <h4>High Score: 0</h4>
          <h4>Current Score: 0</h4>
        </div>
      </header>
      <main>
        <section className="grid">
          {pokemons.map((pokemon) => (
            <div className="gridItem">
              <div>{pokemon.clicked ? "clicked" : "unclicked"}</div>
              <Card
                onClick={() => handleClick(pokemon)}
                pokemon={pokemon}
              ></Card>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
