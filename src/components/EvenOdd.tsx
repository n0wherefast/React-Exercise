import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import newArr from './utils/randomNumber'

const arr = [...newArr]

export default function EvenOdd() {
  return (
<div className='flex  flex-col border-2 border-emerald-500 w-80 h-80 m-2 p-2 rounded '>
    <h1 className='flex justify-center font-bold  text-xl m-1 text-red-500'>Even Or Odd</h1>
    <div className='flex  flex-row flex-wrap justify-center i'>

        { arr.map((item , index)  => {
            const  _type = item % 2 == 0 ? 'Even' :'Odd';
            return (
                <div className='flex flex-col justify-center border rounded font-medium border-slate-900 h-18 w-16 p-1 m-1'  key={index}>
                    < p className=' '>{item}</p>
                    < p className='  '>is</p>
                    < p className=' '>{_type}</p>
                </div>
            )
            })}
        </div>    
 </div>
  )
}
