import { useState } from 'react';

const EnterName = ({ setPlayerName }) => {
  const [input, setInput] = useState('');

  return (
    <div className="enterName">
      <input
        id="nameField"
        type={'text'}
        placeholder="Enter Name"
        onChange={(event) => {
          setInput(event.target.value);
        }}
      ></input>
      <button
        type="submit"
        onClick={(event) => {
          setPlayerName(input);
        }}
      >
        Lets Play!
      </button>
    </div>
  );
};

export default EnterName;
