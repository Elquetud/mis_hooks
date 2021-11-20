import { useState } from "react";

export const useCounter = (initialState = 10) => {
  
  const [counter, setcounter] = useState(initialState);
  
  const reset = ()=>{
      setcounter(initialState);
  }
  const increment = ()=>{

    setcounter(counter+1);

  }
  const decrement = ()=>{

    setcounter(counter-1);

  }
  /**
  const increment = (factor =1)=>{

    setcounter(counter+factor);

  } */
  
  
  

  return {
      counter,
      increment,
      decrement,
      reset
  }


}