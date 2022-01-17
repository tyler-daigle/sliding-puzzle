import PropTypes from "prop-types";
import styles from "../style/Tile.module.css";
import { TileTypes } from "../shared/tiles";

export default function Tile({ tile, index, onClick }) {
  let colorClass;

  switch (tile.type) {
    case TileTypes.TileA:
      colorClass = styles.tileA;
      break;
    case TileTypes.TileB:
      colorClass = styles.tileB;
      break;
    case TileTypes.TileC:
      colorClass = styles.tileC;
      break;
    case TileTypes.TileD:
      colorClass = styles.tileD;
      break;
    case TileTypes.Empty:
      colorClass = styles.tileEmpty;
      break;
    default:
      colorClass = styles.defaultTile;
      break;
  }

  return (
    <div onClick={onClick} className={`${styles.tile} ${colorClass}`}></div>
  );
}

Tile.propTypes = {
  tile: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
