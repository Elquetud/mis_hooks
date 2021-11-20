import React from 'react';
import { useCounter } from '../../hooks/useCounter';

import './counter.css';

export const CounterWhitCustomHook = () => {

   const {counter,increment,decrement,reset} = useCounter(100);
   
    return (
        <>
         <h1>Counter Whit hook: {counter} </h1>
            <hr />
        <hr />
         <button className="btn btn-primary" onClick={ ()=>{ increment(2)}}>Agregar</button>   
         <hr />
         <button className="btn btn-info" onClick={reset}>reset </button>
        <hr />
        <button className="btn btn-info" onClick={()=>{ decrement(2)}}>Quitar </button>
        <hr />
        
        </>
    )
    
}
