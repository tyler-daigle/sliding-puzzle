import styles from "../style/PuzzleBoard.module.css";
import PropTypes from "prop-types";
import Tile from "./Tile";

export default function PuzzleBoard({ tiles, rows, cols }) {
  return (
    <div className={styles.puzzleBoard}>
      {tiles.map((tile, index) => (
        <Tile key={Math.random()} tile={tile} index={index} />
      ))}
    </div>
  );
}

PuzzleBoard.defaultProps = {
  rows: 4,
  cols: 4,
};

PuzzleBoard.propTypes = {
  tiles: PropTypes.array.isRequired,
  rows: PropTypes.number,
  cols: PropTypes.number,
};
