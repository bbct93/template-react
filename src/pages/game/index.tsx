import React from "react";
import GameList from "./components/gameList";

const ThemeContext = React.createContext('light');
export default class Game extends React.Component{
    state:{game: Array<string>, xx: number} = {
        game: ['superMarry', 'Russian', 'tankFight', 'xxxx'],
        xx: 11
    };

    render() {
        return (
                <ThemeContext.Provider value="2222">
                    <GameList game={this.state.game} increment={1} />
                </ThemeContext.Provider>
        )
    }
}

