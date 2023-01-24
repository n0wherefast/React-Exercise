import React, { useEffect, useState } from 'react'

export default function DateSpread() {

const [date1, setDate1] = useState()
const [date2, setDate2] = useState()

     const HandleDate1 = (e:any) =>{
         setDate1(e.target!.value)
     }

     const HandleDate2 = (e:any) =>{
         setDate2(e.target!.value)
     }
 
     const comparison = () =>{
        const tryn = date1! - date2!
        if(date1! < date2!){
            console.log('ok is working!')
            console.log(tryn)
        }
     }
     
useEffect(() => {

  console.log(date1,date2)
},[date1,date2])

  return (
    <div className='flex  flex-col border-2 border-slate-900 rounded m-2'>
       <form className='flex' action="Date-Spread">
            <input className=' m-2 h-8 border border-slate-900 rounded' type="date" onChange={HandleDate1} />
            <input className=' m-2 h-8 border border-slate-900 rounded' type="date"  onChange={HandleDate2} />
        </form>
        <button className='border-2 ml-10 mr-10 border-slate-900 rounded hover:bg-sky-700 transition text-lg font-medium' onClick={comparison} >Calculate</button> 
        <div className='flex justify-center border-2 border-slate-900 rounded  m-2 p-2 h-40 text-lg font-medium flex-col'>
            <p className='ml-28 '>Result</p>
            <p className='ml-28 mt-1 mb-1 text-5xl font-bold'>12</p>
            <p className='ml-28 mt-1 mb-2 text-3xl font-bold'>Days</p>
        </div>   
    </div>
  )
}
