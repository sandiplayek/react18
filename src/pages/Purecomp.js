import { PureComponent } from "react";
export default class Purecomp extends PureComponent{
    render(){
        console.log('============= Pure component mounted =========')

        return (<div>Purecomp  {this.props.uname}</div>);
    }
}