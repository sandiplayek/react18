const initialstate ={
    counter:1
}

export default function rootReducer(state, action){
    switch(action.type){
        case 'INCREMENT': {
            return {...state, counter: state.counter+1}
        }
        case 'DECREMENT' : {
            return {...state, counter: state.counter-1};
        }
        default : return state;
    }
}