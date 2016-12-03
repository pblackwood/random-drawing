import { combineReducers } from "redux";
import stats from "./stats";
import club from "./club";
import metadata from "./metadata";
import view from "./view";

const drawingApp = combineReducers({
    club,
    stats,
    metadata,
    view
});

export default drawingApp
