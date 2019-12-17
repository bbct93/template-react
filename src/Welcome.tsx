import React from "react";
import {Button} from "antd";

export default class Welcome extends React.Component {
    render() {
        const {name} = this.props;
        return (
            <div>
                <h1>{name}</h1>
                <Button type="primary">antd Button</Button>
            </div>
        )
    }
}