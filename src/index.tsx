import React, {Component} from "react";
import {render} from "react-dom";
import "./index.less";
import Welcome from "@/Welcome";

class Greeter extends Component {
   state = {
            comment: [
                {name: 'jack', sex: 'man', age: 14},
                {name: 'rose', sex: 'women', age: 22},
                {name: 'jack_rose', sex: 'woman', age: 18},

            ]
        };


    render() {
        return (
            <div>
                {this.state.comment.map(item => {
                    return <Welcome name={item.name} />
                })}

            </div>
        )
    }
}

render(<Greeter/>, document.getElementById("root"));