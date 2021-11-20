import React, { useState } from 'react';
import './counter.css';

export const CounterApp = () => {
    const [state , setsate] = useState({
        counter1:10,
        counter2:20
    });
   
    const {counter1,counter2} = state;


    return (
        <>
            <h1>Counter= {counter1} </h1>
            <h1>Counter2= {counter2} </h1>
            <hr />
           
            <button className="btn btn-primary" onClick={()=>{
                setsate({
                    ...state,
                    counter1: counter1+1
                });
            }}>

            Agregar +1
            </button>
        </>
    )
}
