import React, { useState } from 'react';
import CombineCounter from './CombineCounter';
const OnHoverCounter = (props) => {
    //const [counter,setCounter] = useState(0);
    const {countVal, onAction} =props; 
    return (
        <div>
            <h2>On Hover Count: {countVal}</h2>
            {/* <button onMouseOver={()=>setCounter(counter + 1)}>On Click Counter</button> */}
            <button onMouseOver={()=>onAction()}>On Hover Counter</button>

        </div>
    );
};

export default CombineCounter(OnHoverCounter,5);