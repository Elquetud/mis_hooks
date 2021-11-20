import React, { useCallback, useEffect, useState } from 'react'
import '../useEffect/efect.css'
import { ShowIncrement } from './ShowIncrement';

export const CallBack = () => {
    
    const [counter, setcounter] = useState(1);
    /** 
    const increment = ()=>{
        

    }*/
        const increment =  useCallback((num)=>{
            setcounter(c =>c+ num);
        }, [setcounter]);

       useEffect(() => {
            
       }, [increment])
   

    return (
        <>
            <h1>useCallbacks hooks</h1>
                <hr />
                <ShowIncrement increment={increment}></ShowIncrement>

             <h1>Counter: {counter} </h1>   
        </>
    )
                  

}
