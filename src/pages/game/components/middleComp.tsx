import React from "react";
import ThemeButton from "@/pages/game/components/themeButton";

export default class MiddleComp extends React.Component<any> {
    constructor(props) {
        super(props)
        this.state={
            xx:111
        }
    }

    render() {
        return(
            <div>
                <ThemeButton btnTxt={this.props.btnTxt}></ThemeButton>
            </div>
        )
    }
}