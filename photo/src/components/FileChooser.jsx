import React, {useRef} from 'react'
import { useState } from 'react';

export default function FileChooser() {
    const fileRef = useRef();
    const [state, setState] = useState([]);


    const fileToDataUrl = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
        
          fileReader.addEventListener('load', evt => {
            resolve(evt.currentTarget.result);
          });
          
          fileReader.addEventListener('error', evt => {
            reject(new Error(evt.currentTarget.error));
          });
          
          fileReader.readAsDataURL(file);
        });
      };
      
      const handleSelect = async (evt) => {
          const files = [...evt.target.files];
          const urls = await Promise.all(files.map(o => fileToDataUrl(o)));
          const[data] = urls
          setState([...state, data])
      };

      const deleteImg = (event) =>{
        const src = event.target.previousElementSibling.src;
        setState(state.filter(url => url !== src))
      }


      const renderState = state.map((element, index)=>{
        return(<>
            <img className='imgPrev' key={index} src={element} alt="something wrong" />
            <div onClick={deleteImg} key={index+1} className="delete-img">X</div>
        </>)
      })

      console.log(state)

    return (
    <div>
        <form >
            <div  className='CTS' htmlFor="formFile">Click to select</div>
            <input onChange={handleSelect} ref = {fileRef} className='fileInput' type="file" id='formFile'/>
        </form>
        <div className='upload-imgs'>
            {renderState}
        </div>
    </div>
  )
}
