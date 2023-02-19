import { useState } from 'react'
import React from 'react'

export default function ConverterFomr() {
    const [color, setColor] = useState()

    function hex2rgb(c) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(c);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    const debounce = (func, ms) =>{
        let timeout;

        return function () {
            const fnCall = () => {func.apply(this, arguments)}
            clearTimeout(timeout)
            timeout = setTimeout(fnCall, ms)
        }
    };

    let painter = ({target})=>{
        const {value} = target;
        let rgbColor = hex2rgb(value)
        if (rgbColor == null){
            document.body.style.backgroundColor='red'
            setColor('Error')
        } else{
            document.body.style.backgroundColor=value;
            setColor(`rgb(${rgbColor['r']},${rgbColor['g']}, ${rgbColor['b']})`)
        }
    };

    painter = debounce(painter, 1000)

  return (
    <div>
      <form>
        <input  id='color' class='color'  onChange={painter} ></input>
        <br/>
        <div className="ansdiv">
            <label class= 'answer'>{color}</label>
        </div>
      </form>
    </div>
  )
}
