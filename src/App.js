import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>El gatito #</h1>
      </header>
      <body className='App-body'>
        <Board></Board>
      </body>
    </div>
  );
}

function Square(){
  const [value, setvalue] = useState(null); 

  function handleClick(){
    setvalue('X');
  }

  return (
    <button className='square' onClick={handleClick}>
      {value}
    </button>
  );
}

function Board() {
  return (
    <>
      <div className='board-row'>
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
      <div className='board-row'>
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
      <div className='board-row'>
        <Square></Square>
        <Square></Square>
        <Square></Square>
      </div>
    </>
  );
}

export default App;
