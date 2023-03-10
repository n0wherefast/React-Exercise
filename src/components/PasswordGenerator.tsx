import React, {useState } from 'react'
import Otp from './Otp'
import copyimg from '../copy.svg'
import {Button }from '@material-tailwind/react';


export default function PasswordGenerator() {
    const [valLenght,setLeVal] = useState<number> ()
    const [password,setPassord] = useState<string>('Nuova Password')
    const numElem  = Math.floor(Math.random()*valLenght!+5)
    const [spec,setspec] = useState<string[]>()
    const [maiusc,setMaiusc] = useState<string[]>()
    let cursor = 'cursor-not-allowed';
    let disabledButton  = true
   
    const checkValue = () =>{
        if (valLenght! > 3){
            disabledButton = false
            cursor = ''
        }
    }
    checkValue()


const LenghtVal = (e:React.ChangeEvent<HTMLInputElement>) => {
    const toNum = parseInt(e.target.value)
       setLeVal(toNum)
    
    }

const carSpec =  (e:React.ChangeEvent<HTMLInputElement>) =>{
    const caratteriSpeciali = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~)"
        const toArr = caratteriSpeciali.split('')
        const pass:string[] = []

    toArr.map(() => {
        let i = caratteriSpeciali.charAt( Math.floor(Math.random()*caratteriSpeciali.length))
          return pass.push(i)
        })
      let arr = pass.slice(0,numElem)
    const checkSpec = e.target.checked ? arr: null ;
    setspec(checkSpec!)
   }

const carMaiusc =  (e:React.ChangeEvent<HTMLInputElement>) =>{
    const caratteriMaiuscoli = "ABCDEFGHIJKLMNOPQRSTUVWXY"
        const toArr = caratteriMaiuscoli.split('')
        const pass:string[] = []

    toArr.map(() => {
        let i = caratteriMaiuscoli.charAt( Math.floor(Math.random()*caratteriMaiuscoli.length))
          return pass.push(i)
        })
      let arr = pass.slice(0,numElem)
 
    const checkMaiusc = e.target.checked ? arr: null  ;
    setMaiusc(checkMaiusc!)
   }

    const passwordGen = () => {
        const minuscoli = "abcdefghijklmnopqrstuvwxyz"
        const numeri = "0123456789"
        const pass:string[] = []
       
       const isMaiusc = () => maiusc?    pass.push(...maiusc!): null ;
          isMaiusc()
      
        for (let i =0 ; i<numElem! ; i++ ){
            let Smin = minuscoli.charAt( Math.floor(Math.random()*minuscoli.length))
            pass.push(Smin)
                      
        }
       const isSpecial = () => spec?   pass.push(...spec!)  :null ;
           isSpecial()
         
        for (let i =0 ; i<numElem! ; i++ ){
            let Snum = numeri.charAt( Math.floor(Math.random()*numeri.length))
            pass.push(Snum)          
        }

         pass.sort(() => Math.random() -0.5)
         pass.length = valLenght!
         const newPass = pass.join('')
         setPassord(newPass)       
    } 

    const generate = (e:React.FormEvent) =>{
        e.preventDefault()
       passwordGen()  
    }


    const setOutput = ():string => {
        let output:string = password
        return output
    }
const copy = (text:string) =>{
   navigator.clipboard?.writeText &&
   navigator.clipboard.writeText(text);
}



  return (
    <div className=' m-w-1/1 min-h-80 h-1/2  m-4 md:border-2 md:border-slate-800 rounded-xl'>
      <h1 className=' text-3xl font-bold text-pink-600 p-2 '>Password Generator</h1>
      <form action="" className='flex gap-4 m-2 flex-col text-xl font-semibold'>
        <label htmlFor="" className='flex flex-row j gap-4'>
        <input type="number" className='w-10 ' min={4} onChange={LenghtVal}  />Lunghezza
        </label>        
        <label htmlFor="" className='flex gap-4'>
        <input type="checkbox" onChange={carSpec} disabled={disabledButton}  />Caratteri Speciali
        </label>        
        <label htmlFor="" className='flex gap-4'>
        <input type="checkbox" onChange={carMaiusc} disabled={disabledButton}  />Maiuscolo
        </label>  
        <div className='flex gap-2 '>
            <Button type='submit' className={`w-20 h-10 border-2 rounded-xl border-cyan-600 bg-cyan-600 hover:bg-pink-600 ${cursor}`} onClick={generate} disabled={disabledButton } children={'Genera'} />      
            <button type='button' className={`max-w-10 max-h-10 border-2 p-2 rounded-xl border-pink-600 bg-pink-600 hover:bg-cyan-600 flex items-center`} onClick={()=>copy(setOutput())}><img src={copyimg} alt="" /> </button>      
        </div>
        
      </form>
      <div className='rounded-xl m-w1/1 h-1/2 bg-slate-200 flex justify-center m-4 font-semibold '>{setOutput()}</div>
      <Otp pass = {setOutput()}/>
    </div>
  )
}
