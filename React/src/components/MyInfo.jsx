import React from 'react'

function MyInfo({children, color}) {
  return (
    <div style={{color: color, backgroundColor: "aqua", border: "2px solid black", margin: "10px"}} >
      {children}

    </div>
  )
}

export default MyInfo
