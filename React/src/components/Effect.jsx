import React, { useEffect } from 'react'

function Effect({count, data}) {
    let chekProp = ()=>{
        console.log("I was called inside the Effect Component")
    }

    useEffect(()=>{
    chekProp();

    }, [data])
  return (
    <div>
      <h2>Count: {count}</h2>
      <h2>Data: {data}</h2>
    </div>
  )
}

export default Effect
