import { combineReducers } from "redux";
import {BankReducer} from "./BankReducer";

export const rootReducer = combineReducers({
    bankBalance: BankReducer
})

