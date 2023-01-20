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
    <div className='flex flex-col justify-center items-center w-80 h-80 border-2 p-2 m-2 border-slate-900 rounded'>
            <h1 className=' text-xl font-bold text-red-500'>Format Dates</h1>

            <div className='flex flex-row '> 
             
                    <div className=' flex flex-col border-2 rounded border-slate-900 m-2 '> 
                            <h1 className='border-2 border-slate-600 m-2 flex justify-center font-medium rounded'> UTC</h1>
                                {options.map((item:any,index:number) =>(
                                    <div className=' m-2 p-2 ' key={index}>
                                    <h2 className='  font-semibold'>{today.toLocaleString(undefined,item)}</h2>
                                    </div>
                        ))}         
                    </div>

                    <div className=' flex flex-col m-2 border-2 rounded border-slate-900'> 
                            <h1 className='border border-slate-900 m-2 flex justify-center font-medium rounded'>en-US </h1>
                                {options.map((item:any,index:number) =>(
                                    <div className=' m-2 p-2 ' key={index}>
                                    <h2 className=' font-semibold'>{today.toLocaleString('en-US',item)}</h2>
                                    </div>
                        ))}         
                    </div>
            </div>
    </div>
  )
}
