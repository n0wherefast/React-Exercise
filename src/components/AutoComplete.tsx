import React, {useState } from 'react'
import {Input } from './utils/ComponentsUtils'


export default function AutoComplete() {
    let placeholder = 'Chi Cerchi?';
    let  [risultati,setRisultati] = useState<React.ReactNode>() 
    const nomi = [ 
    "andrea",
    "anna",
    "marco",
    "luca",
    "giovanni",
    "giovanna",
    "chiara",
    "clara",
    "dino",
    "dinosauro",
    "elisa"] ;
    const [value,setVal] = useState<string>('');
    const isEmpty = (value === '') ? 'hidden' : '';

    const seleziona = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        setVal(e.currentTarget.textContent!);
        setRisultati("");
     };

    const autoComplete = (e:React.ChangeEvent<HTMLInputElement>) => {
     setVal(e.target.value)
     if (e.target.value === '') return []
     let matchingNames = nomi.filter(nome => nome.startsWith(e.target.value));
     setRisultati(matchingNames.map((nome,index)=>(
     <li className='list-none hover:bg-slate-300' onClick={seleziona} key={index}>{nome}</li>
     )))  
    }

  


  return (
    <div className='flex  flex-col justify-center p-3 rounded max-w-lg h-1/1 '>
        <h1 className=' text-2xl font-bold text-cyan-500 p-2 '>Auto Complete</h1>
         <section className='flex flex-col justify-center   p-2 '>
            <Input className='flex justify-center rounded  border-2 p-2' type="text" value={value} onChange={autoComplete}  placeholder={placeholder} />
            <div className={`bg-white p-2 rounded ${isEmpty}`}><ul>{risultati}</ul></div>
         </section>
          
    </div>
   
  )
}
