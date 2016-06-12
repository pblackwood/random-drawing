import { combineReducers } from "redux";
import stats from "./stats";
import club from "./club";

const drawingApp = combineReducers({
    club,
    stats
});

export default drawingApp
