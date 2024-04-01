import "../../../../../front-end-shared/css/Game/Game.css";

import { Tarjeta } from "./Tarjeta/Tarjeta.jsx";
import { NavbarGame } from "./NavbarGame.jsx";
import { Chat } from "./Chat/Chat.jsx";
import { Tablero } from "./Tablero/Tablero.jsx";
import { CartaDesplegable } from "./Cartas/CartaDesplegable.jsx";
import { CharacterSelection } from "./CharacterSelection.jsx";
import { Turno } from "./Turno/Turno.jsx";
import { /* useEffect, */ useState } from "react";

export function Game() {
  const [characterSelection, setCharacterSelection] = useState(false);
  const [myCharacter, setMyCharacter] = useState(null);

  const handleCharacterSelection = (character) => {
    setMyCharacter(character);
    console.log("Character selected:", character);
    setCharacterSelection(false); // Close the modal
  };

  // 👇🏼 Effect to change 'isMyTurn' --> true when the player's turn comes up so that the Turno component is displayed

  /* Get the users from the database and if there isn't 
    enough players, set the name 'Bot_i' */

  return (
    <>
      {characterSelection && (
        <div className="game-characters-selection">
          <CharacterSelection onSelectCharacter={handleCharacterSelection} />
        </div>
      )}
      <Turno />
      <NavbarGame />
      <Tarjeta />
      <Chat />
      <CartaDesplegable />
      <div className="main-board">
        <div className="users-info">
          <h2> user1 </h2>
          <h2> user2 </h2>
          <h2> user3 </h2>
        </div>
        <Tablero />
        <div className="users-info">
          <h2> user4 </h2>
          <h2> user5 </h2>
          <h2> user6 </h2>
        </div>
      </div>
    </>
  );
}
