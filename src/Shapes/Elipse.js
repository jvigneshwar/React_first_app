import React from 'react'

const Elipse = (props) => {
    var result = Math.PI * props.a * props.b;
  return (
    <h2>Area Of Elipse : {result}</h2>
  )
}

export default Elipse