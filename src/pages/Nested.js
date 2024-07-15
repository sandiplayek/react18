import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Leftpanel from './Leftpanel';
const Nested = props => {
    return (<>
        <Navbar />
        <div className="parent after">
            <Leftpanel />
            <div className="bodyContent">
            <div style={{paddingTop: '50px'}}>
            <div>Nested Route</div>
            <div><input name='search' placeholder='Serch here..' /></div>
            <div>
                <Link to={'product1'}>Product1</Link> | 
                <Link to={'product2'}>Product 2</Link></div>
            </div>
            <Outlet />
        </div>
        </div>
    
        </>);
};

export default Nested;