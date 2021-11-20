import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutPage = () => {
    const {user,setuser} = useContext(UserContext);

    const handleClick = ()=>{
        setuser({});
    }


    return (
        <>
            <h1>About Page</h1>
            <hr />
            <pre>
                {JSON.stringify(user,null,3)}

            </pre>

            <button className="btn btn-warning"
                onClick={handleClick}
            
            >Logout</button>
        </>
    )
}
