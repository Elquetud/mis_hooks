import React, { useRef } from 'react';
import '../useEffect/efect.css';


export const FocusScreen = () => {

   const inputref = useRef();
   //console.log(ref);

   const handleclick = ()=>{
       inputref.current.select();
   }

    return (
        <>
            <h1>FocusScreen</h1>
            <hr />
            <input type="text"
                ref={inputref}
                className="form-control"
                placeholder="Su nombre"

            />

            <button 
            className="btn btn-outline-primary mt-5"
            onClick={handleclick}
            >
                    
            Focus</button>

        </>
    )
}
