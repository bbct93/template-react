import React from "react";
import {Button} from "antd";
import memoize from 'memoize-one';



interface IState {
    firstName: string;
    lastName: string;
    val: number;
}

interface IProps {
    showDiv1: boolean;
    showDivOrButton: boolean;
    num: number;
    myEvent(name: string): void
}

export default class CustomerButton extends React.Component<IProps, IState>{
    constructor(props) {
        super(props);
        this.state = {
            firstName: 'Jack',
            lastName: 'Smith',
            val: 0
        }
    }

  showWhat(what) {
        if(what === 1) {
            return (
                <div>what is 1</div>
            )
        } else if(what ===2 ) {
            return (
                <div>what is 2</div>
            )
        } else {
            return (
                <div>what is not 1 or 2</div>
            )
        }
  }

  getFullName = memoize((firstName, lastName) => {
      console.log('excute memoize');
      return `${firstName} &  ${lastName}`
  })

  get FullName() {  // 只要改变了state  包括父组件的state  都会触发
      console.log('excute fullName function');
        const {firstName, lastName} = this.state;
        return this.getFullName(firstName, lastName);
  }

    changeName() {
        const { myEvent } = this.props;  // 子组件向父组件传值

        this.setState({
            firstName: 'Chen'
        })

        myEvent('Tao')
    }

    test() {
        let {val: value} = this.state;
        this.setState({
            val: value ++
        })
    }

    render() {
        const items = [
            {
                message: 'hello'
            },
            {
                message: 'world'
            },
            {
                message: 'welcome'
            }
        ]
        return (
            <div>
                {this.props.showDiv1 && <div>this is div1</div>}
                {this.props.showDivOrButton ? (<div>this is div</div>) : (<Button type="primary">this is button</Button>)}
                {this.showWhat(this.props.num)}
                {
                items.map((item, index) => (
                    <div key={index}>{item.message}</div>
                ))
            }

                <div onClick={this.test.bind(this)}>test get Fn</div>

            <div>{this.FullName}</div>
                <Button type="primary" onClick={this.changeName.bind(this)}>change Name</Button>
            </div>
        )
    }
}