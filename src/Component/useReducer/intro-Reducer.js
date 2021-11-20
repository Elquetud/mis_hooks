const inicialState= [{
    id:1,
    nombre:'comprar pan',
    done:false
}];

const todoreducer = (state = inicialState,action)=>{
    if(action?.type === 'agregar') {

        return [...state, action.payload]
    }
    return state;
}


let todos = todoreducer();

const nuevi = {
    id:2,
    nombre:'comprar leche',
    done:false
}
const action = {
   type:'agregar',
   payload: nuevi

}
todos = todoreducer(todos,action);

console.log(todos);


