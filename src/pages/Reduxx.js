import Navbar from "./Components/Navbar"
import { useSelector, useDispatch } from "react-redux"
//import { store } from "redux";
import { Helmet } from "react-helmet";
import Leftpanel from "./Leftpanel";
import { useState } from "react";

export default function Reduxx()
{
  const [fetched,setFetched] = useState({})
  const count = useSelector(state=>state.counter);
    //const count = store.getState(state=>state.counter)
    const dispatch = useDispatch();

    const fetchInfo = async () => {
      var data;
      const url = "https://jsonplaceholder.typicode.com/users";
  
    // let abc = await fetch(url)
    //   .then((res) => res.json())
    //   .then((d) => data);
    //   console.log('data',abc)

      return fetch(url) 
        .then((res) => res.json()) 
        .then((responseData) => {  
        setFetched(responseData);
        return responseData;
      }
      )

      // const response = await fetch(url);
      // setFetched(await response.json())
      // //return response.json();
      console.log('data',fetched)
  }

  function getData(){
    let abc;
    fetchInfo().then(response=>{abc= response});
    console.log('abc', abc)
  }

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
      <p></p>
        <button onClick={()=>getData()}>Fetch</button>
        {JSON.stringify(fetched)}
        </div>
        </div>

    </>)
}