import { useParams } from "react-router-dom"
import Navbar from "./Components/Navbar";
import Leftpanel from "./Leftpanel";

export default function Slug(){
    let {id, val}= useParams();
    return (<>
    <Navbar />
    <div className="parent after">
        <Leftpanel />
        <div className="bodyContent">
        <div style={{paddingTop: '50px'}}>
    
    Slug {id}--{val}
    </div>
    </div>
    </div>
    
    </>)
}