import { useState } from 'react';
import './App.css';
import Category from './components/chooseCategory';
import EnterName from './components/enterName';
import Header from './components/header';
import Keyboard from './components/keyboard';
import Play from './components/play';

function App() {
  const [playerName, setPlayerName] = useState('d');
  const [category, setCategory] = useState('football');

  if (!playerName) {
    return (
      <div className="App">
        <Header />
        <EnterName setPlayerName={setPlayerName} />
        <Keyboard />
      </div>
    );
  }

  if (!category) {
    return (
      <div className="App">
        <Header />
        <Category setCategory={setCategory} />
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
