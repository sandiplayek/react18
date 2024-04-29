import Navbar from './Components/Navbar';
import Leftpanel from './Leftpanel';
import Purecomp from './Purecomp';
import Regularcomp from './Regularcomp';
import { Component } from 'react';
// import { useState,useEffect } from 'react';

// export default function Pure(){
//     const [username,setUsername] =useState('sandip');
//     useEffect(()=>{
//         setTimeout(() => {
//             setUsername('sandip')
//         }, 2000);
//     })

//     return (<>
//             <Navbar />
//             <div className="parent after">
//                 <Leftpanel />
//                 <div className="bodyContent">
//                     <Regularcomp uname={username} />
//                     <Purecomp uname={username} />

//                     <button onClick={()=>setUsername('sandips')} >Change</button>
    
//                 </div>
//             </div>
//     </>)

// }

export default class Pure extends Component {
constructor(props){
    super(props);
   this.state ={username: 'sandip'} 
}

    componentDidMount(){
             setTimeout(()=>{            
                this.setState({username: 'sandip'});
                console.log('ohhooo')
            },2000)
        }
        

    render (){
        return (<>
            <Navbar />
            <div className="parent after">
                <Leftpanel />
                <div className="bodyContent">
                    <Regularcomp uname={this.state.username} />
                    <Purecomp uname={this.state.username} />
    
                </div>
            </div>
        
            </>)
    }
}
