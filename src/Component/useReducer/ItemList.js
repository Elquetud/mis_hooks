import React from 'react'

export const ItemList = ({todo,index,handledelete,handletodogle}) => {
    return (
        <li key={todo.id} className="list-group-item" >
                    <h3  className={`${todo.done && 'complete'}`} 
                        onClick={()=>handletodogle(todo.id)}
                    >  {index+1}. {todo.desc} </h3>
                    <button className="btn btn-danger"
                    onClick={()=>handledelete(todo.id)}
                    >
                        Borrar

                    </button>
         </li>
    )
}
