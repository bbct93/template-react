import React, {Component} from "react";
import {render} from "react-dom";
import Layout from "@/pages/layout/index";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import routes from "@/routes";
import loadable from 'react-loadable';

class App extends Component<any,any> {
    render() {
        return (
            <Router>
                <Switch>
                    <Layout>
                        {this.renderRoute()}
                    </Layout>
                </Switch>
            </Router>
        )
    }

    renderRoute = () => {
        return routes.map((item, i) => (
            <Route
                key={i}
                exact={item.exact}
                path={item.path}
                component={loadable({ loader: item.render, loading: () => <div /> })}
            />
        ));
    };
}

render(<App/>, document.getElementById("root"));