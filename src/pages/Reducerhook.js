import React from 'react';
import { useReducer } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './Components/Navbar';
import Leftpanel from './Leftpanel';
const initialState ={ count : 0 }

function countReducer(state,action){
    switch (action.type){
        case 'increment':
            return {count: state.count+action.payload}
        case 'decrement' :
            return {count: state.count-action.payload}
        default:
            return state
    }
}

const Reducerhook = () => {
    const [statee, dispatchh] = useReducer(countReducer,initialState)
    return (
        <>
            <Navbar />
            <div className="parent">
            <Leftpanel />
            <div className="bodyContent">
            <Helmet>
                <title>useReducer Hook</title>
            </Helmet>
            <p>Count : {statee.count}</p>
            <button onClick={()=>dispatchh({type : 'increment',payload : 10})}>Increment</button>
            <button onClick={()=>dispatchh({type : 'decrement',payload : 10})}>Decrement</button>
            </div>
            </div>
        </>
    );
};

export default Reducerhook;