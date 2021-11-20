import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { UseFetch } from '../../hooks/UseFetch'
import '../useEffect/efect.css'

export const Layout = () => {

   const {counter,increment}= useCounter(1) ;

   const {data} = UseFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

   const {quote} = !!data && data[0];

   //console.log(state);
   //console.log(author,quote);

   return (
        <>
            <h1>Layout Effect</h1>
            <hr />
            
                <blockquote className="blockquote text-right">
                <p className="mb-0"> {quote} </p>
                <hr />
                
                </blockquote> 
            
            <button className="btn btn-primary"
             onClick={increment}   
            
            >Siguiente frase</button>
        
            
        </>
    )
       
}
