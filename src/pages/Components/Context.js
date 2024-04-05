import Contextinner from "./Contextinner";
import {UserContext} from './createContext'
import { useContext } from "react";
export default function Context(){
    const user= useContext(UserContext);

    return (<div>
        <div>Context Component</div>
        <Contextinner />
        <div>Context {user}</div>
        </div>);
}