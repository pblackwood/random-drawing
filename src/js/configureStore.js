import { createStore } from "redux";
import throttle from "lodash/throttle";
import drawingApp from "./reducers";
import { loadState, saveState, clearState } from "./utilities/localStorage";
import { fetchAttendanceData } from "./api";

const configureStore = () => {
    let persistedState = loadState();
    let apiAttendanceData = fetchAttendanceData();

    if (!persistedState || !persistedState.metadata || persistedState.metadata.version != apiAttendanceData.metadata.version) {
        // The json has changed. (or never existed) Replace local storage with it.
        persistedState = apiAttendanceData;
        // Just in case the shape of the json change also, clear it.
        clearState();
        // Now refresh local storage from json
        saveState(apiAttendanceData);
    }

    const store = createStore(drawingApp, persistedState, window.devToolsExtension ? window.devToolsExtension() : undefined);

    store.subscribe(throttle(() => {
        saveState(store.getState());
    }, 1000));

    return store;
};

export default configureStore;