import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";
import { createStore, applyMiddleware, compose } from "redux";
import { requestAttendanceStats } from "./actions";
import drawingApp from "./reducers";

const configureStore = () => {

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(drawingApp, composeEnhancers(applyMiddleware(thunkMiddleware, createLogger())));

    // Read json "database" for the first time
    store.dispatch(requestAttendanceStats());
    return store;
};

export default configureStore;

