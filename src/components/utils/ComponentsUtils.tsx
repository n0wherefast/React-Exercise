import React from 'react'

interface ButtonTY {
    className:string,
    type?:'submit' | 'button',
    onClick:any,
    name?:string,
    disabled?:boolean,
}
interface InputTY {
    className:string,
    type:'submit' | 'date' | 'text'| 'password' | 'number' | 'textarea' | 'color',
    onSubmit?:any,
    onChange?:any,
    placeholder?:string,
    value?:string,
    name?:string,
}

export function Button(props:ButtonTY) {
    const {className, type,onClick ,name,disabled} = props
  return (
    <button className={className}
             type={type}  
             onClick={onClick}
             disabled={disabled}
             >{name}
    </button>

  )
}



export function Input(props:InputTY) {
    const {className,type,onChange,onSubmit,placeholder,value} = props
  return (
    <input className={className}
            type={type}
            value={value}
            onSubmit={onSubmit}
            onChange={onChange} 
            placeholder={placeholder} 
            />

  )
}







