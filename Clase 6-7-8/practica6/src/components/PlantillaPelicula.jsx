import React, { Component } from 'react'

export class PlantillaPelicula extends Component {
    constructor(props){
        super(props);
        this.state={
            titulo:"",
            año:0,
            director:"",
            actores:[],
            puntaje:0
        };
    }

    componentDidMount(){
        this.setState({...this.props.pelicula});
    }

  render() {
    return (
      <div>
        <h1>Titulo: {this.state.titulo}</h1>
        <p>Año: {this.state.año}</p>
        <p>Director: {this.state.director}</p>
        <p>Actores: {this.state.actores.join(", ")}</p>
        <p>puntaje: {this.state.puntaje}</p>        
      </div>
    )
  }
}

export default PlantillaPelicula