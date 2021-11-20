import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { UseFetch } from '../../hooks/UseFetch'
import '../useEffect/efect.css'

export const MultipleCustumHooks = () => {
   const {counter,increment}= useCounter(1) ;

   const {loading,data} = UseFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

   const {author,quote} = !!data && data[0];

   //console.log(state);
   console.log(author,quote);

   return (
        <>
            <h1>breakingbadapi</h1>
            <hr />
            {
                loading ? (<div className="alert alert-info text-center">
                Cargando...
                 </div>  )
                    :
                (<blockquote className="blockquote text-right">
                <p className="mb-0"> {quote} </p>
                <hr />
                <footer className="blockquote-footer">{author} </footer>
                </blockquote> 
                )

            }   
            <button className="btn btn-primary"
             onClick={increment}   
            
            >Siguiente frase</button>
        
            
        </>
    )
       
}
