import React, { Component } from 'react'
import "../index.css"

export class Recordatorio extends Component {
    
  render() {
    return (
        <div className='recordatorio'>
            <h3>Selección anterior: {this.props.seleccionAnterior}</h3>
            <h4>Historial de opciones elegidas:</h4>
            <ul>
                {this.props.historial.map((e,i,a)=>{
                if(i!==a.length-1) return <li key={i}>{e}</li>
                else return "";
                })}
            </ul>
        </div>
    )
  }
}

export default Recordatorio