import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [cord, setcord] = useState({x:0,y:0});
    const {x,y} = cord; 

    useEffect(() => {
        
        const mousevome = (e)=>{
              /**console.log(cord);*/
            const cord = {x:e.x, y:e.y}
            console.log('D:');
            setcord(cord);
        }
        window.addEventListener('mousemove', mousevome);
        
        return () => {
           console.log("Mensaje limpiado");
           window.removeEventListener('mousemove', mousevome);
        }

    }, [])

    return (

        <>
          <h2>Eres genial</h2>  
          <p>
            x: {x}, 
            y: {y}

          </p>
        </>
    )
}
