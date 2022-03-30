import React from 'react'
import Perro from './Perro'

const Veterinaria = (props) => {
  return (
    <div style={{
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
    }}>
        <h1>Mi Veterinaria</h1>
        <ul>
            {props.perros.map((e,i)=><Perro key={i} perro={e}/>)}            
        </ul>

    </div>
  )
}

export default Veterinaria