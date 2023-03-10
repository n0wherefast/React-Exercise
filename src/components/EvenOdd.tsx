import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import newArr from './utils/randomNumber'

const arr = [...newArr]

export default function EvenOdd() {
  return (
<div className='flex flex-col w-80  m-2 p-2 md:border-2 md:border-slate-800 rounded-xl '>
    <h1 className='flex justify-center font-bold  text-3xl m-2 text-pink-600'>Even Or Odd</h1>
    <div className='flex  flex-row flex-wrap justify-center i'>

        { arr.map((item , index)  => {
            const  _type = item % 2 === 0 ? 'Even' :'Odd';
            return (
                <div className='flex flex-col justify-center rounded-xl font-medium bg-slate-800 h-18 w-16 p-1 m-1 text-slate-200'  key={index}>
                    < p className=' flex justify-center '>{item}</p>
                    < p className=' flex justify-center  '>is</p>
                    < p className=' flex justify-center '>{_type}</p>
                </div>
            )
            })}
        </div>    
 </div>
  )
}
