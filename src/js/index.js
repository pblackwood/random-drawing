import "babel-polyfill";
import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import drawingApp from "./reducers";
import App from "./components/App";

const store = createStore(drawingApp, window.devToolsExtension ? window.devToolsExtension() : undefined);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('attendanceStats')
)

