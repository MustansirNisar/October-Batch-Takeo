import React, { useState } from 'react'

function Skills() {
    let[skill, setSkill] = useState([])
    let getSkill = (event)=>{
        console.log(event.target.value, event.target.checked)

         if(event.target.checked){
            setSkill([...skill, event.target.value])
    }
         else{
            setSkill([...skill.filter((item)=>item!=event.target.value)])
         }
    }
   
  return (
    <div>
      <h2>Select your Skills</h2>
      <label htmlFor="js">JavaScript</label>
      <input type="checkbox" onChange={getSkill} value="JavaScript" id='js' />
      <br /><br />
       <label htmlFor="py">Python</label>
      <input type="checkbox" onChange={getSkill} value="Python" id='py' />
      <br /><br />
       <label htmlFor="java">Java</label>
      <input type="checkbox" onChange={getSkill} value="Java" id='java' />
      <br /><br />
       <label htmlFor="c++">C++</label>
      <input type="checkbox" onChange={getSkill} value="C++" id='c++' />
      <h2>{skill.toString()}</h2>
    </div>
  )
}

export default Skills
