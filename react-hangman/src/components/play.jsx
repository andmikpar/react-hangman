import { useState } from 'react';
import words from '../wordLists/words';

const Play = ({ playerName, category }) => {
  const [targetWord, setTargetWord] = useState('');

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

  return (
    <div className="play">
      <h2>guess the stadium before its too late</h2>
      <p>{targetWord}</p>
      <img src="" alt="hangman at stage"></img>
      <p>lets play</p>
    </div>
  );
};

export default Play;
