import React from "react";
import gameList from "./components/gameList"
import GameList from "./components/gameList";

export default class Game extends React.Component{
    state:{game: Array<string>, xx: number} = {
        game: ['superMarry', 'Russian', 'tankFight', 'xxxx'],
        xx: 11
    };

    render() {
        return (
            <div>
                <GameList game={this.state.game} increment={1} />
            </div>
        )
    }
}