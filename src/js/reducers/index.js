import { combineReducers } from "redux";
import stats from "./stats";
import club from "./club";
import view from "./view";

const drawingApp = combineReducers({
    club,
    stats,
    view
});

export default drawingApp
