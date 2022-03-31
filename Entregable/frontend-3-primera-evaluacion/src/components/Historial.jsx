import React, { Component } from 'react'

export class Historial extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <>
      <p>Seleccion anterior:{this.props.seleccionPrevia}</p>
      <p>Historial de opciones elegidas:</p>
      <ul>
          {/*this.props.historial.map((e,i)=><li key={i}>{e}</li>)*/}
      </ul>
      </>
    )
  }
}

export default Historial