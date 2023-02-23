import React from 'react'
import { useState } from 'react';


export default function EditStapsBlock(props) {
    const {table} = props;
    const {onChange} = props;

    const handleSetDate = (e)=>{
      setDate(e.target.value)
    }

    const dellRow = (e) => {
      const key = e.target.parentElement.firstChild.innerText
      const obj ={
        key: key,
        action: 'dell'
      }
      onChange(obj)
    }


    const editRow = (e) =>{
      const key= e.target.parentElement.children[0].innerText
      const dist = e.target.parentElement.children[1].innerText
      const obj ={
        key: key,
        action: 'edit',
        dist:dist
      };
      onChange(obj)
    }


    const stateRender = table.map((element, index)=>{
            return (
                <li key={index} className='registerString'>
                    <div className='editRow'>
                        <div id='Date' type="text" className='registerDateRow'>{element.date}</div>
                        <div id='distance' type="text" className="registerDistRow">{element.dist}</div>
                        <button onClick={editRow} className='edit infobtn'>&#128396;</button>
                        <button onClick={dellRow} className='dell infobtn'>&#10006;</button>
                    </div>
                </li>
            )
        })
    
  return (
    <div>
      {stateRender}
    </div>
  )
}
