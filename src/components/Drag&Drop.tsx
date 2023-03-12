import React, { useEffect, useState } from 'react'

 interface Col {
    title:string;
    items:string[]
 }
 let placeholder = 'Add Task'

export default function DragAndDrop() {
    
    const [value,setVal] = useState<string>('');
    const [drag,setDrag] = useState<any> (null)
    const [columns, setColumns] = useState( ()=>{
        const storedTask = localStorage.getItem('tasks');
        return storedTask ? JSON.parse(storedTask) :[
        { title: "In Coda", items: ['Rispondere alle Email','Allenare Gambe','Ricarica credito telefono','Prenotare Dentista'] },
        { title: "Aperto", items: ['Palestra'] },
        { title: "In Revisone", items: [] },
        { title: "Completo", items: ['React '] },
      ]} 
    );


    let HandleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        let val = e.target.value
        setVal(val)
    }

      let HandleSubmit = (e:React.FormEvent ) =>{
        e.preventDefault();
        let newCol = [...columns]
        newCol[0].items.push(value)
        setColumns(newCol)
     }
   
     let handleDragStart = (e:React.DragEvent<HTMLDivElement>  ,tsk:string,indCol:number) => {
        setDrag({tsk,indCol})       
     }
     let handleDragEnd = (e:React.DragEvent<HTMLDivElement> ,tsk:string,indCol:number) =>{
        // console.log('DragEnd')
     }
     let Leave = (e:React.DragEvent<HTMLDivElement> ) =>{
        // console.log('Leave')
     }
     let Enter = (e:React.DragEvent<HTMLDivElement> ) =>{
        // console.log('Enter',e)
     }
     let Over = (e:React.DragEvent<HTMLDivElement> ) =>{
        e.preventDefault();
        // console.log('Over')
     }
     let Drop = (e:React.DragEvent<HTMLDivElement> ,indCol:number) =>{
        // console.log('drop')
         let currentIndex = columns[drag.indCol].items.indexOf(drag.tsk)
        const updatedColumns = [...columns];
        updatedColumns[drag.indCol].items.splice(currentIndex,1)
        updatedColumns[indCol].items.push(drag.tsk);
        setColumns(updatedColumns)
     }
     useEffect(()=>{
        const saveCol = localStorage.getItem('tasks');
        if(saveCol) {
            setColumns(JSON.parse(saveCol))
        }
     },[])
     useEffect(()=>{
      localStorage.setItem('tasks',JSON.stringify(columns))
     },[columns])
    
  return (
   <div className='flex flex-col justify-center items-center'>
         <form className='flex flex-row justify-center items-center max-w-xl p-2 '>
            <input className='flex justify-center bg-slate-200 rounded-xl  h-14  border-2 p-2' type="text" value={value} onChange={HandleChange}  placeholder={placeholder} />
            <button className='rounded-xl  bg-cyan-600 hover:bg-emerald-800 w-[55px] h-[55px] m-2 text-lg font-semibold' type='submit' onClick={HandleSubmit}>Create</button>
         </form>

     <div className="flex flex-wrap flex-row md:flex-nowrap justify-center p-10 m-5 w-1/2 min-h-[700px] gap-6">  
        {columns.map((cols:Col,indCol:number) => {
            return <div key={indCol} className="colonna rounded-xl bg-slate-200 p-10 w-1/1 h md:w-40   lg:w-80 lg:min-h-80 flex flex-col gap-4 justify-start" data-column="0" onDragLeave={Leave} onDragEnter={Enter} onDragOver={(e)=> Over(e)} onDrop={(e)=>Drop(e,indCol)} >
                    <h2 className="flex items-center text-xl text-center w-32 font-bold mb-4">{cols.title}</h2>
                        
                        {cols.items.map((tsk:string,tskIndx:number) =>{
                                return <div key={tskIndx} className=" p-5 w-24 flex items-center justify-center rounded-xl shadow-xl bg-slate-100" draggable="true"  onDragStart={(e)=> handleDragStart(e,tsk,indCol)} onDragEnd={(e)=> handleDragEnd(e,tsk,indCol)}>
                                            {tsk}
                                        </div>
                        })} 
        </div>
        })}
      
    </div>
</div>
  )
}
