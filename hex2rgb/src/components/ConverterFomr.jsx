import { useState } from 'react'
import React from 'react'


export default function ConverterFomr(props) {
    const {color} = props;

  

    if (color == 'Error'){
      document.body.style.backgroundColor='red'
    } else{
      document.body.style.backgroundColor=color;
    }

  return (
    <div>
      <form>
        
        <br/>
        <div className="ansdiv">
            <label class= 'answer'>{color}</label>
        </div>
      </form>
    </div>
  )
}
