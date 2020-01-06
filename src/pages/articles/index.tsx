import React from "react";
import {Divider} from "antd";

export default class Articles extends React.Component{
    constructor(props) {
        super(props)
    }
    state={
        day: 0,
        hour: 0,
        minute: 0,
        second: 0
    };

    timer: any;

    componentDidMount(): void {
        this.countDown('2020.01.06 12:00:00')
    }

    componentWillUnmount(): void {
        clearInterval(this.timer)
    }

    countDown(time) {
        let endTime = new Date(time).getTime();
        let interval = endTime - (new Date().getTime());
        this.timer = setInterval(() => {
            //防止倒计时出现负数
            if (interval > 1000) {
                interval -= 1000;
                let day = Math.floor((interval / 1000 / 3600) / 24);
                let hour = Math.floor((interval / 1000 / 3600) % 24);
                let minute = Math.floor((interval / 1000 / 60) % 60);
                let second = Math.floor(interval / 1000 % 60);
                this.setState({
                    day:day,
                    hour:hour < 10 ? "0" + hour : hour,
                    minute:minute < 10 ? "0" + minute : minute,
                    second:second < 10 ? "0" + second : second
                })
            } else {
                clearInterval(this.timer);
                //倒计时结束时触发父组件的方法
                //this.props.timeEnd();
            }
        }, 1000);

    }

    render() {

        return (
            <div>剩余时间： {this.state.day}日 {this.state.hour}时{this.state.minute}分{this.state.second}秒</div>
        )
    }
}