import React, {  useState } from 'react'
import { Button,Input } from './utils/ComponentsUtils'

export default function DateSpread() {

const [date1, setDate1] = useState<string>('')
const [date2, setDate2] = useState<string>('')
const [result,setResult] = useState<number> (0)

     const HandleDate1 = (e:React.ChangeEvent<HTMLInputElement>) =>{
         setDate1(e.target!.value)
     }

     const HandleDate2 = (e:React.ChangeEvent<HTMLInputElement>) =>{
         setDate2(e.target!.value)
     }
 
     const comparison = () =>{
        const data1M = new Date(date1).getTime()
        const data2M:number = new Date(date2).getTime()
        if(date2! > date1!){
            const diff = data2M - data1M
            const res = diff / (1000 * 60 * 60 * 24) 
            setResult(res)
        }           

     }
     

  return (
    <div className='flex  flex-col md:border-2 md:border-slate-800 rounded-xl m-2 min-w-lg h-80 '>
        <h1 className='flex justify-center font-bold  text-4xl m-1 text-pink-600'>Date Spread</h1>
       <form className='flex' action="Date-Spread">
            <Input className=' m-2 h-8 border border-slate-900 rounded' type="date" onChange={HandleDate1} />
            <Input className=' m-2 h-8 border border-slate-900 rounded' type="date" onChange={HandleDate2} />
        </form>
        <Button className=' ml-10 mr-10 border-2 border-cyan-500 rounded-xl bg-cyan-500 hover:bg-pink-600 text-xl font-semibold transition' onClick={comparison} name={'Calculate'} />
        <div className='flex justify-center bg-slate-800 rounded-xl  m-2 p-2 h-40 text-lg font-medium flex-col'>
            <p className='flex justify-center items-center text-slate-200  text-3xl'>Result</p>
            <div className='flex justify-center items-center flex-col'>
                <p className='flex justify-center items-center border-2  border-slate-200 rounded h-14 w-1/2 text-4xl font-bold text-slate-200'>{result}</p>
                <p className='flex justify-center mt-1 mb-2 text-3xl font-bold text-slate-200'>Days</p>
            </div>
            
        </div>   
    </div>
  )
}








