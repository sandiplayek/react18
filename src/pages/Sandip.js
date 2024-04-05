import { useState } from "react"
import useSandip from "./Hook/useSandip"
import Navbar from "./Components/Navbar";
import Leftpanel from "./Leftpanel";

export default function Sandip(){
    // let [countt,setCountt] =useState(0);
    // const increment =() =>{
    //     setCountt(countt+1);
    // }
    const [count,increment,decremet]=useSandip(5);

    return (<>
    <Navbar />
    <div className="parent">
        <Leftpanel />
        <div className="bodyContent">
        
        <div>Count value {count}</div>
        <div><button onClick={increment}>Increment</button></div>
        <div><button onClick={decremet}>Decrement</button></div>
    </div>
    </div>

    </>)
}