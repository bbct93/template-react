import React from 'react';

interface IState {
    name: string,
    age: number,
    job: string
}

interface IProp {
    familyNum: number,
    brotherName: string,
    user?: string

}

export default class HocComponent extends React.Component<IProp, IState>{
    constructor(props) {
        super(props);  // 绑定this指向

        this.state = {
            name: 'chenTao',
            age: 27,
            job: 'coder'
        }
    }

    render() {
        const {familyNum, brotherName} = this.props;
        const {name, age, job} = this.state;
        return (
            <div>
                <span>Hello, my name is {name} and {age} years old</span>
                <span>now I am a {job}, and my brother is {brotherName}, total {familyNum} person</span>
                {this.props.user ? (<div>this is user: {this.props.user}</div>) : (<div>no user</div>)}
            </div>
        )
    }

}