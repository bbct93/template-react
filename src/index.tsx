import React, {Component} from "react";
import {render} from "react-dom";
import "./index.less"

class Greeter extends Component<any> {
    fn = (name: string|number): void => {
        console.log(`hello, this is a simple react frame created by ${name}`);
    };
    render() {
        return (
            <div>
                <span className="txt">thx for use this simple frame</span>
                <button onClick={():void => this.fn('123')}>click here</button>
            </div>
        )
    }
}

render(<Greeter/>, document.getElementById("root"));