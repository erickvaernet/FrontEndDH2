import React, { Component } from 'react'
import {useState} from 'react'
import PeliculaProps from './PeliculaProps';
import PlantillaPelicula from './PlantillaPelicula';
import {peliculas1} from "../data/peliculas1";
import {peliculas2} from "../data/peliculas2";

export class PropsVsState extends Component {
    constructor(props){
        super(props)
        this.state={
            peliculas:peliculas1
        }
    }
    cambiarPeliculla(){
        this.setState((s)=>({
            peliculas:peliculas2
        }))
    }

  render() {
    return (
      <>
      <p style={{fontSize:"24px",textDecoration:"underline",fontWeight:"bold"}}>Con State:</p>
      {this.state.peliculas.map((p,i)=><PlantillaPelicula key={i} pelicula={p}/>)}
      
      <p style={{fontSize:"24px",textDecoration:"underline",fontWeight:"bold"}}>Con Props:</p>
      {this.state.peliculas.map((p,i)=><PeliculaProps key={i} pelicula={p}/>)}
      
      <button onClick={()=>this.cambiarPeliculla()}>Presiona para re-renderizar</button>
      </>
    )
  }
}

export default PropsVsState