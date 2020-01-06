import React from "react";
import {Button} from "antd";
import ThemeButton from "@/pages/game/components/themeButton";

export default class GameList extends React.Component<any, any> {
        constructor(props) {
            super(props);
            this.state = {
                num: 0,
                isOn: false,
                nameValue: 'init Name',
                name: ''
            };

            this.swithOn = this.swithOn.bind(this);
        }

        addOne = ():void => {
            // state是异步的  可在setState的时候传函数  得到更新后的state
            this.setState((preState, props) => ({
                num: preState.num + props.increment
            })
            )
        };

    goToBaidu = ( e ):void => {
        e.preventDefault();
        console.log(e)
    };

    swithOn = (params):void => {
        console.log(params);
        this.setState( preState => {
            return {
                isOn: !preState.isOn
            }
        })
    };

    formSubmit = e => {
        console.log('表单数据----->',e.target.name);
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log('---------->',this.state.name);
        e.preventDefault()
    };

    getNameValue = e => {
        console.log('name----->', e.target.name);
        this.setState({
            [e.target.name]: e.target.value
        },() => {
            console.log('---------->',this.state.name)
        })

    };


        render() {
            let ele;
            if(this.state.isOn) {
                ele = <div>switch is on</div>
            }else {
                ele = <div>switch is off</div>
            }
            return (
                <div>
                    {this.props.game.map((item, index) => <div key={index}><li>{item}</li></div>)}
                    <Button type="primary" onClick={this.addOne}>add one from child</Button>
                    <div>{this.state.num}</div>
                    <a href="www.baidu.com" onClick={this.goToBaidu}>this is a link</a>
                    <Button type="primary" onClick={this.swithOn.bind(this, 'xxxxx')}>{this.state.isOn ? 'On' : 'Off'}</Button>
                    {ele}
                    <form action="" onSubmit={this.formSubmit}>
                        <label>name</label> <input name='name' value={this.state.name} type="text" onChange={this.getNameValue}/>
                        <input type="submit" value="提交" />
                    </form>
                    <ThemeButton />
                </div>
                )

        }
}