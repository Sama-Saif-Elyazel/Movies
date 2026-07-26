import React, { useState } from 'react'

export default function Task2() {
  const [message, setMessage] = useState("")
  const [count, setCount] = useState(0)
  const [Btn, setBtn] = useState("click me")

  function show() {
    setCount(count + 1)
    if (count % 2 !== 0) {
      setMessage("")
      setBtn("click me!")
    } else {
      setMessage("You clicked me more than twice!")
      setBtn("click me again😂😂😂!")
    }
  }
  return (
    <>
      <div className='bg-cyan-200 w-full h-30 flex flex-col items-center justify-center gap-5'>
        <button onClick={show} className='bg-pink-500 text-white px-4 py-2 rounded'>
          {Btn}
        </button>
        <p className='text-black'>{message}</p>
      </div>

      <div></div>
    </>
  )
}
