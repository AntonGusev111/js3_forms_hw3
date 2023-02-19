import React from 'react'
import moment from 'moment/moment';
import { useState } from 'react';

// object['date'] = moment(object['date'],"DD.MM.YY", true)._d


export default function StepsForm() {
    const [state, setState] = useState([]);
    
    let editObject;
   

    const createRegister = (event) =>{
        event.preventDefault();
        const [date, distance] = event.target;
        if(moment(date.value, "DD.MM.YY", true).isValid() && !isNaN(distance.value)){      
            let add = {
                date:date.value,
                distance:Number(distance.value),
            };
            

            for(let i in state){
                if (state[i].date == add.date){
                    console.log('if')
                    add.distance = state[i].distance+add.distance
                    setState([...state,state.splice(i,1)]);
                    console.log('dell : ', state)
                    //setState([...state,add]); 
                    //return
                }
            };


            console.log('befor set: ', state)
            setState([...state,add]); 

            if (state.length == 0){
                setState([...state,add])
            };
        };
    };

    const editRegister = () => {
        setTimeout(()=>{
            let [date, distance]=editObject;
            date = date.value
            distance = distance.value 
            const newDict = {
                date:distance
            }
            setState(state.map(obj => obj.date == newDict.date ? newDict : obj))
            console.log('qqweqweqweqw: ', state)
        },100
        );
    };

    const getFormInfo = (event)=>{
        event.preventDefault();
        editObject=event.target
    }

    const dellRegister  = ()=>{
        setTimeout(()=>{
            const [date]=editObject;
            setState(state.filter(obj =>obj.date != date.value))
        },100
        );
    };

    

       
    console.log('after all',state)

    
    const stateRander = state.map((element, index)=>{
        return (
            <li key={index} className='registerString'>
                <form onSubmit={getFormInfo}  className='editForm'>
                    <input id='Date' type="text" className='registerinput input' defaultValue={element.date} />
                    <input id='distance' type="text" className="registerinput  input" defaultValue={element.distance}/>
                    <button onClick={editRegister} className='edit infobtn'>&#128396;</button>
                    <button onClick={dellRegister} className='dell infobtn'>&#10006;</button>
                </form>
            </li>
        )
    })
  

  return (
    <div class='main-window'>
        <form class='step-form' onSubmit={createRegister}>
            <div className="upblock">
                <label className='uplabel'>Дата (ДД.ММ.ГГ)</label>
                <label>Пройдено км</label>
            </div>
            <div className="downblock">
                <input id='Date' class="input Date"/>
                <input id='distance' class="input distance"/>
                <button class='ok_button'>ок</button>
            </div>
        </form>
        <div className="info">
            <div className="info-header">
                <label className='infoLabel'>Дата (ДД.ММ.ГГ)</label>
                <label className='infoLabel' >Пройдено км</label>
                <label className='infoLabel' >Действия</label>
            </div>
            <div className="data">
                <ul>
                    {stateRander}
                </ul>
            </div>
        </div>
    </div>
  )
}


