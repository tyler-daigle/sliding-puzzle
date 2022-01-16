import PropTypes from "prop-types";
import styles from "../style/Tile.module.css";

export default function Tile({ tile, index, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`${styles.tile} ${tile.value === 0 && styles.tileEmpty}`}
    >
      <h1>{tile.value !== 0 ? tile.value : ""}</h1>
    </div>
  );
}

Tile.propTypes = {
  tile: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
