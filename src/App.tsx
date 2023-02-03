import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormatDates from './components/FormatDates';
import EvenOdd from './components/EvenOdd';
import ArraySum from './components/ArraySum';
import DateSpread from './components/DateSpread';
import CardGeneretor from './components/CardGeneretor';
import DinamicTable from './components/DinamicTable';
import CardsDeck from './components/CardsDeck';



function App() {
  return (
  <div className='bg-slate-600 justify-center items-center w-11/12'>
    <div className='flex flex-row justify-center'>
      <h1 className=' flex justify-center items-center text-6xl font-bold p-2 m-2 text-sky-300'> React Exercise</h1>
      <img className='w-32 h-32 justify-center items-center' src={logo}  alt="" />
    </div>
    
    <div className='flex flex-row bg-slate-600 flex-wrap justify-center p-4'>
        <FormatDates/> 
        <EvenOdd/>
        <ArraySum/>
        <DateSpread/>
        <CardGeneretor/>
          <DinamicTable/>    
           <CardsDeck/>
    </div>
 </div>

  );
}

export default App;
