import {authcontext} from "./Components/authcontext"
import { useState } from "react"
import Logoninner from "./Components/Logoninner"
import Navbar from "./Components/Navbar"

export default function Login(){
    let [login,setLogin] =useState(false)
    const updateState =(val) =>{
        setLogin(val);
    }
    return (<>
    <Navbar/>
    <authcontext.Provider value={[login, updateState]}>
    <div>Login status {login? 'yes': 'no'}</div>
    <Logoninner />
    </authcontext.Provider>

    </>)
}