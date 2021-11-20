import React from 'react'
import { ItemList } from './ItemList'

export const ListaTodos = ({todos,handledelete,handletodogle}) => {
    return (
        
            <ul className="list-group list-group-flush">

             {
                todos.map( (todo,i) =>(
                    <ItemList 
                    key={todo.id}
                    todo={todo}
                    index={i}
                    handledelete={handledelete}
                    handletodogle={handletodogle}
                    >
                    </ItemList>
                ))
                
                }

            </ul>
        
    )
}
