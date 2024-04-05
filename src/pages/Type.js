import { Helmet } from "react-helmet";
import ContextComponent from "./Components/Context";
import { useContext,createContext,useState } from "react";
import { UserContext } from "./Components/createContext";
import Navbar from "./Components/Navbar";
import Leftpanel from "./Leftpanel";
//const UserContext = createContext();

export default function Type(){
    const [user, setUser] = useState("Jesse Hall");


    return (<>
        <Navbar />
        <div className="parent">
            <Leftpanel />
            <div className="bodyContent">
        
                Type script page
                <Helmet>
                    <title>Type Script page</title>
                </Helmet>

                <UserContext.Provider value={user}>
                <ContextComponent />
                </UserContext.Provider>
            </div>
        </div>

    </>);
}