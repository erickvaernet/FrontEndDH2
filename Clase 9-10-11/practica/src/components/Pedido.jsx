import React, { Component } from 'react'

export class Pedido extends Component {
    componentDidMount(){
        console.log("El Componente se actualizo!")
    }
    componentWillUnmount(){
        console.log("Orden Cancelada")
    }
  render() {
    return (
      <>
      Pizza {this.props.ingredientes}
      </>
    )
  }
}

export default Pedido