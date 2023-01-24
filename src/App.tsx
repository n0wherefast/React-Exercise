import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormatDates from './components/FormatDates';
import EvenOdd from './components/EvenOdd';
import ArraySum from './components/ArraySum';
import DateSpread from './components/DateSpread';

function App() {
  return (
  <div>
    <h1 className='flex justify-center text-6xl font-bold p-2 m-2 text-emerald-700'> React Exercise</h1>
    <div className='flex flex-row bg-sky-500 flex-wrap justify-center '>
        <FormatDates/> 
        <EvenOdd/>
        <ArraySum/>
        <DateSpread/>
    </div>
 </div>

  );
}

export default App;
