import React, { useEffect } from 'react';
import { UseForm } from '../../hooks/UseForm';
import './efect.css';


export const FormWhitCustum = () => {

    const [form, inputChange] = UseForm({
        name:'',
        email:'',
        password:''
    });
      
    const{name,email, password}= form;
    
    useEffect(() => {
       console.log("El email cambio")
    }, [email])

    const submit = (e)=>{
        e.preventDefault();
        console.log(form);

    }
    return (
        <form onSubmit={submit}>

            <h1>FormWhitCustumHooks</h1>
            <hr />
            <div className="form-group">
                <input type="text" name="name" 
                 className="form-control"
                 placeholder="Name"
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

            <div className="form-group">
                <input type="password" name="password" 
                 className="form-control"
                 placeholder="****"
                 value={password}
                 onChange={inputChange}

                />
            </div>
            <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
    );
}
