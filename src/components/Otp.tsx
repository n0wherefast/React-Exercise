import React, { useState } from 'react'

export default function Otp(props:any) {
    const passToCheck = props.pass
    const [value,setVal] = useState<string>()
    const [isCheck,setIscheck] = useState<Boolean>(false)
    const [modal,setModal] = useState<boolean>(false)
    console.log(passToCheck)

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
         <h1 className=' text-3xl font-bold text-red-500 p-2 '>Otp</h1>
         <div className='flex items-center justify-center' >  
            <input type={'text'} className='border-2 border-black m-w1/1 h-1/2 bg-white flex justify-center m-4 pl-2 ' onChange={handleChange}></input>
             <button type='submit' className={`w-16 h-6 m-2 border-2 rounded border-black bg-emerald-500 hover:bg-emerald-700 flex justify-center items-center`} onClick={check}>Check</button>      
         </div>
         {modal? 
              <div>
             { isCheck? <div className='flex items-center justify-center font-medium bg-emerald-400 p-2 m-2'> Password Corretta</div> : <div className='flex items-center justify-center font-medium bg-red-500 p-2 m-2'>Password Errata</div>}
              </div>
                : null}
        
        
       
    </div>
  )
}
