import React, {  useState } from 'react'

export default function DateSpread() {

const [date1, setDate1] = useState<any>()
const [date2, setDate2] = useState<any>()
const [result,setResult] = useState<number> ()
     const HandleDate1 = (e:any) =>{
         setDate1(e.target!.value)
     }

     const HandleDate2 = (e:any) =>{
         setDate2(e.target!.value)
     }
 
     const comparison = () =>{
        const data1M:any = new Date(date1).getTime()
        const data2M:any = new Date(date2).getTime()
        if(date2! > date1!){
            const diff = data2M - data1M
            const res = diff / (1000 * 60 * 60 * 24) 
            setResult(res)
        }           

     }
     

  return (
    <div className='flex  flex-col border-2 border-slate-900 rounded m-2'>
        <h1 className='flex justify-center font-bold  text-xl m-1 text-red-500'>Date Spread</h1>
       <form className='flex' action="Date-Spread">
            <input className=' m-2 h-8 border border-slate-900 rounded' type="date" onChange={HandleDate1} />
            <input className=' m-2 h-8 border border-slate-900 rounded' type="date"  onChange={HandleDate2} />
        </form>
        <button className='border-2 ml-10 mr-10 border-slate-900 rounded hover:bg-sky-700 transition text-lg font-medium' onClick={comparison} >Calculate</button> 
        <div className='flex justify-center border-2 border-slate-900 rounded  m-2 p-2 h-40 text-lg font-medium flex-col'>
            <p className='flex justify-center items-center  text-3xl'>Result</p>
            <div className='flex justify-center items-center flex-col'>
                <p className='flex justify-center items-center border-2  border-slate-900 rounded h-14 w-14 text-4xl font-bold'>{result}</p>
                <p className='flex justify-center mt-1 mb-2 text-3xl font-bold'>Days</p>
            </div>
            
        </div>   
    </div>
  )
}








