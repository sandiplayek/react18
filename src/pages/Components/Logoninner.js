import { useState } from "react"
import { useContext } from "react"
import {authcontext} from "./authcontext"
export default function Logoninner(){
    let [login,updateState] = useContext(authcontext)

    return (<>
    <div>Login Inner </div>
    <button onClick={()=>updateState(!login)}>Login</button>
    {login? <p>Logged In</p> : <p>Logged Out</p>}


    </>)
}