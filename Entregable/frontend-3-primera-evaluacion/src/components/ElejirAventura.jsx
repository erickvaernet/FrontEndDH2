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
    if(contadorActual<7){  
      if(boton==="A"){          
        this.setState((prevState)=>({          
            historial: [...prevState.historial,"A"],
            contador: contadorActual===0? contadorActual+1:
                      contadorActual%2===0? contadorActual+1: contadorActual+2,
            seleccionPrevia:"A",
        }))
      } 
      else if(boton==="B"){          
        this.setState((prevState)=>({
            historial: [...prevState.historial,"B"],
            contador: contadorActual===0? contadorActual+2:
                      contadorActual%2===0? contadorActual+2: contadorActual+3,            
            seleccionPrevia:"B",
        }))
      } 
    }
    else{
      alert("Fin.")
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
        <Recordatorio seleccionAnterior={this.state.seleccionPrevia} historial={this.state.historial}/>
      </Layout>
    )
  }
}

export default ElejirAventura