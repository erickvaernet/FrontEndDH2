import React from 'react'
import Child from './Child'

const Parent = ({children}) => {
  return (
    <div>
        <h2>Lista de Frutas</h2>
        <ul>
            {children.map((e,i)=><Child element={e} key={i}/>)}
        </ul>
    </div>
  )
}

export default Parent