import React, { useState } from 'react'
import { MultipleCustumHooks } from '../example/MultipleCustumHooks'
import '../useEffect/efect.css'

export const RealExample = () => {
    const [state, setstate] = useState(false)

    return (
        <>
            <h1>RealExampleRef</h1>
           { state &&  <MultipleCustumHooks/>}

            <button
            className="btn btn-primary"
            onClick={()=>{
                setstate(!state);
            }}
            >

              Ocultar
            </button>

        </>


    )
}
