import { Component } from "react"
export default class Regularcomp extends Component{
    render(){
        console.log('============= Regular component mounted =========')

        return (
            <div>Regularcomp  {this.props.uname}</div>
        )
    }
}