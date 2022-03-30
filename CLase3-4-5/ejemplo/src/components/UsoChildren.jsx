import React from 'react'

const UsoChildren = (props) => {
  return (
    <div style={{
        borderStyle:'solid',
        borderColor:'black',
        borderWidth:'2px',
        textAlign:"center",
        padding:"2",
        margin:"2",
    }}>
        {props.children}
    </div>
  )
}

export default UsoChildren