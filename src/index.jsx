import React, {Component} from "react";
import {render} from "react-dom";
import "./index.less"

class Greeter extends Component {
    render() {
        return (
            <div>
                <span className="txt">I am greeter5</span>
            </div>
        )
    }
}

render(<Greeter/>, document.getElementById("root"));