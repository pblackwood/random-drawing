import React, { PropTypes } from "react";
import { Provider } from "react-redux";
import AdminApp from "./AdminApp";
import { Router, Route, browserHistory } from "react-router";

const AdminRoot = ({store}) => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={AdminApp}/>
        </Router>
    </Provider>
);

export default AdminRoot;