import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import AdminRoot from "./components/admin/AdminRoot";
import configureStore from "./configureStore";
import css from "../less/admin.less";

render(<AdminRoot store={configureStore()}/>, document.getElementById('attendanceAdmin'))

