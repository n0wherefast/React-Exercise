import React from 'react'


export default function Home() {
  return (
<div  className='p-2'>
    <h2 className='p-2 font-black text-xl'>Descrizione del progetto</h2>
      <p className='p-2 '>
        Questa React App definisce un insieme di esercizi su diversi componenti. 
        L'app include un menu di navigazione che consente all'utente di passare da un componente all'altro.
        Il menu di navigazione è implementato utilizzando i tag anchor di HTML che linkano a diversi percorsi.
        Quando l'utente fa clic su un link, l'app naviga al percorso corrispondente e renderizza il componente appropriato.
    </p>
    <h2 className='p-2 font-black text-xl'>I componenti inclusi nell'app sono:</h2>
    <ul className='p-2 ml-2 list-disc'>
      <li> <p className='font-bold text-lg'>Format Dates:</p>  un componente che formatta le date</li>
      <li> <p className='font-bold text-lg'>Even or Odd:</p> un componente che verifica se un numero è pari o dispari</li>
      <li> <p className='font-bold text-lg'>Array Sum:</p> un componente che calcola la somma di un array di numeri</li>
      <li> <p className='font-bold text-lg'>Date Spread:</p> un componente che calcola la differenza tra due date</li>
      <li> <p className='font-bold text-lg'>Card Generator:</p> un componente che genera card dinamiche tramite dati inseriti dall'utente </li>
      <li> <p className='font-bold text-lg'>Dynamic Table:</p> un componente che visualizza una tabella con dati dinamici</li>
      <li> <p className='font-bold text-lg'>Cards Deck:</p> un componente che simula un mazzo di carte</li>
      <li> <p className='font-bold text-lg'>Auto Complete:</p> un componente che mostra dei riusltati di ricerca in base cosa inserisce l'utente</li>
      <li> <p className='font-bold text-lg'>Modal:</p> un componente che mostra un modal</li>
      <li> <p className='font-bold text-lg'>Todo:</p> un componente che implementa una lista di cose da fare</li>
      <li> <p className='font-bold text-lg'>Password Generator:</p> un componente che genera password casuali</li>
      <li> <p className='font-bold text-lg'>Pokedex:</p> un componente che mostra informazioni sui Pokemon</li>
      <li> <p className='font-bold text-lg'>Drag And Drop:</p> un componente che implementa la funzionalità di trascinamento e rilascio</li>
      <li> <p className='font-bold text-lg'>DogApis:</p> un componente che mostra immagini di cani da un'API</li>
      <li> <p className='font-bold text-lg'>Sign Up Form:</p> un componente che mostra un form di registrazione unsando useReducer</li>
      <li> <p className='font-bold text-lg'>Home:</p> un componente che mostra la pagina iniziale</li>
    </ul>
    <p className='pt-2 font-extrabold text-xl'>Cosa Ho Utilizzato:</p>
    <ul className='p-2 ml-2 list-disc'>
      <li><p className='font-bold text-lg underline hover:text-slate-700 '><a href="https://www.typescriptlang.org/">TypeScript:</a></p></li>
      <li><p className='font-bold text-lg underline hover:text-slate-700 '><a href="https://it.reactjs.org/">React:</a> </p></li>
      <li><p className='font-bold text-lg underline hover:text-slate-700'><a href="https://reactrouter.com/en/main">React Router:</a></p></li>
      <li><p className='font-bold text-lg underline hover:text-slate-700'><a href="https://tailwindcss.com/">Tailwind:</a></p></li>
    </ul>

    
  
</div>
  )
}
