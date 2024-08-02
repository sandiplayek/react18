import React, { useCallback, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './Components/Navbar';
import Leftpanel from './Leftpanel';
import Remember from './Components/remember';
import Cookies from 'js-cookie';
function Memoo(props) {
    const [count,setCount]= useState(0);
    const [name,setName]= useState('sandip');

    const handleChangeCount =useCallback(() =>{
        setCount(count+1);
    },[count]);

    const changeName =() =>{
        setName(name=='sandip'? 'Layek' : 'sandip');
    }
    const isEven =useMemo(() =>{
        console.log('isEven called')
        return (count%2==1)? 'odd': 'even';
    },[count]);

    let xyz = Cookies.get('name');

    return (<>
        <Helmet>
            <title>useMemo, Memo and useCallback</title>
        </Helmet>
        <Navbar />
        <div className="parent after">
            <Leftpanel />
            <div className="bodyContent">
                <div style={{paddingTop: '50px'}}>
                    <p style={{backgroundColor: 'yellow', padding: '5px'}}>Please check the console. here ChangeName button is on the parent and
                        <br /> Increase Count in the child remember Component</p>
                Return Memoo -- {count} {name} {isEven}
                <Remember data={count} changecount={handleChangeCount} />
                <p><button onClick={changeName}>ChangeName</button></p>
                <p>Js-cookie from home page: {xyz}</p>
            </div>
            </div>
        </div>
        </>
        
    );
}

export default Memoo;