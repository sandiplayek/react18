import { useContext } from "react"
import { UserContext } from "./createContext";
export default function Contextinner(){
    const user= useContext(UserContext);
    console.log('user',user)
    return (<div>
        <div>Contextinner Component</div>
        <div>Context inner {user}</div>
        
        </div>)
}