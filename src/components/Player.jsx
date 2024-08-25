import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(true);

  function handleEditClick() {
    setIsEditing((editing) => !editing);

    if (!isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = isEditing ? (
    <span className="player-name">{playerName}</span>
  ) : (
    <input
      type="text"
      required
      value={playerName}
      onChange={handleChange}
    ></input>
  );

  return (
    <li className={isActive ? "active" : "undefined"}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Edit" : "Save"}</button>
    </li>
  );
}
