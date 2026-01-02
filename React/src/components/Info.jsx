import React from 'react'

function Info({name, age, country}) {
  return (
    <>
      <h1>This is the Info Section: </h1>
      <h4>Name: {name}</h4>
      <h4>Age: {age}</h4>
      <h4>Country: {country}</h4>
    </>
  )
}

export default Info
