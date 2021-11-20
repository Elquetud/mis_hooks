import React from 'react'
import { UseForm } from '../../hooks/UseForm';

export const TodoAdd = ( {handleAdd} ) => {

    const [{description}, inputChange, reset]= UseForm({
        description:''

    });
    
    const handsubmit =(e)=>{
        e.preventDefault();
        if(description.trim().length <=1){
            return;
        }
        const newtodo = {
            id: new Date().getTime(),
            desc:description,
            done:false
        };
        
        handleAdd(newtodo);
        
        reset();                     
    
    }
    return (
        <>
             <h4>Agregar todo</h4><hr />

                <form action="" onSubmit={handsubmit}>
                    <input 
                    type="text" name="description" placeholder="Aprender"
                    autoComplete="off"
                    className="form-control"
                    value={description}          
                    onChange={inputChange}

                    />
                        <button className type="submit"
                        className="btn btn-outline-primary mt-1 btn-block"

                        >Agregar 
                        
                        </button>
                </form>
        </>
    )
}
