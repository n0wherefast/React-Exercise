import React, { useState } from 'react'
import logo from '../logo.svg';
import { Button } from './utils/ComponentsUtils'


export default function CardsDeck() {

    
  
    const [cards,setCard] = useState( [1,2,3,4,5,6,7,8,9,10,'Re','Donna','Fante'])
    const [hand,setHand] = useState<(string | number)[]>([])
    const [show,setShow] = useState<Boolean>(false)
    let disabledDraw = false
    let cursorDraw = ''
    let disabledPutUn = false
    let cursorPutUn = ''
   

    const checkArray = () =>{
        if (hand.length === 3){
            disabledDraw = true
            cursorDraw = 'cursor-not-allowed'
        }else if(hand.length === 0){
             disabledPutUn = true
             cursorPutUn = 'cursor-not-allowed'
        }
    }
    checkArray()

    

    const shuffle = (array:(string | number)[]) => {
        let shuffledArray = [];
        let usedIndexes:number[] = [];

        let i = 0;
        while (i < array.length) {
             let randomNumber = Math.floor(Math.random() * array.length);
             if (!usedIndexes.includes(randomNumber)) {
                  shuffledArray.push(array[randomNumber]);
                  usedIndexes.push(randomNumber);
                  i++;
             }
        }
        return setCard(shuffledArray);
        
    }

    const draw = (array:( string | number)[]) => {
        const card:(string | number) = array.pop()!
        let newAraay = array
       setCard(newAraay.map((item) => item ) )
       setHand([...hand,card])     
     
    }

    const putUnder = (array:( string | number)[]) => {
        array.unshift(hand[0])
        let newAraay = array
        setCard(newAraay.map((item) => item ) )
        setHand(hand.filter((_, index) => index !==0))
    }
    const showCards= () =>{
        setShow(true)
    }
    const hideCards= () =>{
        setShow(false)
    }

  

  return (
<div className=' m-2 p-4 flex flex-col flex-wrap items-center max-w-lg'>
    
                <h1 className=' text-5xl font-bold text-pink-600 w-96 flex justify-center  m-5'>Cards Deck</h1>
                <div className='flex justify-center flex-wrap'>
                     {cards.map((item,index) => {
                         let isShow:any = (show === false) ? <img className='w-32 h-32 justify-center items-center' src={logo} alt='' /> : item;   
                            return <div key={index}
                                className = 'w-32 h-40 m-2 rounded-xl bg-slate-800 flex justify-center items-center text-slate-200 font-bold text-4xl'
                                onClick={()=>draw(cards)} >
                                  {isShow}
                                 </div>
                         })}
               </div>
                       
            
            <div className='bg-slate-800 rounded-xl p-4 flex flex-col items-center w-1/2  md:flex-wrap gap-2'>
                <Button className=' border-2 border-cyan-500 rounded-xl bg-cyan-500 hover:bg-pink-600 transition text-xl font-semibold w-32 h-10 'onClick={()=> shuffle(cards)} name={'Shuffle'}/>
                <Button className={`border-2 border-cyan-500 rounded-xl bg-cyan-500 hover:bg-pink-600 transition text-xl font-semibold w-32 h-10 ${cursorDraw}`} disabled={disabledDraw}  onClick={()=> draw(cards)} name={'Draw'} />
                <Button className={`border-2 border-cyan-500 rounded-xl bg-cyan-500 hover:bg-pink-600 transition text-xl font-semibold w-32 h-10 ${cursorPutUn} `}  disabled={disabledPutUn} onClick={()=> putUnder(cards)} name={'Put Under'}/>
                <Button className={`border-2 border-cyan-500 rounded-xl bg-cyan-500 hover:bg-pink-600 transition text-xl font-semibold w-32 h-10 `}  onClick={showCards}name={'ShowCard'}/>
                <Button className={`border-2 border-cyan-500 rounded-xl bg-cyan-500 hover:bg-pink-600 transition text-xl font-semibold w-32 h-10 `}  onClick={hideCards} name={'HideCard'}/>
            </div>
            <div  className='bg-slate-800 rounded-xl p-2  flex flex-col w-[260px] m-2 items-center justify-center'>
                <p className='text-slate-200 text-xl font-semibold'> La tua mano</p>
                <div  className='border-2 border-slate-200 rounded-xl p-2  flex justify-center m-2'>
                    {hand.map((item,index)=>(
                    <div key={index} className='w-16 h-24 p-1 m-1 rounded-xl bg-slate-200 flex justify-center items-center font-semibold text-slate-800 text-xl'>{item}</div>
                ))}
            </div>
            
            </div>
       
    </div>
  )
}
