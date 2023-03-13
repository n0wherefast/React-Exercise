import React from 'react';
import {   Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Projects from './components/Projects';
import Home from './components/Home';
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
import SignUpForm from './components/SignUpForm';




function App() {
 
return (
  
<div className='bg-slate-800 justify-center rounded-xl p-2 m-2 items-center w-11/12 min-h-[900px]'>
  <div className='flex flex-row  items-center'>
      <h1 className=' flex justify-center items-center text-6xl font-bold p-2 mb-2  text-sky-300'> React Exercise</h1>
      <img className='w-32 h-32 justeify-center items-center animate-slow p-3' src={logo}  alt="" />
  </div>
  <div className='p-2 mb-2'>
     <a className=' p-2 w-1/2 bg-cyan-500 rounded-xl font-semibold hover:bg-pink-700' href="#/">Home</a>
    <a className=' p-2 m-2 w-1/2 bg-cyan-500 rounded-xl font-semibold hover:bg-pink-700' href="#/Projects">Project</a>

  </div>
   
  <div className='flex flex-row bg-gradient-to-t from-pink-900 to-cyan-700  justify-center w-1/1 h-1/2 rounded-xl'>
        
  
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Projects/*' element={<Projects/>}/>
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
    
        
 </div>
  
    
 </div>

  );
}

export default App;
