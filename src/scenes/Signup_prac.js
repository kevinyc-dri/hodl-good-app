// this is how to grab the value of an input

import React from 'react'

function Signup() {
  const [input, setInput] = useState()
  return (
    <>
    <h1>signup</h1>
    <input onChange={(event) => {
      console.log(event.target.value)
    }} />
    <input />
    </>
  )
}



export default Signup