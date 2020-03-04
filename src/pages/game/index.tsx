import React from "react";
import GameList from "./components/gameList";
import { Button} from "antd";
import BtnComp from "@/pages/game/components/btnComp";

const btnRef = React.createRef();
// const BtnComp = React.forwardRef((props, ref) => {
//     return (
//         <button className="btn" ref={ref}>
//             {props.children}
//         </button>
//     )
// });

export default class Game extends React.Component<any>{
    state:{game: Array<string>, xx: number} = {
        game: ['superMarry', 'Russian', 'tankFight', 'xxxx'],
        xx: 11
    };

    btnClick = () => {
        console.log('btnClick----->', btnRef)
    }

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

