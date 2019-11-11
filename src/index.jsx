import React, {Component} from "react";
import {render} from "react-dom";

class Greeter extends Component{
    render() {
        return(
            <div>
                <span>I am greeter</span>
            </div>
        )
    }
}

render(<Greeter />,document.getElementById("root"));