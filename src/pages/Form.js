import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Leftpanel from './Leftpanel';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Helmet } from 'react-helmet';


const Form = () => {
    const [formData, setFormData] = useState({name: "", email : "", address : ""});

    const handleSubmit =(event) =>{
        event.preventDefault();
        console.log('name: ' + formData.name, 'email: ' + formData.email, 'address: ' + formData.address)
    }

    const handleChange =(event) =>{
        let {name,value} = event.target;
        //setFormData({...formData, [name]: value});
        setFormData((prevFromdata) => ({...prevFromdata, [name]:value}))
    }

    let code_string =`const Form = () => {
    const [formData, setFormData] = useState({name: "", email : "", address : ""});

    const handleSubmit =(event) =>{
        event.preventDefault();
        console.log('name: ' + formData.name, 'email: ' + formData.email, 'address: ' + formData.address)
    }

    const handleChange =(event) =>{
        let {name,value} = event.target;
        //setFormData({...formData, [name]: value});
        setFormData((prevFromdata) => ({...prevFromdata, [name]:value}));
    }

    return (<>
        <Navbar />
        <div className="parent after">
            <Leftpanel />
            <div className="bodyContent">
                <div style={{paddingTop: '50px'}}>
                    <div>React Form</div>
                    <form onSubmit={handleSubmit}>
                        <p>
                        <label>Name:</label>
                        <input type='text' name='name' value={formData.name} onChange={handleChange} />
                        </p>
                        <p>
                        <label>Email:</label>
                        <input type='text' name='email' value={formData.email} onChange={handleChange} />
                        </p>
                        <p>
                        <label>Address:</label>
                        <textarea name='address' onChange={handleChange} value={formData.address} />
                        </p>
                        <button type='submit'>Submit</button>
                    </form>
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                    </SyntaxHighlighter>
            
                </div>
            </div>
        </div>
    
        </>`

    return (<>
    <Helmet>
        <title>Submit form with syntaxheighlighter</title>
    </Helmet>
        <Navbar />
        <div className="parent after">
            <Leftpanel />
            <div className="bodyContent">
                <div style={{paddingTop: '50px'}}>
                    <div>React Form</div>
                    <p style={{backgroundColor: 'black', color: 'white', height:'50px', alignContent: 'center'}}>
                        Console: {' name: ' + formData.name+ ' email: ' + formData.email+ ' address: ' + formData.address}
                    </p>
                    <form onSubmit={handleSubmit}>
                        <p>
                        <label>Name:</label>
                        <input type='text' name='name' value={formData.name} onChange={handleChange} />
                        </p>
                        <p>
                        <label>Email:</label>
                        <input type='text' name='email' value={formData.email} onChange={handleChange} />
                        </p>
                        <p style={{alignContent: 'center'}}>
                        <label>Address:</label>
                        <textarea name='address' onChange={handleChange} value={formData.address} />
                        </p>
                        <button type='submit'>Submit</button>
                    </form>
                    <SyntaxHighlighter language="javascript" style={solarizedlight}>
                        {code_string}
                    </SyntaxHighlighter>
            
                </div>
            </div>
        </div>
    
        </>
    );
};

export default Form;