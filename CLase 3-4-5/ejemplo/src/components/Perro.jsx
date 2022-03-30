import React from 'react'

const Perro = ({perro}) => {
  return (
      <React.Fragment>
      <h2>Nombre: {perro.nombre}</h2>
      <ul>
          <li>{perro.edad}</li>
          <li>{perro.sexo}</li>
          <li>{perro.raza}</li>
          <li>{perro.tamaño}</li>
      </ul>
      </React.Fragment>
  )
}

export default Perro