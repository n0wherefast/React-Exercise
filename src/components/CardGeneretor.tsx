import React, { SetStateAction, useState } from 'react'

export default function CardGeneretor() {

    
    const [newCard,setNewCard] = useState<Card> ({
        url:'',
        title:'',
        content:''
    })

    interface Card {
        url:string,
        title:string,
        content:string
    }
    class Addcard {
        constructor(public url:string,  public title:string,public content:string){
            
        }
    }


 const [cards,setCards] = useState<Card[]>([ 
       {
        url:'https://img.freepik.com/free-vector/cute-doughnut-playing-skateboard-cartoon-vector-icon-illustration-food-sport-icon-concept-isolated_138676-4494.jpg?w=740&t=st=1674663300~exp=1674663900~hmac=6bd067c7e7d985d2eaa4122f429767f9790770da1d952af1fbac35e9055554b0',
        title:'Card1',
        content:'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.Lorem consectetur adipiscing elit.'
       },
       
       {
        url:'https://img.freepik.com/premium-vector/man-with-deer-head-sitting-skateboard-illustration_697324-1171.jpg?w=996',
        title:'Card2',
        content:'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.Lorem consectetur adipiscing elit.'
       },

       {
        url:'https://img.freepik.com/free-vector/cute-astronaut-playing-skateboard-cartoon-vector-icon-illustration-science-sports-icon-isolated_138676-5042.jpg?w=740&t=st=1674663213~exp=1674663813~hmac=02f135efc078ca524455291fd2cd28b5949ad812d259aa85bbfd18902999829c',
        title:'Card3',
        content:'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.Lorem consectetur adipiscing elit.'
       },  
     ])



    
     const card = new Addcard(newCard.url,newCard.title,newCard.content) 

     const handleChange = (input:string) => (e: React.ChangeEvent<HTMLInputElement>) => {

         setNewCard( {...newCard,[input] : e.target.value})
     }

     const onSubmit = (e: React.FormEvent) =>{
        e.preventDefault()
        const add:SetStateAction<Card[]> =[...cards,card]
        setCards(add)
     }

          

  return (

 <>

 <div className='flex flex-wrap flex-col max-w-lg m-2 border-2 border-slate-900 p-4 rounded '>
        <h1 className='flex justify-center font-bold text-4xl m-1 pb-9  text-red-500'>Card Generetor</h1>

         <form className='border-2 border-slate-900 p-2 m-4 rounded  flex flex-col '>
            <h3 className='text-xl'> Image url</h3>
            <input className='border-2 border-slate-900 m-2 '  name='url' type="text"onChange={handleChange('url')} />
            <h3 className='text-xl'>Title</h3>
            <input className='border-2 border-slate-900 m-2' name='title' type="text" onChange={handleChange('title')} />
            <h3 className='text-xl'>Description</h3>
            <input  className='border-2 border-slate-900 m-2 ' name='content' onChange={handleChange('content')} type="textarea" />
            <button className='border border-slate-900  rounded  bg-emerald-600 hover:bg-emerald-800  w-20 ml-2' type='submit' onClick={onSubmit}>Create</button>
         </form>

        <div className='flex flex-wrap'>
            {cards.map((item:Card ,index:number) => ( 
                <div key={index} className='w-full md:w-1/2 xl:w-1/3 px-4'>
                <div className="bg-white rounded-lg overflow-hidden mb-10">
                    <img src={item.url}
                    alt='img'
                        className='w-full' />
                    <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                        <h3 className="font-semibold text-dark text-xl">
                        {item.title}
                        </h3>
                        <p className="text-base text-body-color leading-relaxed mb-7">
                       {item.content}
                        </p>
                    </div>
                    </div>
                </div>
                
            ))}
        </div>

</div>
 
 </>
    
  )
}
