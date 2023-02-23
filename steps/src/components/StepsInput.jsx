import React from 'react'


import { useState } from 'react';


export default function StepsInputs(props) {
    const {onChange} = props;
    const {values} = props;
    let [date, setDate] = useState(values['date']);
    let [dist, setDist] = useState(values['dist']);


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
        ]

        setDate('');
        setDist('');

        onChange(row);
    };

    


  return (
    <div>
      <form class='step-form' onSubmit={handleSendRow}>
            <div className="upblock">
                <label className='uplabel'>Дата (ДД.ММ.ГГ)</label>
                <label>Пройдено км</label>
            </div>
            <div className="downblock">
                <input id='date' onInput={handleSetDate}  value={date} class="input Date"/>
                <input id='dist' onInput={handleSetDist} value={dist} class="input distance"/>
                <button class='ok_button'>ок</button>
            </div>
        </form>
    </div>
    
  )
}
