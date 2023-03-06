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



function App() {

  return (
  <div className='bg-slate-600 justify-center items-center w-11/12 min-h-[900px]'>
    <div className='flex flex-row justify-center'>
      <h1 className=' flex justify-center items-center text-6xl font-bold p-2 m-2 text-sky-300'> React Exercise</h1>
      <img className='w-32 h-32 justify-center items-center animate-slow' src={logo}  alt="" />
    </div>
    
    <div className='flex flex-row bg-slate-600 flex-wrap justify-center p-4'>
        <div className='flex flex-wrap gap-6 border-2 rounded-lg border-black p-4 m-2'> 
          <span> <a className='border-2 border-black p-2 m-2 rounded-lg bg-slate-500 hover:bg-slate-400' href="/FormatDates">Format Dates</a></span>
          <span> <a className='border-2 border-black p-2 m-2 rounded-lg bg-slate-500 hover:bg-slate-400' href="/EvenOdd">EvenOdd</a></span>
          <span> <a className='border-2 border-black p-2 m-2 rounded-lg bg-slate-500 hover:bg-slate-400' href="/ArraySum">Array Sum</a></span>
          <span> <a className='border-2 border-black p-2 m-2 rounded-lg bg-slate-500 hover:bg-slate-400' href="/DataSpread">Data Spread</a></span>
          <span> <a className='border-2 border-black p-2 m-2 rounded-lg bg-slate-500 hover:bg-slate-400' href="/CardGen">Card Generator</a></span>
          <span> <a className='border-2 border-black p-2 m-2 rounded-lg bg-slate-500 hover:bg-slate-400' href="/DinamicTable">DinamicTable</a></span>
          <span> <a className='border-2 border-black p-2 m-2 rounded-lg bg-slate-500 hover:bg-slate-400' href="/Modal">Modal&AutoCoplpete</a></span>
          <span> <a className='border-2 border-black p-2 m-2 rounded-lg bg-slate-500 hover:bg-slate-400' href="/CardDeck">CardDeck</a></span>
          <span> <a className='border-2 border-black p-2 m-2 rounded-lg bg-slate-500 hover:bg-slate-400' href="/Todo">ToDo</a></span>
          <span> <a className='border-2 border-black p-2 m-2 rounded-lg bg-slate-500 hover:bg-slate-400' href="/PasswordGen">PasswordGenerator</a></span>
          <span> <a className='border-2 border-black p-2 m-2 rounded-lg bg-slate-500 hover:bg-slate-400' href="/Pokedex">Pokedex</a></span>
          <span> <a className='border-2 border-black p-2 m-2 rounded-lg bg-slate-500 hover:bg-slate-400' href="/DragAndDrop">Drag&Drop</a></span>
          <span> <a className='border-2 border-black p-2 m-2 rounded-lg bg-slate-500 hover:bg-slate-400' href="/DogApi">Dog API</a></span>
        </div>
       <BrowserRouter>
            <Routes>
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
            </Routes>
        </BrowserRouter>
    </div>
 </div>

  );
}

export default App;
