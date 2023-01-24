import React from 'react'

export default function Try() {

const arr:number[] = [] ;
const element = 12
const max = 100

for(let i = 0 ; i<element ; i++){
    arr.push(Math.floor(Math.random()*max))
}

const newArr = arr

  return (
    <div>
      {newArr}
    </div>
  )
}
