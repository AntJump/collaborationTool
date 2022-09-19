import { combineReducers } from "redux";
import qnaReducer from "./QNAModule";
import paymentReducer from "./PaymentModule";


// 프로젝트 관련 모듈 import
import { myProjectReducer, participatedProjectReducer } from "./ProjectModule";
const rootReducer = combineReducers({
    qnaReducer
    ,paymentReducer
    // 프로젝트 관련 모듈 combine
    ,myProjectReducer
    ,participatedProjectReducer

});

export default rootReducer;