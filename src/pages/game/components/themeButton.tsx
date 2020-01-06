import React from "react";
import { Button } from "antd";

const ThemeContext = React.createContext('light');
export default class ThemeButton extends React.Component {
    static contextType = ThemeContext;

    render() {
        return (
            <Button type='primary'>{this.context}</Button>
        )
    }
}