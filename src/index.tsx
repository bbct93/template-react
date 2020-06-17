import React, {Component} from "react";
import {render} from "react-dom";
import Layout from "@/pages/layout/index";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import routes from "@/routes";
import loadable from 'react-loadable';
import dva from 'dva';

const app = dva();

app.model({ namespace: 'count', ...(require('./models/global.js').default) });
app.model({ namespace: 'modelTwo', ...(require('./models/modelTow.js').default) });


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

app.router(() => <App />);
app.start("#root");