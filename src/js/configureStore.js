import { createStore } from "redux";
import throttle from "lodash/throttle";
import drawingApp from "./reducers";
import { loadState, saveState } from "./utilities/localStorage";

const configureStore = () => {
    const persistedState = loadState();
    const store = createStore(drawingApp, persistedState, window.devToolsExtension ? window.devToolsExtension() : undefined);

    store.subscribe(throttle(() => {
        saveState(store.getState());
    }, 1000));

    return store;
};

export default configureStore;