import React from "react";
import CustomerButton from './components/button'
import { Button} from "antd";
import { connect } from 'dva';


@connect(({hello }) => ({
    xxx: hello
}))
export default class Video extends React.Component<any, any>{
    constructor(props) {
        super(props);
        this.state = {
            name: 'xxxxxx'
        }
    }

    changeState() {
        this.setState({
            name: '1232'
        })
    }

    addOne() {
        const {dispatch} = this.props;
        dispatch({
            type: 'count/add'
        })
    }


    getName(name) {
        this.setState({
            name
        })
    }
    render() {
        console.log(this.props);
        const {count} = this.props;
        return (
            <div>
                <Button onClick={this.addOne.bind(this)}>addOne</Button>
                <Button onClick={this.changeState.bind(this)}></Button>
                <CustomerButton myEvent={this.getName.bind(this)} showDiv1={true} showDivOrButton={true} num={2}></CustomerButton>
            </div>
        )
    }
}