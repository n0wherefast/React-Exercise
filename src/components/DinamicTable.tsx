import React, { useState } from 'react'


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
        
    <form className='border-2 border-slate-900 p-2 m-4 rounded  flex flex-row '>
                
                <input className='border-2 w-1/2 border-slate-900 m-2 p-2' placeholder='ID' name='ID' type="text"onChange={handleChange('ID')} />
                <input className='border-2 w-1/2 border-slate-900 m-2 p-2' placeholder='Name' name='Name' type="text" onChange={handleChange('Name')} />
                <input  className='border-2 w-1/2 border-slate-900 m-2 p-2' placeholder='Surname' name='Surname' onChange={handleChange('Surname')} type="textarea" />
                <input className='border-2 w-1/2 border-slate-900 m-2 p-2' placeholder='Email'  name='Email' type="text"onChange={handleChange('Email')} />
                <input className='border-2 w-1/2 border-slate-900 m-2 p-2' placeholder='Code' name='Code' type="text" onChange={handleChange('Code')} />
                <input  className='border-2 w-1/2 border-slate-900 m-2 p-2' placeholder='Address' name='Address' onChange={handleChange('Address')} type="textarea" />
                <button className='border border-slate-900  rounded  bg-emerald-600 hover:bg-emerald-800  w-1/2  m-2' type='submit' onClick={onSubmit}>Create</button>
    </form>  
    )
   }


  return (
<div className='border-2 border-slate-900 max-w-3xl h-96 m-2 rounded flex flex-col items-center p-2 '>
    <h1 className=' text-4xl font-bold text-red-500 p-2 '>Dinamic Table</h1>

    {form()}

    <table className='' >
            
            <thead >
                <tr className='bg-emerald-600 '>
                    
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
                            <td key={index} className='border  border-slate-900 bg-sky-400 w-28 p-4'>{element[key]}</td> 
                            ))}
                        
                    </tr>
                
            ))}
                
            </tbody>

    </table>
     
</div>
     
  )
}
