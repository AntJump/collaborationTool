import { combineReducers } from "redux";
import qnaReducer from "./QNAModule";
import paymentReducer from "./PaymentModule";
import faqReducer from "./FAQModule";
import introReudcer from "./IntroModule";


const rootReducer = combineReducers({
    qnaReducer
    ,paymentReducer
    ,faqReducer
    ,introReudcer

});

export default rootReducer;