import React, {Component} from "react";
import {render} from "react-dom";
import "./index.less"

class Greeter extends Component<any> {
    fn = (greetLang: string): void => {
        console.log(`hello, I am ${greetLang}`);

    };
    render() {
        return (
            <div>
                <span className="txt">I am greeter</span>
                <button onClick={this.fn("Dawson")}>click here</button>
            </div>
        )
    }
}

render(<Greeter/>, document.getElementById("root"));