import { type } from '@testing-library/user-event/dist/type';
import React, { useState } from 'react'
import logo from '../logo.svg';

export default function CardsDeck() {

    
  
    const [cards,setCard] = useState( [1,2,3,4,5,6,7,8,9,10,'Re','Donna','Fante'])
    const [hand,setHand] = useState<(string | number)[]>([])
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

    

    console.log(hand.length)

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

    // console.log(hand)

    const putUnder = (array:( string | number)[]) => {
        array.unshift(hand[0])
        let newAraay = array
        setCard(newAraay.map((item) => item ) )
        setHand(hand.filter((_, index) => index !==0))
    }

  

  return (
<div className=' border-2  border-black rounded m-2 p-4 flex flex-row flex-wrap justify-center max-w-lg'>
                <h1 className=' text-4xl font-bold text-red-500 w-96 flex justify-center m-4'>Cards Deck</h1>
                
                        {cards.map((item,index) => (
                    <div key={index}
                        className = 'w-32 h-40 m-2  border-2 border-slate-900 rounded bg-slate-500 flex justify-center items-center font-bold text-4xl'
                        onClick={()=>draw(cards)} >
                            <img className='w-32 h-32 justify-center items-center' src={logo}  alt="" />
                    </div>
                ))}
               
            
            <div className='border-2 border-black rounded p-2  flex justify-between'>
                <button className='m-2 border border-black rounded  bg-sky-500 hover:bg-emerald-600  w-32 h-10 'onClick={()=> shuffle(cards)}> Shuffle</button>
                 <button className={`m-2 border border-black rounded  bg-sky-500 hover:bg-emerald-600  w-32 h-10 ${cursorDraw}`} disabled={disabledDraw}  onClick={()=> draw(cards)}> Draw</button>
                <button className={` m-2 border border-black rounded  bg-sky-500 hover:bg-emerald-600  w-32 h-10 ${cursorPutUn} `}  disabled={disabledPutUn} onClick={()=> putUnder(cards)}> Put Under</button>
            </div>
            <div  className='border-2 border-black rounded p-2  flex flex-col m-2 items-center bg-slate-500 justify-center'>
                <h2> La tua mano</h2>
                <div  className='border-2 border-black rounded p-2  flex justify-center m-2'>
                    {hand.map((item,index)=>(
                    <div key={index} className='w-14 h-20 p-2 m-2 border-2 border-black flex justify-center items-center font-semibold text-md'>{item}</div>
                ))}
            </div>
            
            </div>
       
    </div>
  )
}
