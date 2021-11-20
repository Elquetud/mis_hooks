import  { useState } from 'react'

export const UseForm = (initialState={}) => {
    
 const [state, setstate] = useState(initialState);

 const reset = ()=>{
    setstate(initialState);

 }           
 const inputChange = ({target})=>{
        
    setstate({
        ...state,
       [target.name]: target.value
    });   

} 

return [state, inputChange,reset ];


}



