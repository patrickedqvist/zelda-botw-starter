import { combineReducers } from "redux";
import { viewstateReducer } from "./viewstate/reducer";
import { itemsReducer } from "./items/reducer";

export const rootReducer = combineReducers({
    viewstate: viewstateReducer,
    inventory: itemsReducer
})

export type RootState = ReturnType<typeof rootReducer>;