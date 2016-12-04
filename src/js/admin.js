import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import AdminRoot from "./components/AdminRoot";
import configureStore from "./configureStore";

render(<AdminRoot store={configureStore()}/>, document.getElementById('attendanceAdmin'))

