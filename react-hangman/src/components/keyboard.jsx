const Keyboard = ({ setNameInput }) => {
  function handleClick(event) {
    setNameInput(event.target.innerText);
  }

  return (
    <div className="keyboard">
      <button
        className="keyboardButton"
        onClick={(event) => {
          handleClick(event);
        }}
      >
        A
      </button>
      <button className="keyboardButton">A</button>
      <button className="keyboardButton">A</button>
      <button className="keyboardButton">A</button>
      <button className="keyboardButton">A</button>
      <button className="keyboardButton">A</button>
      <button className="keyboardButton">A</button>
      <button className="keyboardButton">A</button>
      <button className="keyboardButton">A</button>
      <button className="keyboardButton">A</button>
      <button className="keyboardButton">A</button>
      <button className="keyboardButton">A</button>
      <button className="keyboardButton">A</button>
      <button className="keyboardButton">A</button>
      <button className="keyboardButton">A</button>
      <button className="keyboardButton">A</button>
      <button className="keyboardButton">A</button>
      <button className="keyboardButton">A</button>
      <button className="keyboardButton">A</button>
      <button className="keyboardButton">A</button>
      <button className="keyboardButton">A</button>
      <button className="keyboardButton">A</button>
      <button className="keyboardButton">A</button>
      <button className="keyboardButton">A</button>
      <button className="keyboardButton">A</button>
      <button className="keyboardButton">A</button>
    </div>
  );
};

export default Keyboard;
