import styles from "../styles/Card.module.css";
import { useEffect, useState } from "react";

export default function Card() {
  function loadImage() {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((response) => response.json())
      .then((data) => setPokeName(data.name));
  }

  const [pokeName, setPokeName] = useState("");

  useEffect(() => {
    loadImage();
  });
  return (
    <div className={styles.card}>
      <div className={styles.img}></div>
      <h6 className={styles.text}>{pokeName}</h6>
    </div>
  );
}
