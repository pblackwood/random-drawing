import { createStore } from "redux";
import throttle from "lodash/throttle";
import drawingApp from "./reducers";
import { loadState, saveState } from "./utilities/localStorage";

const configureStore = () => {
    const persistedState = loadState();
    // TODO passing undefined because local storage doesn't work for winners
    const store = createStore(drawingApp, undefined, window.devToolsExtension ? window.devToolsExtension() : undefined);

    store.subscribe(throttle(() => {
        saveState(store.getState());
    }, 1000));

    return store;
};

export default configureStore;