import React from "react";
import { Button } from "antd";

export default class ThemeButton extends React.Component<any> {
    render() {
        return (
            <Button type='primary'>{this.props.btnTxt}</Button>
        )
    }
}