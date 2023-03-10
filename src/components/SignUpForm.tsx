import React,{useReducer} from 'react'
import form from '../form.json'


interface DataForm {
    name:string,
    type:string,
    placeholder:string,
    change?:string
    id:number
}
interface State {
    name:string,
    email:string,
    password:number,
    passwordReapeat:number,
    terms:boolean
}
interface Action {
    input:string,
    value:string | boolean
}
const DATA_FORM :DataForm[] = form.DATA_FORM

const initalState:State = {
   name:'',
   email:'',
   password:0 ,
   passwordReapeat:0 ,
   terms:false
}


function reducer (state:State,action:Action){
   
     return({...state,[action.input]:action.value})
    
}


function SignUpForm() {
     
    const [state,dispatch] = useReducer(reducer,initalState)

console.log(state)
    const HandleChange =  (e:React.ChangeEvent<HTMLInputElement>) =>{
        const {name ,value , checked} = e.target
        const action = {
            input: name,
            value: name === 'terms' ? checked : value
        }
        dispatch(action)
    }

    const HandleSubmit = (e:React.FormEvent) =>{
        e.preventDefault()
      if (state.terms === false || !state.name ) {
        alert('Name and Terms  required')
      }else{ alert('Registered Successfully')}
    }

  return (
    <form className='flex flex-col items-center bg-slate-800 rounded-xl p-6'>
        <h1 className='text-3xl font-black text-pink-700'>Register</h1>
        {DATA_FORM.map((itm :DataForm,index:any) => (
                <input key={index}  className='m-2 p-2 rounded-xl' type={itm.type} name={itm.name} placeholder={itm.placeholder}   onChange={HandleChange} />
        ))}
       <label htmlFor="" className='text-slate-200 ' ><input className='mr-2' name='terms' type="checkbox" onChange={HandleChange} /> Accept Terms</label> 
     <button className='flex items-center p-2 rounded-xl bg-gradient-to-t from-cyan-600 to-pink-700   max-w-1/2 m-2 h-10 font-semibold text-lg' type='submit' onClick={HandleSubmit} >Register</button>
    </form>
  )
}

export default SignUpForm


