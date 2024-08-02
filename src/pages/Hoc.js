import React from 'react';
import Helmet from "react-helmet";
import Navbar from './Components/Navbar';
import Leftpanel from './Leftpanel';
import OnClickCounter from './Components/OnClickCounter';
import OnHoverCounter from './Components/OnHoverCounter';
const Hoc = () => {
    return (
        <>
        <Helmet>
        <title>React-Higher Order component page</title>
        <meta name="description" content="React-redux page Helmet application" />
        </Helmet>
        <Navbar />
        <div className="parent">
        <Leftpanel />
        <div className="bodyContent">
        <OnClickCounter nameprops="sandip" />
        <OnHoverCounter />
        </div>
        </div>
        </>

    );
};

export default Hoc;