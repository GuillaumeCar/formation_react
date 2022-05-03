import React from 'react';
import './App.css';
import Button from './components/ui/Button/Button';

function App() {
  return (
    <div className="App">
      {/* <Button text="Aaaa"/> */}
      <Button>Text child</Button>
      <Button><div>Ouiiiii</div></Button>
      <Button><div>Ouiiiii</div><div>Ouiiiii</div></Button>
    </div>
  );
}

export default App;
