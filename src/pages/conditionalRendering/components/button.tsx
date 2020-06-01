import React from "react";
import {Button} from "antd";

interface IProps {
    [propName: string]: boolean | number
}

export default class CustomerButton extends React.Component<IProps>{
    constructor(props) {
        super(props)
    }

  showWhat(what) {
        if(what === 1) {
            return (
                <div>what is 1</div>
            )
        } else if(what ===2 ) {
            return (
                <div>what is 2</div>
            )
        } else {
            return (
                <div>what is not 1 or 2</div>
            )
        }
  }

    render() {

        return (
            <div>
                {this.props.showDiv1 && <div>this is div1</div>}
                {this.props.showDivOrButton ? (<div>this is div</div>) : (<Button type="primary">this is button</Button>)}
                {this.showWhat(this.props.num)}
            </div>
        )
    }
}