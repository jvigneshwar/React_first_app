import React from 'react'

const Circle = (props) => {
    var results = Math.PI * props.r * props.r;
  return (
    <h2>Arear Of Circle : {results}</h2>
  )
}

export default Circle