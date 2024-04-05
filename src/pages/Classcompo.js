import { Component, createRef } from "react"
import Navbar from "./Components/Navbar";
import { Helmet } from "react-helmet";
import Leftpanel from "./Leftpanel";
export default class Classcompo extends Component{
    constructor(props){
        super(props);
    }
    state = {
        age: 42,
        name:'Sandip'
      };

      listRef = createRef();

      //3005/O/31652716/00/B00
      componentDidMount=()=>{
        console.log('component did mount')
      }
      componentDidUpdate =() =>{
        console.log('component did update')
      }
      shouldComponentUpdate =(nextProps, nextState) =>{
        console.log('should component update');
        // Add your comparison logic here
        //return nextProps.value !== this.props.value;
        return 'Yes';
      }

    getSnapshotBeforeUpdate(){
        console.log('getSnapshotBeforeUpdate');
        return <>hello</>

    }
      

    changeName = () =>{
        this.setState( {name: (this.state.name=='Sandip')? 'Layek' :'Sandip'}); 
    }
    changeFocus(){
        this.listRef.current.focus();
    }
    
    render(){
        console.log('render');   
        return(<>
        <Helmet>
            <title>Class Component and Lifecycle methods</title>
        </Helmet>

        <Navbar currentPage='Class page'/>
        <div className="parent">
        <Leftpanel />
        <div className="bodyContent">
        <div>Class component -- {this.state.age}</div>
        <div>Class component Name -- {this.state.name}</div>
        Postcode : <input name="postcode" ref={this.listRef} />
        <p></p>
        <button onClick={()=>this.setState({age: this.state.age + 1})}>ChangeAge</button>
        <button onClick={()=>this.changeName()}>ChangeName</button>
        <button onClick={()=>this.changeFocus()}>Focus</button>
        </div>
        </div>

        </>
        );
        }

}