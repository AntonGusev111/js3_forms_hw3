import './App.css'
import { useState } from 'react'
import ConverterFomr from './components/ConverterFomr'

function App() {

  const [color, setColor] = useState();


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
          setColor('Error')
      } else{
          setColor(`rgb(${rgbColor['r']},${rgbColor['g']}, ${rgbColor['b']})`)
      }
  };

  painter = debounce(painter, 1000)
  

  return (
    <div className="App">
      <input  id='color' class='color'  onChange={painter} ></input>
     <ConverterFomr color = {color} />
    </div>
  )
}

export default App
