import Navbar from "./Components/Navbar"
import { useState,useEffect } from "react";
import useCount from "./Hook/useCount";
import Leftpanel from "./Leftpanel";

export default function Test()
{
    // const [count,setCount]=useState(0);
    // const increment =() =>{
    //     setCount(count+1);
    // }
    useEffect(() => {
        document.title = 'Title changed by document.title';
      }, []);
    
    let [count,increment] = useCount(5);
    //let count =0;
    return (
    <>
        <Navbar />
        <div className="parent">
        <Leftpanel />
        <div className="bodyContent">
        
        count --- {count}
        <div>Test</div>
        <button onClick={increment}> Increment</button>
        </div>
        </div>
    </>);
}