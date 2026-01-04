import React from 'react'
import Department from './Department'

function University() {
  return (
    <div style={{backgroundColor: 'violet', border: '2px solid black', padding: "20px"}}>
      <h1>University</h1>
      <Department/>
    </div>
  )
}

export default University
