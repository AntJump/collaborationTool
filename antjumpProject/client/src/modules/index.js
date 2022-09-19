import { combineReducers } from "redux";
import qnaReducer from "./QNAModule";
import paymentReducer from "./PaymentModule";


const rootReducer = combineReducers({
    qnaReducer
    ,paymentReducer

});

export default rootReducer;