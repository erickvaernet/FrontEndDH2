
import './App.css';
import React from 'react';
import ComponenteFuncional from './components/ComponenteFuncional';
import ComponenteClase from './components/ComponenteClase';
import Parent from './components/Parent';
import UsoChildren from './components/UsoChildren';
import Hijo from './components/Hijo';
import Veterinaria from './components/Veterinaria';

const frutas=["banana", "manzana", "naranja","anana","pera"]
const perros=[{
  nombre:"Roco",
  edad:"3 años",
  sexo:"masculino",
  raza:"Doverman",
  tamaño:"90cm",
},{
  nombre:"Roco2",
  edad:"32 años",
  sexo:"femenino",
  raza:"Doverman",
  tamaño:"95cm",
}
]

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
    <Veterinaria perros={perros}/>
  </React.Fragment>);
}

export default App;
