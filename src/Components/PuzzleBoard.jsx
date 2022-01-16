import styles from "../style/PuzzleBoard.module.css";
import PropTypes from "prop-types";
import Tile from "./Tile";
import { useContext } from "react";
import { GameContext } from "../context/GameContext";
export default function PuzzleBoard({ tiles, rows, cols }) {
  const { handleTileClick } = useContext(GameContext);

  return (
    <div className={styles.puzzleBoard}>
      {tiles.map((tile, index) => (
        <Tile
          onClick={() => handleTileClick(index, tile)}
          key={Math.random()}
          tile={tile}
          index={index}
        />
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
