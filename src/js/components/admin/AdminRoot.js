import React, { PropTypes } from "react";
import { Provider } from "react-redux";
import AdminApp from "./AdminApp";

const AdminRoot = ({store}) => (
    <Provider store={store}>
        <AdminApp />
    </Provider>
);

export default AdminRoot;