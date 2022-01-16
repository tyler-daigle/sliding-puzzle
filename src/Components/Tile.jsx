import styles from "../style/Tile.module.css";

export default function Tile({ tile, index }) {
  return (
    <div className={styles.tile}>
      <h1>{tile.value}</h1>
    </div>
  );
}
