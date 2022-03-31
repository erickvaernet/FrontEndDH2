import React from 'react';
import './App.css';
import PeliculaProps from './components/PeliculaProps';
import PlantillaPelicula from './components/PlantillaPelicula';
import {peliculas} from "./data/peliculas";

function App() {
  return (
    <React.Fragment>
      {peliculas.map((p,i)=><PlantillaPelicula key={i} pelicula={p}/>)}
      <h1>con Props:</h1>
      {peliculas.map((p,i)=><PeliculaProps key={i} pelicula={p}/>)}
    </React.Fragment>
  );
}

export default App;
