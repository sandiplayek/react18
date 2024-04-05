import Navbar from "./Components/Navbar"
import { useState,useEffect } from "react"
import { useIncrementDecrement } from "./Hook/useIncrementDecrement";
import { useSelector } from "react-redux";
import Leftpanel from "./Leftpanel";

export default function Home()
{
    const [count,increment,decrement] = useIncrementDecrement(0);
    // const [count,setCount]= useState(0);
    // const increment =()=>{
    //     console.log('aaa')
    //     setCount(count+1)
    // }

    // const decrement =()=>{
    //     console.log('aaa')
    //     setCount(count-1)
    // }

    const count_stored = useSelector(state=>state.counter);



    return (<>
    <Navbar />
    <div className="parent">
    <Leftpanel />
    <div className="bodyContent">
    

        <div>Home Count {count}</div>
        <div>Count stored from redux-store: {count_stored}</div>
        <div style={{marginBottom:'10px'}}> Custom Hook used && redux state fetched</div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
    </div>
    </>)
}