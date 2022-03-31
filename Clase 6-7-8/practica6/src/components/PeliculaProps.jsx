import React, { Component } from 'react'

export class PeliculaProps extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
        <div>
        <h1>Titulo: {this.props.pelicula.titulo}</h1>
        <p>Año: {this.props.pelicula.año}</p>
        <p>Director: {this.props.pelicula.director}</p>
        <p>Actores: {this.props.pelicula.actores.join(", ")}</p>
        <p>puntaje: {this.props.pelicula.puntaje}</p>        
      </div>
    )
  }
}

export default PeliculaProps