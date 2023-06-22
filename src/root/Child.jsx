import React, {memo} from 'react'

const Child = ({student, studentCall}) => {
    console.log('Child is rendering');
  return (
    <div>
        <h1>Child component</h1>
        <h3>Student: {student.name}</h3>
        <h3>Student: {studentCall('Abbos').name}</h3>
    </div>
  )
}

export default memo(Child);