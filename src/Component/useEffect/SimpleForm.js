import React, { useEffect, useState } from 'react';
import './efect.css';
import { Message } from './Message';

export const SimpleForm = () => {
    const [form, setform] = useState({
        name:'',
        email:''
    });
      
    const{name,email}= form;


    useEffect(()=>{
        console.log("hey")

    }, []);

    useEffect(()=>{
        //console.log("el form cambio");

    }, [form]);

    useEffect(()=>{
        //console.log("el email cambio");

    }, [email]);

    const inputChange = ({target})=>{
        
         setform({
             ...form,
            [target.name]: target.value
         });   

    } 

    return (
        <>
            <h1>useEffect</h1>
            <hr />
            <div className="form-group">
                <input type="text" name="name" 
                 className="form-control"
                 placeholder="tu nombre"
                 autoComplete="off"
                 value={name}
                 onChange={inputChange}

                />
            </div>

            <div className="form-group">
                <input type="text" name="email" 
                 className="form-control"
                 placeholder="email@gmail.com"
                 autoComplete="off"
                 value={email}
                 onChange={inputChange}

                />
            </div>

            {(name ==='123') && <Message/> }
            
        </>
    );
}
