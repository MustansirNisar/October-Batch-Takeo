import React, { useContext } from 'react'
import { courseContext } from './DataContext'

function Course() {
    const course = useContext(courseContext)
  return (
    <div style={{backgroundColor: 'orange', border: '2px solid black', padding: "20px"}}>
      <h1>Course</h1>
      <h2>Course: {course}</h2>

    </div>
  )
}

export default Course
