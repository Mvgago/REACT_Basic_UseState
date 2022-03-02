import './App.css';
import React, { useState } from 'react';

function App() {
  const[state, setState] = useState(false);

  const encenderApagar = () => {
    //console.log('Encender / Apagar');
    setState(!state)
    
  };

  return (
    <>
    <h3>El coche está: {state ? 'Encendido' : 'Apagado'} </h3>
   
    <button onClick={encenderApagar}>Encender/ Apagar</button>

    </>
    
  );
}

export default App;
