import React from "react";
import GameList from "./components/gameList";
import { Button} from "antd";
import BtnComp from "@/pages/game/components/btnComp";

const btnRef = React.createRef();

// 定义state的接口
interface IState {
    game: Array<string>,
    xx: number
}

// 定义props的接口
interface IProps {
    sex: string,
    age: number
}


// <propsInterface, stateInterface>
export default class Game extends React.Component<IProps, IState>{
    state = {
        game: ['superMarry', 'Russian', 'tankFight', 'xxxx'],
        xx: 11,
        name: 'xxx'
    };

    btnClick = () => {
        console.log('btnClick----->', btnRef)
    };

    componentDidMount(): void {
        console.log('当前按钮的class为：', btnRef)
    }

    render() {
        const userLink  = <Button type='primary'>xxxxx</Button>;
        return (
            <div>
                <GameList game={this.state.game} increment={1} userLink={userLink} xx={userLink} btnTxt='btnTxt from index'></GameList>
                <BtnComp ref={btnRef} onClick={this.btnClick}>ssssss</BtnComp>
            </div>

        )
    }
}

