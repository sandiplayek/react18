import Navbar from "./Components/Navbar"
import { useSelector, useDispatch } from "react-redux"
//import { store } from "redux";
import { Helmet } from "react-helmet";
import Leftpanel from "./Leftpanel";

export default function Reduxx()
{
   const count = useSelector(state=>state.counter);
    //const count = store.getState(state=>state.counter)
    const dispatch = useDispatch();
    return (
    <>
    <Helmet>
        <title>React-Redux page</title>
        <meta name="description" content="React-redux page Helmet application" />
      </Helmet>
        <Navbar />
        <div className="parent">
        <Leftpanel />
        <div className="bodyContent">
        
        <div>Home Count {count}</div>
        <button onClick={()=>dispatch({type:'INCREMENT'})} >Increment</button>
        <button onClick={()=>dispatch({type:'DECREMENT'})} >Decrement</button>
        </div>
        </div>

    </>)
}