import React, { useState } from 'react'
import AutoComplete from './AutoComplete'
import { Button } from './utils/ComponentsUtils'


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
    <div className='flex  flex-col items-center justify-center gap-1 p-4  w-1/1'>
                <h1 className=' text-3xl font-bold text-pink-600 p-4 '>Modal + Auto Complete</h1>

        <Button className='p-2 rounded-xl border-2  bg-cyan-600 hover:bg-pink-700 hover:border-2 border-cyan-600 max-w-1/2 m-2 font-semibold' type='submit' onClick={create} name={'Search Bar'}/>
        <div className ={`flex flex-row-reverse bg-slate-800 w-[320px]  rounded-xl ${openModal}`}>
          <Button className='border border-slate-900 w-1/1 p-3  justify-center rounded  bg-pink-700 hover:bg-pink-800  max-h-6 flex items-center m-2' type='submit' onClick={canc} name={'X'}/>
          <AutoComplete/>
        </div>
    </div>
  )
}

