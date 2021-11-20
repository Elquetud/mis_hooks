import React, { useEffect, useReducer } from 'react'
import { ListaTodos } from './ListaTodos';
import './style.css'
import { TodoAdd } from './TodoAdd';
import { todoreducer } from './todoReducer';

/*
const initialState = [{
}];
*/
 const init = ()=>{

    return JSON.parse(localStorage.getItem('todos')) || [];

    /*  return  [{
        id: new Date().getTime(),
        desc:'Aprender reducer',
        done:false}
        ];
        */
 }

export const TodoApp = () => {
    
    const [todos,dispatch] = useReducer(todoreducer, [] ,init);


    useEffect(() => {
       localStorage.setItem('todos',JSON.stringify(todos));

    }, [todos])
    
    const handledelete = (todoId)=>{
        console.log(todoId);
        //crear la action
        const actiondel= {
            type:'delete',
            payload: todoId
        }
        //dispacht
        dispatch(actiondel);
    }

    const handletodogle = (todoID)=>{
        dispatch({
            type:'togo',
            payload: todoID
        })
    }

    const handleAdd = (newtodo)=>{
         
        dispatch({
            type:'add',
            payload:newtodo
        });
        
    }


    return (
        
        <>  <h1>todos ({todos.length+1}) </h1>
        <hr />
        <br />
        
        <div className="row">

            <div className="col-7">
        
            <ListaTodos todos={todos}  
                        handledelete={handledelete}
                        handletodogle={handletodogle}
            >
            </ListaTodos>
                
                
            </div>


            <div className="col-5">
                <TodoAdd 
                    handleAdd={handleAdd}
                >

                </TodoAdd>

            </div>

            
        </div>
        


        </> 
    )   
}
