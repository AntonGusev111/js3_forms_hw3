import React from 'react'
import { useState } from 'react';


export default function StepsInputs(props) {

    const { values, onChange } = props;

    let [date, setDate] = useState(''); 
    let [dist, setDist] = useState('');
    let [prev, setPrev] = useState(''); 

    if (values.date != prev){
        setDate([values.date]);
        setDist([values.dist])
        setPrev(values.date)
    }
    
    

    const handleSetDate = (e) => {
        setDate([e.target.value])
    }

    const handleSetDist = (e) => {
        setDist([e.target.value])
    }
  

   
    const handleSendRow = (e) =>{
        e.preventDefault();
        const row = [
            date, dist,
        ];
        console.log('12213', row)

        setDate('');
        setDist('');

        onChange(row);
    };



    


  return (
    <div>
      <form className='step-form' onSubmit={handleSendRow}>
            <div className="upblock">
                <label className='uplabel'>Дата (ДД.ММ.ГГ)</label>
                <label>Пройдено км</label>
            </div>
            <div className="downblock">
                <input id='date' onInput={handleSetDate}  value={date} className="input Date"/>
                <input id='dist' onInput={handleSetDist} value={dist} className="input distance"/>
                <button className='ok_button'>ок</button>
            </div>
        </form>
    </div>
    
  )
}
