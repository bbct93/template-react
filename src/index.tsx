import React, {Component} from "react";
import {render} from "react-dom";
import App from "@/pages/layout/index";
import { HashRouter as Router } from "react-router-dom";

class Greeter extends Component<any,any> {
    render() {
        return (
            <Router>
              <App></App>
            </Router>
        )
    }
}

render(<Greeter/>, document.getElementById("root"));