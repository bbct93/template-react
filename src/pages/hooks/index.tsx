import React, {useState, useEffect, useMemo} from "react";
import {Button} from "antd";

export default  function Hooks() {
    const [count, setCount] = useState(0);
    const [firstName, setFirstName] = useState('Jack');
    const [lastName, setLastName] = useState('Smith');

    // 计算属性
    const renderFullName = useMemo(() => {
        console.log('Excute renderFullName');
        return `${firstName} && ${lastName}`},[firstName, lastName])
    // 副作用： 获取数据(componentDidmount), 设置订阅监听(componentDidUpdate), 手动更改组件dom(componentWillUnmount)
    useEffect(() => {
        document.title = `you clicked ${count} times`
    },[count]);  // useEffect的第二个参数 count 更改时更新 如果count没有更新变化  就会跳过effect的调用


    useEffect(() => {
        // effect返回的函数就是清除副作用的函数，类似class组件componentWillUnmount
        return function cleanUp () {
            console.log('清除副作用')
        }
    });

    return (
        <div>
            <p>you have clicked {count} times</p>
            <Button type="primary" onClick={() => setCount(count+1)}>Click here</Button>
            <div>{renderFullName}</div>
            <Button onClick={() => setFirstName("Tao")}>changeName</Button>
        </div>
    )
}