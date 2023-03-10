import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import FormatDates from './components/FormatDates';
import EvenOdd from './components/EvenOdd';
import ArraySum from './components/ArraySum';
import DateSpread from './components/DateSpread';
import CardGeneretor from './components/CardGeneretor';
import DinamicTable from './components/DinamicTable';
import CardsDeck from './components/CardsDeck';
import Modal from './components/Modal';
import Todo from './components/Todo';
import PasswordGenerator from './components/PasswordGenerator';
import Pokedex from './components/Pokedex';
import DragAndDrop from './components/Drag&Drop';
import DogApis from './components/DogApis';
import Home from './components/Home';
import SignUpForm from './components/SignUpForm';



function App() {
 
return (
  
<div className='bg-slate-800 justify-center rounded-xl p-2 m-2 items-center w-11/12 min-h-[900px]'>
  <div className='flex flex-row  items-center'>
      <h1 className=' flex justify-center items-center text-6xl font-bold p-2 mb-2  text-sky-300'> React Exercise</h1>
      <img className='w-32 h-32 justeify-center items-center animate-slow p-3' src={logo}  alt="" />
  </div>
  <div className='p-2'>
    <a className=' p-2 m-2 w-1/2 bg-cyan-500 rounded-xl font-semibold' href="#1">Projects</a>
     <a className=' p-2 w-1/2 bg-cyan-500 rounded-xl font-semibold' href="/">Home</a>
  </div>
  
  <div className='flex flex-row bg-gradient-to-t from-pink-600 to-cyan-700  flex-wrap justify-center w-1/1 h-1/2 p-4 m-3 rounded-xl'>
    
<BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/FormatDates' element={<FormatDates/> }/>
                <Route path='/EvenOdd' element={ <EvenOdd/>}/>
                <Route path='/ArraySum' element={<ArraySum/>}/>
                <Route path='/DataSpread' element ={<DateSpread/>}/>
                <Route path='/CardGen' element={<CardGeneretor/>}/>                
                <Route path='/DinamicTable' element={<DinamicTable/>  }/>                
                <Route path='/Modal' element={<div><Modal/></div> }/>                
                <Route path='/CardDeck' element={<CardsDeck/>}/>                
                <Route path='/Todo' element={<Todo/>}/>                
                <Route path='/PasswordGen' element={<PasswordGenerator/>}/>   
                <Route path='/Pokedex' element ={ <Pokedex/>} />
                <Route path='/DragAndDrop' element={<DragAndDrop/>}/>
                <Route path='/DogApi' element={<DogApis/>}/>
                <Route path='/SignUp' element={<SignUpForm/>}/>
            </Routes>
        </BrowserRouter>
</div>
  
    <div id='1' className='flex flex-col bg-gradient-to-r from-cyan-700 via-purple-700 to-pink-700  p-4 m-2 rounded-lg lg:flex-row'>
      <div className='flex flex-wrap justify-center gap-1 w-1/1 '>
          <a href="/FormatDates"> 
           <div className=" w-32 h-32  bg-sky-500 md:w-52 lg:w-52 md:h-72 lg:h-72  m-1 lg:m-3 static rounded-lg ">
              <div className="flex flex-col justify-center md:block w-32 h-32 bg-slate-700 md:w-52 lg:w-52 md:h-72 lg:h-72 hover:-m-2 absolute rounded-lg shadow-lg hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in ">
                  <h1 className=" mr-2 mt-2 ml-2 md:m-4 lg:m-4 text-2xl  md:text-2xl lg:text-2xl font-bold text-slate-200">Format Dates</h1>
                  <hr className="ml-2 mr-2 mt-2 md:m-4 lg:m-4 rounded-2xl border-t-2"/>
                  <p className=" hidden md:block  lg:block m-4 text-sm text-slate-200 ">
                                 Questo codice formatta le date in due opzioni usando il metodo toLocaleString().
                                   Il componente definisce un oggetto today che rappresenta la data
                                    attuale e un di oggetti che specificano le opzioni di
                                     formattazione delle date.
                  </p>
              </div>
            </div> 
          </a>
          <a href="/EvenOdd"> 
            <div className=" w-32 h-32 bg-sky-500 md:w-52 lg:w-52  md:h-72 lg:h-72  m-1 lg:m-3 static rounded-lg ">
            <div className="flex flex-col justify-center md:block w-32 h-32 bg-slate-700 md:w-52 lg:w-52 md:h-72 lg:h-72 hover:-m-2 absolute rounded-lg shadow-lg hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in ">
                  <h1 className=" mr-2 mt-2 ml-2 md:m-4 lg:m-4 text-2xl  md:text-2xl lg:text-2xl font-bold text-slate-200">Even Or Odd</h1>
                  <hr className="ml-2 mr-2 mt-2 md:m-4 lg:m-4 rounded-2xl border-t-2"/>
                  <p className=" hidden md:block  lg:block m-4 text-sm text-slate-200 ">
                                 Questo codice visualizza un insieme di numeri casuali generati da un modulo
                                  "utils/randomNumber". Il componente itera attraverso l'array di numeri
                                   generati, determina se ogni numero è pari o dispari
                  </p>
              </div>
            </div> 
          </a>
          <a href="/ArraySum"> 
           <div className=" w-32 h-32 bg-sky-500 md:w-52 lg:w-52 md:h-72 lg:h-72 m-1 lg:m-3 static rounded-lg ">
              <div className="flex flex-col justify-center md:block w-32 h-32 bg-slate-700 md:w-52 lg:w-52 md:h-72 lg:h-72 hover:-m-2 absolute rounded-lg shadow-lg hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in">
                  <h1 className=" mr-2 mt-2 ml-2 md:m-4 lg:m-4 text-2xl  md:text-2xl lg:text-2xl font-bold text-slate-200">Array Sum</h1>
                  <hr className="ml-2 mr-2 mt-2 md:m-4 lg:m-4 rounded-2xl border-t-2"/>
                  <p className=" hidden md:block  lg:block m-4 text-sm text-slate-200 ">
                                  Questo componente visualizza un form che consente all'utente di inserire il numero
                                   di elementi e un valore massimo. Il componente genera
                                    un array di numeri casuali in base al numero di elementi e al valore
                                     del range inseriti dall'utente
                  </p>
              </div>
            </div> 
          </a>
      
          <a href="/DataSpread"> 
           <div className=" w-32 h-32 bg-sky-500 md:w-52 lg:w-52 md:h-72 lg:h-72 m-1 lg:m-3 static rounded-lg ">
              <div className="flex flex-col justify-center md:block w-32 h-32 bg-slate-700 md:w-52 lg:w-52 md:h-72 lg:h-72 hover:-m-2 absolute rounded-lg shadow-lg hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in">
                  <h1 className=" mr-2 mt-2 ml-2 md:m-4 lg:m-4 text-2xl  md:text-2xl lg:text-2xl font-bold text-slate-200">Data Spread</h1>
                  <hr className="ml-2 mr-2 mt-2 md:m-4 lg:m-4 rounded-2xl border-t-2"/>
                  <p className=" hidden md:block  lg:block m-4 text-sm text-slate-200 ">
                                  Questo componente che permette all'utente di selezionare
                                   due date e calcolare la differenza in giorni tra di esse.
                                  usa useState per tenere traccia delle due date selezionate
                                   dall'utente e del risultato.
                  </p>
              </div>
            </div> 
          </a>
          <a href="/CardGen"> 
           <div className=" w-32 h-32 bg-sky-500 md:w-52 lg:w-52 md:h-72 lg:h-72 m-1 lg:m-3 static rounded-lg ">
              <div className="flex flex-col justify-center md:block w-32 h-32 bg-slate-700 md:w-52 lg:w-52 md:h-72 lg:h-72 hover:-m-2 absolute rounded-lg shadow-lg hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in">
                  <h1 className=" mr-2 mt-2 ml-2 md:m-4 lg:m-4 text-2xl  md:text-2xl lg:text-2xl font-bold text-slate-200">Card Maker</h1>
                  <hr className="ml-2 mr-2 mt-2 md:m-4 lg:m-4 rounded-2xl border-t-2"/>
                  <p className=" hidden md:block  lg:block m-4 text-sm text-slate-200 ">
                                   Questo codice genera carte in
                                   base all'input dell'utente. Il componente ha un modulo in 
                                   cui l'utente può inserire l'URL dell'immagine, il titolo e 
                                   il contenuto della scheda. 
                  </p>
              </div>
            </div> 
          </a>
          <a href="/DinamicTable"> 
           <div className=" w-32 h-32 bg-sky-500 md:w-52 lg:w-52 md:h-72 lg:h-72 m-1 lg:m-3 static rounded-lg ">
              <div className="flex flex-col justify-center md:block w-32 h-32 bg-slate-700 md:w-52 lg:w-52 md:h-72 lg:h-72 hover:-m-2 absolute rounded-lg shadow-lg hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in">
                  <h1 className=" mr-2 mt-2 ml-2 md:m-4 lg:m-4 text-2xl  md:text-2xl lg:text-2xl font-bold text-slate-200">Dinamic Table</h1>
                  <hr className="ml-2 mr-2 mt-2 md:m-4 lg:m-4 rounded-2xl border-t-2"/>
                  <p className=" hidden md:block  lg:block m-4 text-sm text-slate-200 ">
                                  Questo componente React rappresenta una tabella dinamica 
                                  con un form per aggiungere righe alla tabella.
                                   Il form contiene input per l'ID, il nome, il cognome, l'email, il codice fiscale
                                    e l'indirizzo. 
                  </p>
              </div>
            </div> 
          </a>
          <a href="/Modal"> 
           <div className=" w-32 h-32 bg-sky-500 md:w-52 lg:w-52 md:h-72 lg:h-72 m-1 lg:m-3 static rounded-lg ">
              <div className="flex flex-col justify-center md:block w-32 h-32 bg-slate-700 md:w-52 lg:w-52 md:h-72 lg:h-72 hover:-m-2 absolute rounded-lg shadow-lg hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in">
                  <h1 className=" mr-2 mt-2 ml-2 md:m-4 lg:m-4 text-2xl  md:text-2xl lg:text-2xl font-bold text-slate-200">Auto Complete</h1>
                  <hr className="ml-2 mr-2 mt-2 md:m-4 lg:m-4 rounded-2xl border-t-2"/>
                  <p className=" hidden md:block  lg:block m-4 text-sm text-slate-200 ">
                                 Questo codice implementa una funzionalità di autocompletamento. 
                                  un campo di input in cui l'utente può inserire un testo per cercare una corrispondenza 
                                  di nomi,una lista di risultati viene visualizzata
                                 in tempo reale durante la digitazione.


                                 
                  </p>
              </div>
            </div> 
          </a>
          <a href="/CardDeck"> 
           <div className=" w-32 h-32 bg-sky-500 md:w-52 lg:w-52 md:h-72 lg:h-72 m-1 lg:m-3 static rounded-lg ">
              <div className="flex flex-col justify-center md:block w-32 h-32 bg-slate-700 md:w-52 lg:w-52 md:h-72 lg:h-72 hover:-m-2 absolute rounded-lg shadow-lg hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in">
                  <h1 className=" mr-2 mt-2 ml-2 md:m-4 lg:m-4 text-2xl  md:text-2xl lg:text-2xl font-bold text-slate-200">Card Deck</h1>
                  <hr className="ml-2 mr-2 mt-2 md:m-4 lg:m-4 rounded-2xl border-t-2"/>
                  <p className=" hidden md:block  lg:block m-4 text-sm text-slate-200 ">
                                  Questo componente simula un mazzo di carte e consente
                                   all'utente di eseguire alcune azioni su di esse.
                                  Il componente useState per tenere traccia del mazzo di carte 
                                  originale,della mano corrente dell'utente.
                  </p>
              </div>
            </div> 
          </a>
          <a href="/Todo"> 
           <div className=" w-32 h-32 bg-sky-500 md:w-52 lg:w-52 md:h-72 lg:h-72 m-1 lg:m-3 static rounded-lg ">
              <div className="flex flex-col justify-center md:block w-32 h-32 bg-slate-700 md:w-52 lg:w-52 md:h-72 lg:h-72 hover:-m-2 absolute rounded-lg shadow-lg hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in">
                  <h1 className=" mr-2 mt-2 ml-2 md:m-4 lg:m-4 text-2xl  md:text-2xl lg:text-2xl font-bold text-slate-200">To Do List</h1>
                  <hr className="ml-2 mr-2 mt-2 md:m-4 lg:m-4 rounded-2xl border-t-2"/>
                  <p className=" hidden md:block  lg:block m-4 text-sm text-slate-200 ">
                                  Questo  componente  implementa un'applicazione di base 
                                  per l'elenco di cose da fare.
                                   Utilizza hook come useState e useEffect per gestire lo stato 
                                   e la scrittura di dati su localStorage
                  </p>
              </div>
            </div> 
          </a>
          <a href="/PasswordGen"> 
           <div className=" w-32 h-32 bg-sky-500 md:w-52 lg:w-52 md:h-72 lg:h-72 m-1 lg:m-3 static rounded-lg ">
              <div className="flex flex-col justify-center md:block w-32 h-32 bg-slate-700 md:w-52 lg:w-52 md:h-72 lg:h-72 hover:-m-2 absolute rounded-lg shadow-lg hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in">
                  <h1 className=" mr-2 mt-2 ml-2 md:m-4 lg:m-4 text-2xl  md:text-2xl lg:text-2xl font-bold text-slate-200">Password Maker</h1>
                  <hr className="ml-2 mr-2 mt-2 md:m-4 lg:m-4 rounded-2xl border-t-2"/>
                  <p className=" hidden md:block  lg:block m-4 text-sm text-slate-200 ">
                                  Questo codice genera una password e
                                  Utilizza useState per gestire la lunghezza,
                                  la presenza di caratteri speciali e maiuscole.
                                  il componente Otp richiede l'inserimento della password perconfermare l'accesso.
                  </p>
              </div>
            </div> 
          </a>
          <a href="/Pokedex"> 
           <div className=" w-32 h-32 bg-sky-500 md:w-52 lg:w-52 md:h-72 lg:h-72 m-1 lg:m-3 static rounded-lg ">
              <div className="flex flex-col justify-center md:block w-32 h-32 bg-slate-700 md:w-52 lg:w-52 md:h-72 lg:h-72 hover:-m-2 absolute rounded-lg shadow-lg hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in">
                  <h1 className=" mr-2 mt-2 ml-2 md:m-4 lg:m-4 text-2xl  md:text-2xl lg:text-2xl font-bold text-slate-200">Pokedex</h1>
                  <hr className="ml-2 mr-2 mt-2 md:m-4 lg:m-4 rounded-2xl border-t-2"/>
                  <p className=" hidden md:block  lg:block m-4 text-sm text-slate-200 ">
                                  Questo è un componente mostra un Pokedex.
                                  Gli utenti possono cercare i Pokémon per nome o per tipo. 
                                  Il componente mostra una lista di(fino al numero 151). 
                                  I dati sono memorizzati in un file JSON
                                     
                  </p>
              </div>
            </div> 
          </a>
          <a href="/DragAndDrop"> 
           <div className=" w-32 h-32 bg-sky-500 md:w-52 lg:w-52 md:h-72 lg:h-72 m-1 lg:m-3 static rounded-lg ">
              <div className="flex flex-col justify-center md:block w-32 h-32 bg-slate-700 md:w-52 lg:w-52 md:h-72 lg:h-72 hover:-m-2 absolute rounded-lg shadow-lg hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in">
                  <h1 className=" mr-2 mt-2 ml-2 md:m-4 lg:m-4 text-2xl  md:text-2xl lg:text-2xl font-bold text-slate-200">Drag and Drop</h1>
                  <hr className="ml-2 mr-2 mt-2 md:m-4 lg:m-4 rounded-2xl border-t-2"/>
                  <p className=" hidden md:block  lg:block m-4 text-sm text-slate-200 ">
                                  Questo è un esempio di trascinamento e rilascio(drag and drop)
                                  che contiene quattro colonne di task che possono essere trascinati e rilasciati tra di esse. 
                                  e utilizza lo stato per gestire il testo inserito dall'utente e l'aggiunta di nuovi task.
                  </p>
              </div>
            </div> 
          </a>
       
       <a href="/DogApi"> 
        <div className=" w-32 h-32 bg-sky-500 md:w-52 lg:w-52 md:h-72 lg:h-72 m-1 lg:m-3 static rounded-lg ">
              <div className="flex flex-col justify-center md:block w-32 h-32 bg-slate-700 md:w-52 lg:w-52 md:h-72 lg:h-72 hover:-m-2 absolute rounded-lg shadow-lg hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in">
                  <h1 className=" mr-2 mt-2 ml-2 md:m-4 lg:m-4 text-2xl  md:text-2xl lg:text-2xl font-bold text-slate-200">Dog API's</h1>
                  <hr className="ml-2 mr-2 mt-2 md:m-4 lg:m-4 rounded-2xl border-t-2"/>
                  <p className=" hidden md:block  lg:block m-4 text-sm text-slate-200 "> 
                                  Questo esercizio React usa un custom hook(useFetch) per caricare da un API 
                                  delle immagin di cani e poi mostrare in base alla razza selezionata dall'utente.
                                  Dispone di un menu a discesa per selezionare una razza da un elenco di razze disponibili.
                  </p>
              </div>
            </div> 
          </a>
       <a href="/SignUp"> 
        <div className=" w-32 h-32 bg-sky-500 md:w-52 lg:w-52 md:h-72 lg:h-72 m-1 lg:m-3 static rounded-lg ">
              <div className="flex flex-col justify-center md:block w-32 h-32 bg-slate-700 md:w-52 lg:w-52 md:h-72 lg:h-72 hover:-m-2 absolute rounded-lg shadow-lg hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in">
                  <h1 className=" mr-2 mt-2 ml-2 md:m-4 lg:m-4 text-2xl  md:text-2xl lg:text-2xl font-bold text-slate-200">Sign Up Form</h1>
                  <hr className="ml-2 mr-2 mt-2 md:m-4 lg:m-4 rounded-2xl border-t-2"/>
                  <p className=" hidden md:block  lg:block m-4 text-sm text-slate-200 "> 
                                  Questo codice implementa un form di registrazione in React 
                                  utilizzando l'hook useReducer per gestire lo stato del form
                                  che aggiorna lo stato del form in base all'input dell'utente.
                  </p>
              </div>
            </div> 
          </a>
       </div>
  </div>
 
 </div>

  );
}

export default App;
