import React from "react";
import CustomerButton from './components/button'

export default class Video extends React.Component{
    render() {
        return (
            <div>
                <CustomerButton showDiv1={true} showDivOrButton={true} num={2}></CustomerButton>
            </div>
        )
    }
}