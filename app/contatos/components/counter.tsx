"use client"

import { useState } from "react"

export const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
        className="bg-blue-500 text-white p-2 rounded-md"
      >
        Click me
      </button>
      <p className="text-2xl font-bold">{count}</p>
    </>
  )
}
