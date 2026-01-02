import React, { useEffect } from 'react'

function Lifecycle({count}) {
    useEffect(()=>{
        console.log("Mounting Phase")
    }, [])
    
    useEffect(()=>{
        console.log("On Updating")
    },[count])

    useEffect(()=>{
        return ()=>{
            console.log("Cleanup before Unmounting")
        }
    })
  return (
    <div>
      <h1>Inside the Lifecycle Component</h1>
      <h3>Count: {count}</h3>
    </div>
  )
}

export default Lifecycle
