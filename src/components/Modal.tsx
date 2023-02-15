import React, { useState } from 'react'
import AutoComplete from './AutoComplete'
export default function Modal() {
    const [modal,setModal] = useState (false)
    const create = () => {
        setModal(true)
    }
    const canc = () => {
        setModal(false)
    }
    const openModal = (modal === false) ? 'hidden' : null
  return (
    <div className='flex  flex-col items-center justify-center gap-1 p-2 m-2 max-w-lg  border-2 border-black rounded'>
                <h1 className=' text-3xl font-bold text-red-500 p-2 '>Modal + Auto Complete</h1>

        <button className='border border-slate-900 p-1 rounded  bg-emerald-600 hover:bg-emerald-800  max-w-1/2  m-2' type='submit' onClick={create}>Search Bar</button>
        <div className ={`flex border-2 border-black  ${openModal}`}>
             <AutoComplete/>
             <button className='border border-slate-900 p-4  rounded  bg-red-700 hover:bg-red-800  max-h-6 flex items-center m-2' type='submit' onClick={canc}>X</button>
        </div>
    </div>
  )
}
