import React, { useState } from 'react'

function Counter() {
    let [count,  setCount] = useState(0)
    let [dec, setDec] = useState(100)
    // let update = ()=>{
    //     setCount(count+1)
    // }
  return (
    <div>
      <h2>{count}</h2> <h2>{dec}</h2>
      <button onClick={()=>setCount(count+1)}>UpCount</button>
      <button onClick={()=>setDec(dec-1)}>DownCount</button>
    </div>
  )
}

export default Counter
