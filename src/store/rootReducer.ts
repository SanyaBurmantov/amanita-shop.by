import {combineReducers} from "redux";
import {cartReducer} from "./cart/reducers";

const rootReducer = combineReducers({
    cart: cartReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer