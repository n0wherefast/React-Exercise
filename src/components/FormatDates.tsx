import React from 'react'

// docs toLocaleString()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString

interface OptionsDate {
    year?:'numeric', 
    month?:'2-digit',
    day?:'2-digit',
    weekday?:'long' | 'short',
    hour?:'2-digit',
    minute?:'2-digit',
    second?:'2-digit',
    hour12?:boolean
}
const today:Date =  new Date()
const options:OptionsDate[] = [ 
    {
        year:"numeric",
        month:"2-digit",
        day:"2-digit",
        weekday:"long"
    },

    {
        hour:"2-digit",
        minute:"2-digit",
        second:"2-digit",
        hour12: true
    }, 

    {
        year:"numeric",
        month:"2-digit",
        day:"2-digit",
        weekday:"short"
    }
]

export default function FormatDates() {
  return (
<div className='flex flex-col justify-center items-center w-100 h-100  p-2 m-2'>
            <h1 className='text-3xl font-bold text-pink-600'>Format Dates</h1>

            <div className='flex flex-row '> 
             
                    <div className=' flex flex-col rounded-xl bg-slate-800 m-2 '> 
                            <h1 className='border-2 border-slate-200 m-2 flex justify-center text-slate-200 font-medium rounded-xl'> UTC</h1>
                                {options.map((item:OptionsDate,index:number) =>(
                                    <div className=' m-2 p-2 ' key={index}>
                                    <p className='text-slate-200 font-semibold'>{today.toLocaleString(undefined,item)}</p>
                                    </div>
                        ))}         
                    </div>

                    <div className=' flex flex-col rounded-xl bg-slate-800 m-2 '> 
                            <h1 className='border-2 border-slate-200 m-2 flex justify-center text-slate-200 font-medium rounded-xl'>en-US </h1>
                                {options.map((item:OptionsDate,index:number) =>(
                                    <div className=' m-2 p-2 ' key={index}>
                                    <p className='text-slate-200 font-semibold '>{today.toLocaleString('en-US',item)}</p>
                                    </div>
                        ))}         
                    </div>
            </div>
    </div>
  )
}
