const Keyboard = ({ setGuess, guess }) => {
  function handleClick(guess) {
    setGuess(guess.toLowerCase());
  }

  const KeyboardArray = [
    {
      value: 'Q',
      className: 'keyboardButton',
      onClick: handleClick,
    },
    {
      value: 'W',
      className: 'keyboardButton',
      onClick: handleClick,
    },
    {
      value: 'E',
      className: 'keyboardButton',
      onClick: handleClick,
    },
    {
      value: 'R',
      className: 'keyboardButton',
      onClick: handleClick,
    },
    {
      value: 'T',
      className: 'keyboardButton',
      onClick: handleClick,
    },
    {
      value: 'Y',
      className: 'keyboardButton',
      onClick: handleClick,
    },
    {
      value: 'U',
      className: 'keyboardButton',
      onClick: handleClick,
    },
    {
      value: 'I',
      className: 'keyboardButton',
      onClick: handleClick,
    },
    {
      value: 'O',
      className: 'keyboardButton',
      onClick: handleClick,
    },
    {
      value: 'P',
      className: 'keyboardButton',
      onClick: handleClick,
    },
    {
      value: 'A',
      className: 'keyboardButton',
      onClick: handleClick,
    },
    {
      value: 'S',
      className: 'keyboardButton',
      onClick: handleClick,
    },
    {
      value: 'D',
      className: 'keyboardButton',
      onClick: handleClick,
    },
    {
      value: 'F',
      className: 'keyboardButton',
      onClick: handleClick,
    },
    {
      value: 'G',
      className: 'keyboardButton',
      onClick: handleClick,
    },
    {
      value: 'H',
      className: 'keyboardButton',
      onClick: handleClick,
    },
    {
      value: 'J',
      className: 'keyboardButton',
      onClick: handleClick,
    },
    {
      value: 'K',
      className: 'keyboardButton',
      onClick: handleClick,
    },
    {
      value: 'L',
      className: 'keyboardButton',
      onClick: handleClick,
    },
    {
      value: 'Z',
      className: 'keyboardButton',
      onClick: handleClick,
    },
    {
      value: 'X',
      className: 'keyboardButton',
      onClick: handleClick,
    },
    {
      value: 'C',
      className: 'keyboardButton',
      onClick: handleClick,
    },
    {
      value: 'V',
      className: 'keyboardButton',
      onClick: handleClick,
    },
    {
      value: 'B',
      className: 'keyboardButton',
      onClick: handleClick,
    },
    {
      value: 'N',
      className: 'keyboardButton',
      onClick: handleClick,
    },
    {
      value: 'M',
      className: 'keyboardButton',
      onClick: handleClick,
    },
  ];
  return (
    <div className="keyboard">
      {KeyboardArray.map((key) => {
        return (
          <button
            value={key.value}
            onClick={(e) => {
              key.onClick(e.target.value);
            }}
            className={key.className}
          >
            {key.value}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
