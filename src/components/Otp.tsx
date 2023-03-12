import React, { useState } from 'react'
import {Button}from '@material-tailwind/react';


interface Pass {
  pass:string
}

 function Otp (props:Pass) {
    const passToCheck = props.pass
    const [value,setVal] = useState<string>()
    const [isCheck,setIscheck] = useState<Boolean>(false)
    const [modal,setModal] = useState<boolean>(false)
   

const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value
    setVal(input)
   
}
const check = (e:React.FormEvent) =>{
  e.preventDefault()
  if(value === passToCheck) {
   setIscheck(true)
  }else{
    setIscheck(false)
  }
  setModal(true)
  
}
  return (
    <div className='flex flex-col'>
         <h1 className=' text-3xl font-bold text-cyan-500 p-2 '>Otp</h1>
         <div className='flex items-center justify-center' >  
            <input type={'text'} className='rounded-xl m-w1/1 h-1/1 bg-white flex justify-center m-4 pl-2 ' onChange={handleChange}/>
             <Button type='submit' className={`w-16 h-6 m-2 border-2 rounded-xl border-cyan-600 bg-cyan-600 hover:bg-pink-600 flex justify-center items-center font-semibold`} onClick={check} children={'Check'}/>
         </div>
         {modal? 
              <div>
             { isCheck? <div className='flex items-center justify-center font-medium rounded-xl text-xl bg-green-500 p-2 m-2'> Password Corretta</div> : <div className='flex items-center justify-center rounded-xl text-xl font-medium bg-red-600 p-2 m-2'>Password Errata</div>}
              </div>
                : null}
    </div>
  )
}
export default React.memo(Otp)
