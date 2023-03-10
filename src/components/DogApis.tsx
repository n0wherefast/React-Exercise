import React, { useState } from 'react'
import useFetch from './utils/useFetch'




export default function DogApis() {
    let [breed,setBreed] = useState('affenpinscher')
    const {data:breeds, loading} = useFetch('https://dog.ceo/api/breeds/list/all')
    const {data:image} = useFetch(`https://dog.ceo/api/breed/${breed}/images`)
    const check = breed?  image :   null 
  
    const obj = breeds
    

   const HandleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
     setBreed(e.target.value)
   } 
    

return loading ? (
    <div>loading...</div>
    ) : (
    
    <div className='rounded-xl w-1/1 h-1/2  m-2 bg-slate-800 flex flex-col'>
       <h1 className='flex justify-between items-center  text-5xl font-bold text-pink-600 p-3'>Dog's From API</h1>
       <select className='w-1/3 m-4' name="" id="" onChange={()=>HandleChange}>
            {Object.keys(obj).map((key,index) => {
              return <option key={index} value={key}>{key}</option>;
             })} 
       </select>
       <div className='flex flex-wrap gap-5 items-center justify-center'>{Object.values(check).map((img:any,index:number)=>{
            check.sort(()=>Math.random() - 0.5)
            return <div key={index} className='m-2'><img className='w-[100px] h-[100px]  md:w-[200px] md:h-[200px] rounded-xl' alt='dog pics' src={img}/></div>
        })}
       </div>
    </div>
  )
}
