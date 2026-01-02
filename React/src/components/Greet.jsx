import React from 'react'

function Greet({fNames}) {
    const[first, second, third, fourth, fifth] = fNames
  return (
    <>
      <h1>This is the Greet Component</h1>
      {/* <h3>This is the first developer: {props.fNames[0]}</h3>
      <h3>This is the second developer: {props.fNames[1]}</h3>
      <h3>This is the third developer: {props.fNames[2]}</h3> */}
      {/* <h3>This is the first developer: {fNames[0]}</h3> */}
      <h3>This is the first developer:  {first}</h3>
      <h3>This is the first developer:  {second}</h3>
      <h3>This is the first developer:  {third}</h3>
    </>
  )
}

export default Greet
