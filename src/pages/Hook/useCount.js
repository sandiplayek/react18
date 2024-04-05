import { useState } from "react";
export default function useCount(counts)
{
    const [count,setCount]=useState(counts);
    const increment =() =>{
        setCount(count+1);
    }
    return [count,increment];
}