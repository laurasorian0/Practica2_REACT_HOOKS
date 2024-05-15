import { useState } from "react";
import "./Character.css";
const Character = ({ character }) => {
  const [girado, setGirado] = useState(false);

  return (
    <div>
      <img
        className={girado ? "girado" : "image"}
        src={character.image}
        alt={character.name}
        onClick={() => setGirado(!girado)}
      />
    </div>
  );
};

export default Character;

