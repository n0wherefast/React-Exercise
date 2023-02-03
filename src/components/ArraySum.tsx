import React, { ChangeEvent, useState } from 'react'



export default function ArraySum() {
     const arr:number[] = [] ;
     let sum:number = 0
     const [arrElem, setArrElem] = useState<number>(10)
     const [range, setRange] = useState<number>(100)

    const handleChangeElem = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setArrElem(parseInt(e.target!.value) )
     }
    const handleChangeRange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setRange(parseInt(e.target!.value) )
     }
     


 
  const element = arrElem
  const max = range
  
  for(let i = 0 ; i<element! ; i++){
      arr.push(Math.floor(Math.random()*max!))
  }
  

  return (
    <div className='border-2 border-slate-900 m-2 rounded h-80 w-90'>
      <h1 className='flex justify-center font-bold  text-xl m-1 text-red-500'>Array Sum</h1>
        <form className=' flex justify-center flex-col border-2 border-slate-900 rounded m-2 '>
          <div className='flex flex-row'>
                 <div className='flex flex-col'>
                    <h2 className='flex justify-center font-medium  p-1 m-1'> Enter Array Element</h2>
                    <input className='  m-2 h-8 border border-slate-900 rounded' type="number" onChange={handleChangeElem} defaultValue={arrElem} />
                 </div>
                 <div className='flex flex-col'>
                    <h2 className='flex justify-center font-medium  p-1 m-1'> Range Max</h2>
                    <input className='  m-2 h-8 border border-slate-900 rounded' type="number" onChange={handleChangeRange} defaultValue={range} />
                 </div>  
          </div>
        </form>
   <div className=' flex flex-row border-2 border-slate-900 rounded  m-2'>
       <h3 className='m-2 text-lg font-medium'>Original array</h3>
       <div className=' flex flex-row border-2 border-slate-900 rounded  m-2 p-2'>
            {arr.map((item,index) => {
             return (
             
                <div className='p-1' key={index}>{item}</div>
                 )
            })}
      </div>
  </div>  
  <div className=' flex flex-row border-2 border-slate-900 rounded  m-2'>
       <h3 className='m-2 text-lg font-medium'>Result</h3>
       <div className=' flex flex-row border-2 border-slate-900 rounded  m-2 p-2'>
            {arr.map((item,index) => {
                sum += item 
             return (
                <div className='p-1' key={index}>{sum}</div>
                 )
            })}
      </div>
  </div>
    </div>
  )
}
