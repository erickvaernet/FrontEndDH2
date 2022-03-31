import React, { Component } from 'react'
import "../index.css"

export class Opciones extends Component {
    constructor(props){
        super(props)    
    }
  render() {
    return (
      <div className='opciones'>
          <div className='opcion'>
            <button className="botones" onClick={()=>this.props.handleClick("B")}>A</button>
            <h2>{this.props.opcionA}</h2>
          </div> 
          <div className='opcion'>
            <button className="botones" onClick={()=>this.props.handleClick("A")}>B</button>
            <h2>{this.props.opcionB}</h2>
          </div> 
      </div>
    )
  }
}

export default Opciones