import React from 'react'

const Hijo = (props) => {
  return (
    <p style={{
        fontWeight:"bold",
        textDecoration:"underline",
        fontSize:"5",
        fontStyle:"italic"        
    }}
    >- {props.autor}</p>
  )
}

export default Hijo