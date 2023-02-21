import React from 'react'

const Trapezoid = (props) => {
    var result = ((props.a+props.b)*props.h)/2
  return (
    <h2>Area Of Trapezoid : {result}</h2>
  )
}

export default Trapezoid