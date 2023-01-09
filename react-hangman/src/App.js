import { useState } from 'react';
import './App.css';
import Category from './components/chooseCategory';
import EnterName from './components/enterName';
import Header from './components/header';
import Keyboard from './components/keyboard';
import Play from './components/play';

function App() {
  const [playerName, setPlayerName] = useState('');
  const [category, setCategory] = useState('');

  if (!playerName) {
    return (
      <div className="App">
        <Header />
        <EnterName setPlayerName={setPlayerName} />
        <h2>Enter player name, good luck!</h2>
      </div>
    );
  }

  if (!category) {
    return (
      <div className="App">
        <Header />
        <Category playerName={playerName} setCategory={setCategory} />
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <Play category={category} playerName={playerName} />
      <Keyboard />
    </div>
  );
}

export default App;
