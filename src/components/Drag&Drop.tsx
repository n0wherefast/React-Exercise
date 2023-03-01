import React, { useState } from 'react'

export default function DragAndDrop() {

     let [tasks,setTasks] = useState( [ 'Rispondere alle Email','Allenare Gambe','Ricarica credito telefono','Prenotare Dentista'])
     let aperto:string[] = []
     let revisione:string[] = []
     let completati:string[] = []
     let drop =''

     let handleDragStart = (e:any) =>{
        let task = e.target.innerText
        setTimeout(()=>setTasks( tasks.filter(tsk => tsk !== task)),0)
       
        console.log('dragStart')
        // console.log(task)
     }
     let handleDragEnd = (e:any) =>{
        //  e.dataTransfer.setData("text/plain","Questo è il testo che verrà trascinato")
        console.log('dragEnd')
     }
     let Leave = () =>{
        console.log('Leave')
     }
     let Enter = () =>{
        console.log('Enter')
     }
     let Over = (e:any) =>{
        e.preventDefault();
        // console.log(e.target)
     }
     let Drop = (e:any) =>{
        console.log( drop = e.target.innerText)
        
     }

  return (
    <div className="flex flex-row justify-center p-10 m-10 w-1/2 h-[700px] gap-6">

            <div className="colonna rounded-xl bg-slate-200 p-10 w-80 flex flex-col gap-4 justify-start" data-column="0" onDragLeave={Leave}  >
                    <h2 className="text-xl text-center w-32 font-bold mb-4">In Coda</h2>
                    {tasks.map((task,index) => {

                        return <div key={index} className="task p-4 rounded-xl shadow-xl bg-white" draggable="true" data-task="0" onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
                                    {task}
                                </div>
                    })} 
                </div>
            <div className="colonna rounded-xl bg-slate-200 p-10 w-80 flex flex-col gap-4 justify-start"data-column="1" onDragLeave={Leave} onDragEnter={Enter} onDragOver={Over} onDrop={Drop}>
                    <h2 className="text-xl text-center w-32 font-bold mb-4">Aperto</h2>
                    {aperto.map((taskOpen,index)=>{
                        return  <div key={index} className="task p-4 rounded-xl shadow-xl bg-white" draggable="true" data-task="0" onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
                        {taskOpen}
                    </div>
                    })}
            </div>

            <div className="colonna rounded-xl bg-slate-200 p-10 w-90 flex flex-col gap-4 justify-start" data-column="2"  onDragLeave={Leave} onDragEnter={Enter} onDragOver={Over} onDrop={Drop}>
                    <h2 className="text-xl text-center w-32 font-bold mb-4">In Revisione</h2>
                    {revisione.map((taskOpen,index)=>{
                        return  <div key={index} className="task p-4 rounded-xl shadow-xl bg-white" draggable="true" data-task="0" onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
                        {taskOpen}
                    </div>
                    })}
            </div>
            
            <div  className="colonna rounded-xl bg-slate-200 p-10 w-80 flex flex-col gap-4 justify-start" data-column="3"  onDragLeave={Leave} onDragEnter={Enter} onDragOver={Over} onDrop={Drop}> 
                    <h2 className="text-xl text-center w-32 font-bold mb-4">Completato</h2>
                    {completati.map((taskOpen,index)=>{
                        return  <div key={index} className="task p-4 rounded-xl shadow-xl bg-white" draggable="true" data-task="0" onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
                        {taskOpen}
                    </div>
                    })}
            </div>
      
    </div>
  )
}
