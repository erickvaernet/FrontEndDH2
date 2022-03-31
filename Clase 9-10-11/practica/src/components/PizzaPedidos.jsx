import React, { Component } from 'react'
import Pedido from './Pedido';

export class PizzaPedidos extends Component {
    constructor(props){
        super(props);
        this.state={
            pedido:false
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                pedido:true
            })
        }, 2000);
        console.log("Esperando tu orden..")
    }

    handleButton(){
        this.setState({
            pedido:false
        })
    }

  render() {
    return (
    <>
      <h2>TU pedido:{this.state.pedido && <Pedido ingredientes={"tomate"}/>}</h2>      
      <button onClick={()=>this.handleButton()}>Cancelar Pedido</button>
    </>
    )
  }
}

export default PizzaPedidos