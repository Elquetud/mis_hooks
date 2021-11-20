import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginPage = () => {
    //obtener la referencia del context 
    //setuser 
    const {user, setuser} = useContext(UserContext);
    
    return (
        <>
            <h1>Login Page</h1>
            <hr />
            <button className="btn btn-primary"
                onClick={()=> setuser({user:'Elquetud'})}
            
            >
                
                
             Login</button>
        </>
    )
}
