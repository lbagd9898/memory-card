import { useState } from "react";
import Card from "./components/Card.jsx";

function App() {
  // async function fetchImages() {
  //   try {
  //     let response = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
  //     console.log(response.data.results);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }
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
          <div className="gridItem">
            <Card></Card>
          </div>
          <div className="gridItem">grid item</div>
          <div className="gridItem">grid item</div>
          <div className="gridItem">grid item</div>
          <div className="gridItem">grid item</div>
          <div className="gridItem">grid item</div>
          <div className="gridItem">grid item</div>
          <div className="gridItem">grid item</div>
          <div className="gridItem">grid item</div>
          <div className="gridItem">grid item</div>
        </section>
      </main>
    </>
  );
}

export default App;
