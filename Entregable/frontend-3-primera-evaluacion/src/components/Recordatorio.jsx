import React, { Component } from 'react'
import "../index.css"

export class Recordatorio extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
        <div className='recordatorio'>
            <h3>Seleccion anterior:{this.props.seleccionPrevia}</h3>
            <h4>Historial de opciones elegidas:</h4>
            <ul>
                {/*this.props.historial.map((e,i)=><li key={i}>{e}</li>)*/}
            </ul>
        </div>
    )
  }
}

export default Recordatorio