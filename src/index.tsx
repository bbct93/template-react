import React, {Component} from "react";
import {render} from "react-dom";
import App from "@/pages/layout/index";

class Greeter extends Component<any,any> {
    render() {
        return (
            <div>
                <App></App>
            </div>
        )
    }
}

render(<Greeter/>, document.getElementById("root"));