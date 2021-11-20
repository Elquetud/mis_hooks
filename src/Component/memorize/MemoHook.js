import React, { useMemo, useState } from 'react'
import { procesopesado } from '../../helpers/ProcesoPesado';
import { useCounter } from '../../hooks/useCounter'
import '../useEffect/efect.css'


export const MemoHook = () => {
    const {counter,increment}=  useCounter(2000);
    const [show, setShow] = useState(true);
    
    
   const memopesado = useMemo(() => procesopesado(counter), [counter])  ;

    return (
        <>

            <h3>Counter : <small> {counter} </small> </h3>
            <hr />
            <p>{memopesado} </p>

            <button
                className="btn btn-primary"
                onClick={increment}

            >+1</button>
            <hr />
            
            <button
                className="btn btn-primary"
                onClick= {()=>{
                    setShow(!show);
                }}
            >
                
                Show/Hide {JSON.stringify(show)} </button>

        </>
    )


}
