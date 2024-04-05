import { useState } from "react";
export function useIncrementDecrement(initialVal)
{
    const [count,setCount]= useState(initialVal);
    const increment =()=>{
        console.log('aaa')
        setCount(count+1)
    }

    const decrement =()=>{
        console.log('aaa')
        setCount(count-1)
    }
    return [count, increment, decrement];
    //return <>abc</>
}