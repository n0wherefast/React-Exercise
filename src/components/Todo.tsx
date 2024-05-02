import React, { useState, useEffect } from 'react'
import { Checkbox } from "@material-tailwind/react";
import {Button,Input }from '@material-tailwind/react';

export default function Todo() {


    const [todos, setTodo] = useState<string[]>([]);
    const [checked,setChecked] = useState<string[]>([])

    const [uniqCheck,setUniqChecked] = useState<string[]>(()=>{
        const storedCheck = localStorage.getItem('check');
        return storedCheck ? JSON.parse(storedCheck) : [];
    })
    const [unqTodo,setUnqTodo] = useState<string[]> (() => {
        const storedTodos = localStorage.getItem('todos');
        return storedTodos ? JSON.parse(storedTodos) : [];
      })  
    const [value,setValue] = useState<string>('')



    const setTodos = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const onSubmit = (e:React.FormEvent) => {
        e.preventDefault()
        setTodo( [...todos, value])
        setValue('')
    }
    const clean = (e:React.FormEvent) => {
        e.preventDefault()
        setTodo([])
        setUnqTodo([])
        setChecked([])
        localStorage.removeItem('todos')
        localStorage.removeItem('check')
    }
       

    const handleCheck = (e:React.ChangeEvent<HTMLInputElement>) => {

       let updatedList = [...checked];
       if (e.target.checked) {
          updatedList = [...checked, e.target.value];
        } else{
          updatedList.splice(updatedList.indexOf(e.target.value), 1)
        }
        setChecked(updatedList);
     }

    useEffect(() => {
        const savedTodos = localStorage.getItem('todos');
        if (savedTodos ) {
          setTodo(JSON.parse(savedTodos));
        }
      }, []);

    useEffect(() => {
        const saved = localStorage.getItem('check');
        if (saved ) {
          setChecked(JSON.parse(saved));
        }
      }, []);

          
      useEffect(() => {
       //   Questo codice usa useEffect per leggere i dati salvati in local storage e
      //  impostare lo stato todo . La funzione useEffect viene eseguita solo una volta 
     //  all'avvio del componente.
        localStorage.setItem('todos', JSON.stringify(unqTodo));          
      }, [unqTodo]);
        
      useEffect(() => {
        localStorage.setItem('check', JSON.stringify(uniqCheck));
      },[uniqCheck])
    

      useEffect(() => {
        setUnqTodo(Array.from(new Set(todos)) as string[]);
        setUniqChecked(Array.from(new Set(checked)) as string[]);
      }, [todos,checked]);
   

    let isChecked = (item:string) =>{ 
        return  checked.includes(item) ? 'line-through decoration-red-600 text-slate-800' : ' p-1 pl-4  flex gap-1 font-semibold text-lg text-black items-center'         
    }
    const isCheck = (item:string) =>{
      return checked.includes(item)
    }
    
 return (
    <div className='w-1/2 min-h-80 m-4 h-1/2 md:border-2 md:border-slate-800 rounded-xl'>
         <h1 className=' text-3xl font-bold text-pink-600 p-2 '>Todo List</h1>
         <div>
         <form className='flex flex-col justify-center p-2 gap-5 '>
          <Input className='flex justify-center rounded-xl p-2 h-14 w-50 text-lg'  type="text" value={value} onSubmit={onSubmit} onChange={setTodos}  placeholder={'What do we do today?'}  />
            <div className='flex gap-1 '>
              <Button
             className={'border  border-cyan-600  rounded-xl  bg-cyan-600 hover:bg-cyan-800  w-1/2 p-2 m-2 text-xl font-semibold'}
             type={'submit'}
             onClick={onSubmit}
              children={'Create'}  
              />
              <Button
             className={'border border-pink-600  rounded-xl  bg-pink-700 hover:bg-pink-800 w-1/2 p-2 m-2 text-xl font-semibold'}
             type={'submit'}
             onClick={clean} 
             children={'Clean'} 
              />
                 
            </div>

         </form>
            <ul>{unqTodo.map((item ,index)=>(
                <li className={` ${isChecked(item)} pl-4 min-w-[15rem] h-14  flex gap-2 font-semibold text-white text-2xl bg-cyan-900 border border-pink-700 m-2 rounded-3xl justify-center items-center`}  key={index}  >
                    {item}
                    <Checkbox className='checked:line-through decoration-red-600  flex items-center justify-center m-2 w-4 h-4'
                        onChange={handleCheck} value={item} checked={isCheck(item)}
                    />
                </li>
            ))}
            </ul>
        </div>      
    </div>
  )
}
