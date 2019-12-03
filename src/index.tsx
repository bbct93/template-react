import React, {Component} from "react";
import {render} from "react-dom";
import "./index.less"


function cardItem(props) {
    return (
        <div key={props.age}>{props.name}</div>
    )
}

class Greeter extends Component {
   state = {
            comment: [
                {name: 'jack', sex: 'man', age: 14},
                {name: 'rose', sex: 'women', age: 22},
                {name: 'jack_rose', sex: 'woman', age: 18},

            ]
        }


    render() {
       const { comment } = this.state
        return (
            <div>
                {comment.map(item => cardItem(item))}
            </div>
        )
    }
}

render(<Greeter/>, document.getElementById("root"));