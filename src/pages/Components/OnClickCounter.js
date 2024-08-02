import React, { useState } from 'react';
import CombineCounter from './CombineCounter';
const OnClickCounter = (props) => {
    //const [counter,setCounter] = useState(0);

    const {countVal, onAction} =props;
    //console.log(countVal, onAction)

    return (
        <div>
            <p>Props sent: {props.nameprops}</p>
            <h2>On Click Count: {countVal}</h2>
            <button onClick={()=>onAction()}>On Click Counter</button>
            {/* <button onClick={()=>()=>setCounter(counter + 1)}>On Hover Counter</button> */}

        </div>
    );
};

export default CombineCounter(OnClickCounter,2);