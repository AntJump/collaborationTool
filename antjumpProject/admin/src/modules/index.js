import { combineReducers } from "redux";
import qnaReducer from "./QNAModule";
import paymentReducer from "./PaymentModule";
import faqReducer from "./FAQModule";
import introReducer from "./IntroModule";
import memberReducer from "./MemberModule";


const rootReducer = combineReducers({
    qnaReducer
    ,paymentReducer
    ,faqReducer
    ,introReducer
    ,memberReducer

});

export default rootReducer;