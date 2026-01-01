import React from 'react'

function Developer({details:{name, id, country}}) {
  return (
    <div>
      {/* <h1>List of Developers: </h1> */}
      <h3>Devloper:</h3>
      {/* <h5>Name: {details.name}</h5>
      <h5>Id: {details.id}</h5>
      <h5>Country: {details.country}</h5> */}
        <h5>Name: {name}</h5>
        <h5>Id: {id}</h5>
        <h5>Country: {country}</h5>
    </div>
  )
}

export default Developer
