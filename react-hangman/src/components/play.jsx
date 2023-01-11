import { useEffect } from 'react';
import { useState } from 'react';
import words from '../wordLists/words';
import Keyboard from './keyboard';
import { MdReplay } from 'react-icons/md';

const Play = ({ playerName, category, setGuess, guess }) => {
  const [targetWord, setTargetWord] = useState('');
  const [guessed, setGuessed] = useState([]);
  const [num, setNum] = useState(1);
  const [lostGame, setLostGame] = useState(false);

  function selectWord(category) {
    const possibleWords = words.filter((word) => {
      if (category === 'random') {
        return word;
      }
      if (word.sport === category) return word;
    });

    return possibleWords[Math.floor(Math.random() * possibleWords.length)].name;
  }

  if (!targetWord) {
    const word = selectWord(category);
    setTargetWord(word);
  }
  useEffect(() => {
    if (!targetWord.includes(guess) && num < 10) {
      setNum(num + 1);
    } else if (!targetWord.includes(guess) && num >= 10) {
      setLostGame(true);
    }
    setGuessed([...guessed, guess]);
  }, [guess]);

  const targetArray = targetWord.split('');
  const onScreen = targetArray.map((letter) => {
    if (!guessed.includes(letter)) {
      return '_ ';
    }

    return letter;
  });

  const Hangman = require(`../hangmanPositions/position-${num}.png`);
  const winCheck = onScreen.join('') === targetWord;

  return (
    <div className="play">
      <h2>guess the stadium before its too late</h2>
      <br></br>

      <p>{onScreen}</p>

      <br></br>
      {winCheck ? <p>you win</p> : <p></p>}
      {lostGame ? (
        <p>
          You Lose {playerName}! The word you wanted was {targetWord}!{' '}
        </p>
      ) : (
        <p></p>
      )}
      {!winCheck && !lostGame ? (
        <div>
          <img src={Hangman} alt="hangman"></img>
          <p>lets play</p>
          <div className="keyboardContainer">
            <Keyboard setGuess={setGuess} guess={guess} />
          </div>
        </div>
      ) : (
        <button
          className="replayButton"
          onClick={() => {
            window.location.reload();
          }}
        >
          <MdReplay />
        </button>
      )}
    </div>
  );
};

export default Play;
