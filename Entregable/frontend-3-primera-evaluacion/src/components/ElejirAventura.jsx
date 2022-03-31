import React, { Component } from 'react'
import Layout from "./Layout.jsx";
import "../index.css";
import Opciones from './Opciones.jsx';
import Recordatorio from './Recordatorio.jsx';
import data from "./data.json"


export class ElejirAventura extends Component {
    
  constructor(props){
      super(props);
      this.state={
          contador:0,
          historial:[],
          seleccionPrevia:"",
      }
  }

  handleClick(boton){
      let contadorActual=this.state.contador
      if(boton=="A"){          
        this.setState((prevState)=>({
            contador: contadorActual+1,
            historial:prevState.historial,
            seleccionPrevia:prevState.seleccionPrevia,
        }))
      } 
      if(boton=="B"){          
        this.setState((prevState)=>({
            contador: contadorActual+2,
            historial:prevState.historial,
            seleccionPrevia:prevState.seleccionPrevia,
        }))
      } 
  }

  render() {
    return (
      <Layout>
        <h1 className={"historia"}>{data[this.state.contador].historia}</h1>
        <Opciones
            handleClick={(e)=>this.handleClick(e)}
            opcionA={data[this.state.contador].opciones.a}
            opcionB={data[this.state.contador].opciones.b}
        />
        <Recordatorio/>
      </Layout>
    )
  }
}

export default ElejirAventura