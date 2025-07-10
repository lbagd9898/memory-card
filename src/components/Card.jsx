import styles from "../styles/Card.module.css";
import { useEffect, useState } from "react";

export default function Card({ pokemon, onClick }) {
  const [clicked, setClicked] = useState(pokemon.clicked);

  function loadImage() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
      .then((response) => response.json())
      .then((data) =>
        setPokeData({ name: data.name, img: data.sprites.front_shiny })
      )
      .catch((e) => console.log(e));
  }

  const [pokeData, setPokeData] = useState({ name: "", img: "" });

  useEffect(() => {
    loadImage();
  });
  return (
    <div
      onClick={onClick}
      className={`${styles.card} card text-white bg-dark mb-3`}
    >
      <div>
        <img src={pokeData.img} alt="ditto" />
      </div>
      <div>
        <h4 className={styles.text}>{pokeData.name.toUpperCase()}</h4>
      </div>
    </div>
  );
}
