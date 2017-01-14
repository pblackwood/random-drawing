import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";
import { createStore, applyMiddleware, compose } from "redux";
import { throttle } from "lodash";
import { requestAttendanceStats } from "./actions";
import drawingApp from "./reducers";
import { loadState, saveState } from "./utilities/localStorage";

const configureStore = () => {

    const RESET_VIEW = true;
    const persistedState = loadState(RESET_VIEW);
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(drawingApp, persistedState, composeEnhancers(applyMiddleware(thunkMiddleware, createLogger())));

    store.subscribe(throttle(() => {
        saveState(store.getState());
    }, 1000));

    // Read json "database" and replace local storage if json is newer
    store.dispatch(requestAttendanceStats());
    return store;
};

export default configureStore;

