import firebase from "firebase";
import { createStore } from "redux";
import throttle from "lodash/throttle";
import drawingApp from "./reducers";
import { loadState, saveState } from "./utilities/localStorage";

const configureStore = () => {
    debugger
    firebase.initializeApp({
        apiKey: "AIzaSyA2aT8nfxGTG3FLd9aB4dR0IytCJcLQ_TM",
        authDomain: "random-drawing-dd8c9.firebaseapp.com",
        databaseURL: "https://random-drawing-dd8c9.firebaseio.com",
        storageBucket: "",
        messagingSenderId: "445787598191"
    });

    const persistedState = loadState();
    // TODO passing undefined because local storage doesn't work for winners
    const store = createStore(drawingApp, persistedState, window.devToolsExtension ? window.devToolsExtension() : undefined);

    store.subscribe(throttle(() => {
        saveState(store.getState());
    }, 1000));

    return store;
};

export default configureStore;