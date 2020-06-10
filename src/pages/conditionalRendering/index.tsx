import React from "react";
import CustomerButton from './components/button'

export default class Video extends React.Component<any, any>{
    constructor(props) {
        super(props);
        this.state = {
            name: 'xxxxxx'
        }
    }


    getName(name) {
        this.setState({
            name
        })
    }
    render() {
        const { name } = this.state;
        return (
            <div>
                <div>{name}</div>
                <CustomerButton myEvent={this.getName.bind(this)} showDiv1={true} showDivOrButton={true} num={2}></CustomerButton>
            </div>
        )
    }
}