import React,{useState} from 'react'
import pokemons from '../pokemon.json-master/pokedex.json'
import pokeball from '../pokeball.svg'


let value = ''
let pokemon1Gen = pokemons.slice(0,151)
let noMatchs = pokemon1Gen.map(item => [{name:item.name, id:item.id ,type:item.type , base:item.base}])
let num:string[] = []
let newValue:string = '';


export default function Pokedex() {


let [risultati,setRisultati] = useState<any>(
noMatchs.map((item ,index) => {
let id:string[] = item.map(itemID =>  formatID(itemID.id.toString()))
num = id
let image = require(`../pokemon.json-master/images/${num}.png`)
let name=item.map(itemName => itemName.name.english)
let type =item.map(itemType => itemType.type)

    return <div key={index} id ='CARD' className='iniline-block rounded-xl  max-w-[200px] p-5 m-2 hover:bg-slate-200 border-2 border-black'>
              <img className='w-1/1 p-2 border-2 border-black rounded-lg bg-slate-300' src={image} alt="pokemonImage" />
              <p id='NAME' className='p-1 m-1 flex items-center justify-center text-2xl '>{name}</p>
              <div id='TYPE' className=' text-2xl  flex gap-2  items-center justify-center font-medium '> Type:
                {type.map((item,index)=> (
                item.map((item ,index)=> <p key={index} className='text-base pt-2  font-normal'>{item}</p>)
              ))}</div>
          </div>
})) 
let types ='Normal,Fire,Water,Grass,Electric,Ice,Fighting,Poison,Ground,Flying,Psychic,Bug,Rock,Ghost,Dragon,Steel,Fairy'
let ArrFromTypes= types.split(',')

       

function formatID(id:string){
  if(id.toString().length === 1) return `00${id}`
  if(id.toString().length === 2) return `0${id}`
  return id 
}
  
const HandleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{

            value = e.target.value
            let matchingNames = pokemon1Gen.filter(item => item.name.english.toLowerCase().startsWith(value));
            let matchs = matchingNames.map(item => [{name:item.name, id:item.id ,type:item.type , base:item.base}])
            let num:string[]  = []
            let numPng:string = '';    


        if(value.startsWith('type:')){
              newValue = value.replace('type:','')
              let valueCap = newValue.charAt(0).toUpperCase() + newValue.slice(1)
              
              
            let matchingTypes = pokemon1Gen.filter(item => item.type.indexOf(valueCap) !== -1)
                if(newValue === '') {

                    return setRisultati(<div>
                    <p className='text-xl font-medium flex justify-center items-center m-2'>Search For Types</p>
                        <div className='flex flex-wrap items-center justify-center gap-2 max-w-[180px] border-2 border-black rounded-xl p-2'> 
                          {ArrFromTypes.map((typs,index) => <p key={index} className={'border-1 border-black rounded bg-slate-500 p-1'} >{typs}</p>)}  
                        </div>
                    </div>)
                }

            return setRisultati(matchingTypes.map((item ,index) => {
              let id:string = formatID(item.id.toLocaleString())
                numPng = id
              let image = require(`../pokemon.json-master/images/${numPng}.png`)
              let name = item.name.english
              let type = item.type
              
                    return <div key={item.id} id ='CARD' className='iniline-block rounded-xl  max-w-[200px] p-5 m-2 hover:bg-slate-200 border-2 border-black'>
                    <img className='w-1/1 p-2 border-2 border-black rounded-lg bg-slate-300' src={image} alt="pokemonImage" />
                    <p id='NAME' className='p-1 m-1 flex items-center justify-center text-2xl '>{name}</p>
                    <div id='TYPE' className=' text-2xl  flex gap-2  items-center justify-center font-medium '> Type:
                      {type.map((item,index) => (
                      <p key={index} className='text-base pt-2  font-normal'>{item}</p>
                    ))}</div>
                  </div>
                }))
        
        } else if ( matchingNames.length === 0 ){  
                return  setRisultati(<div className='text-xl text-red-600 flex items-center justify-center p-2 m-2 border-2 border-black rounded-lg'>404 Pokemon Not Found</div>)
        } else{setRisultati(matchs.map((item ,index) => {
              let id:string[] = item.map(itemID =>  formatID(itemID.id.toString()))
              num = id
              let image = require(`../pokemon.json-master/images/${num}.png`)
              let name=item.map(itemNAme => itemNAme.name.english)
              let type =item.map(itemType => itemType.type)

                return <div key={index} id ='CARD' className='iniline-block rounded-xl  max-w-[200px] p-5 m-2 hover:bg-slate-200 border-2 border-black'>
                          <img className='w-1/1 p-2 border-2 border-black rounded-lg bg-slate-300' src={image} alt="pokemonImage" />
                          <p id='NAME' className='p-1 m-1 flex items-center justify-center text-2xl '>{name}</p>
                          <ul id='TYPE' className=' text-2xl  flex gap-2  items-center justify-center font-medium '> Type:
                            {type.map((item)=> (
                              item.map((item ,index)=> <p key={index} className='text-base pt-2  font-normal'>{item}</p>)
                          ))}</ul>
                      </div>
              }))}
              
  }


  return (
    <div className='rounded-xl w-1/1 h-1/2  m-2 flex flex-col'>
      <div className='flex  items-center'> <h1 className=' text-5xl font-bold text-red-500 p-2 '>PokeDex</h1>
      <img className='w-20 h-20 animate-bounce' src={pokeball} alt="" />
      </div>
   
    <h2 className=' border-2 rounded-xl border-black flex items-center p-2 ml-4 w-1/2 font-medium'>Enter "type:" if you want to search by type </h2>
    <input type="text" id="search-bar" className="pl-2 border-2 rounded-xl border-slate-500 w-1/1 h-10 m-4 font-bold "  onChange={HandleChange}/>
     <div id='pokedex'>
          {risultati? <div className='flex flex-wrap items-center justify-center  m-2  '>{risultati}</div> : 
         <div className='text-xl text-red-600 flex items-center justify-center p-2 m-2 border-2 border-black rounded-lg'>404 Pokemon Not Found</div>  }
                  
     </div> 
         
    </div>
  )
// }

  }
 