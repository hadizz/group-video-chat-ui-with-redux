import React from 'react'

const CallBox = (props) => {
  return (
      <div className="p-8 bordered radius-8" style={{ backgroundColor: "red" }}>{props.person.name}</div>
  )
}

export default CallBox
