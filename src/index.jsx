import React, {Component} from "react";
import {render} from "react-dom";
import styles from './index.less';


class Greeter extends Component{
    render() {
        return(
            <div>
                <span className={styles.desc}>I am greeter</span>
            </div>
        )
    }
}

render(<Greeter />,document.getElementById("root"));