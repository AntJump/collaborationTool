import { combineReducers } from "redux";
import qnaReducer from "./QNAModule";
import paymentReducer from "./PaymentModule";
import faqReducer from "./FAQModule";


// 프로젝트 관련 모듈 import
import { myProjectReducer, participatedProjectReducer } from "./ProjectModule";
const rootReducer = combineReducers({
    qnaReducer
    ,paymentReducer
    ,faqReducer
    // 프로젝트 관련 모듈 combine
    ,myProjectReducer
    ,participatedProjectReducer

});

export default rootReducer;