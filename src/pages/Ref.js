import { useState,useEffect, useRef } from "react"
import Navbar from "./Components/Navbar";
import Leftpanel from "./Leftpanel";

export default function Ref()
{
    const [count,setCount]= useState(0);
    const prevCountRef =useRef();
    const inputFocus = useRef();

    useEffect(()=>{
        prevCountRef.current = count;
    },[count]);

    const setFcus = () =>{
        //console.log(e.target.value);
        inputFocus.current.focus();
    }
    const changevalue = (e) =>{
        console.log(e.target.value);
    }


    return (<>
    <Navbar />
    <div className="parent">
        <Leftpanel />
        <div className="bodyContent">
        
            <div>useRef Example</div>
            <p>Current Count : {count} Previous count : {prevCountRef.current}</p>
            <input name="wao" ref={inputFocus} onChange={(e)=>changevalue(e)} />
            <button onClick={(e)=>setCount(count+1)}>Click</button>
            <button onClick={(e)=>setFcus()}>Focus</button>
        </div>
    </div>

    
    </>)
}