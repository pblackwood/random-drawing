import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import Root from "./components/Root";
import configureStore from "./configureStore";
import css from "../less/app.less";

render(<Root store={configureStore()}/>, document.getElementById('attendanceStats'))

