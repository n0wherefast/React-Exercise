import React, { useState } from 'react'
import { Button,Input } from './utils/ComponentsUtils'



export default function DinamicTable() {

    interface Data {
        ID:number,
        Name:string,
        Surname:string,
        Email:string | number
        Code:number
        Address:string | number
    }

    const [value,setValue] = useState<Data>({
        ID: 0,
        Name:'',
        Surname:'',
        Email:'',
        Code:0,
        Address:''
    })

    const [data,setData] = useState<Data[]>( [

        {
          ID: 1,
          Name: "luca",
          Surname: "rossi",
          Email: "luca.rossi@gmmaaaaailit",
          Code: 5454554,
          Address: "via torino",
        },
        {
          ID: 2,
          Name: "marco",
          Surname: "verdi",
          Email: "marco.verdi@gmmaaaaailit",
          Code: 5465665,
          Address: "via piacenza",
        },
      ]
     )

     class Person<Data> {
        constructor (public id:Data ,public Name:Data,public Surname:Data,public Email:Data,public Code:Data,public Address:Data) {      
        }
     }

 const person = new Person(value.ID,value.Name,value.Surname,value.Email,value.Code,value.Address)
      
     const handleChange = (input:string) => (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue( {...value,[input] : e.target.value})
    }

    const onSubmit = (e:React.FormEvent) =>{
       e.preventDefault()
       const add:any =[...data,person]
       setData(add)
    }
    
   const form = () => {
    return(
        
    <form className='md:border-2 md:border-slate-800 p-2 m-4 rounded-xl flex-wrap items-center justify-center md:flex-nowrap flex flex-row '>
                
                <Input className=' w-1/2  m-2 p-2 rounded-xl ' placeholder='ID' name='ID' type="text"onChange={handleChange('ID')} />
                <Input className=' w-1/2  m-2 p-2 rounded-xl ' placeholder='Name' name='Name' type="text" onChange={handleChange('Name')} />
                <Input  className=' w-1/2  m-2 p-2 rounded-xl ' placeholder='Surname' name='Surname' onChange={handleChange('Surname')} type="textarea" />
                <Input className=' w-1/2  m-2 p-2 rounded-xl ' placeholder='Email'  name='Email' type="text"onChange={handleChange('Email')} />
                <Input className=' w-1/2  m-2 p-2 rounded-xl ' placeholder='Code' name='Code' type="text" onChange={handleChange('Code')} />
                <Input  className=' w-1/2  m-2 p-2 rounded-xl ' placeholder='Address' name='Address' onChange={handleChange('Address')} type="textarea" />
                <Button className='border border-cyan-600  rounded-xl  bg-cyan-600 hover:bg-pink-600  w-1/2 h-10  m-2' type='submit' onClick={onSubmit} name={'Create'}/>
    </form>  
    )
   }


  return (
<div className=' m-2 rounded flex flex-col items-center p-2 overflow-scroll'>
    <h1 className=' text-4xl font-bold text-pink-600 p-2 '>Dinamic Table</h1>

    {form()}

    <table className='' >
            
            <thead >
                <tr className='bg-cyan-800 flex-wrap'>
                    
                    <th className='border-2  border-slate-900'>Id</th>
                    <th className='border-2  border-slate-900'>Nome</th>
                    <th className='border-2  border-slate-900'>Cognome</th>
                    <th className='border-2  border-slate-900'>Email</th>
                    <th className='border-2  border-slate-900'>Codice Fiscsle</th>
                    <th className='border-2  border-slate-900'>Indirizzo</th>
                    
                </tr>
            </thead> 
                
            <tbody className=' ' >
                {data.map((element:any,index:number) =>(
                    <tr  key={index}>
                        
                            {Object.keys(element).map((key:string,index:number) => (
                            <td key={index} className='border-2  border-slate-900 font-semibold  w-28 '>{element[key]}</td> 
                            ))}
                        
                    </tr>
                
            ))}
                
            </tbody>

    </table>
     
</div>
     
  )
}
