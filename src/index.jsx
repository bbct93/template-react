import React, {Component} from "react";
import {render} from "react-dom";
import "./index.less"

class Greeter extends Component {
    fn = () => {
        console.log('this is fn1`');
    };
    render() {
        return (
            <div>
                <span className="txt">I am greeter5</span>
                <button onClick={this.fn}>click here</button>
            </div>
        )
    }
}

render(<Greeter/>, document.getElementById("root"));