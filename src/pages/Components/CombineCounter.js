import React, { useState } from 'react';

const CombineCounter=(Propscomponent, incrementedBy)=> {
    return function InnerCounter(props){
        console.log('props',props)
        const [counter,setCounter] = useState(0);

        return (<>
            <Propscomponent countVal={counter} {...props} onAction={()=>setCounter(counter + incrementedBy)} />
        </>)}
}

export default CombineCounter;