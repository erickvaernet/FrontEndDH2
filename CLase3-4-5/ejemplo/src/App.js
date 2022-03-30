
import './App.css';
import React from 'react';
import ComponenteFuncional from './components/ComponenteFuncional';
import ComponenteClase from './components/ComponenteClase';
import Parent from './components/Parent';
import UsoChildren from './components/UsoChildren';
import Hijo from './components/Hijo';

const frutas=["banana", "manzana", "naranja","anana","pera"]

function App() {
  return (<React.Fragment>
    <ComponenteFuncional/>
    <ComponenteClase/>
    <Parent children={frutas}/>
    <h2>Children:</h2>
    <UsoChildren>
      <Hijo autor={"Erick Vaernet"}/>
      <Hijo autor={"Erick Vaernet"}/>
      <Hijo autor={"Erick Vaernet"}/>
    </UsoChildren>
  </React.Fragment>);
}

export default App;
