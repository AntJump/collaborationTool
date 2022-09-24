import { combineReducers } from "redux";
import qnaReducer from "./QNAModule";
import paymentReducer from "./PaymentModule";
import memberReducer from "./MemberModule";
import faqReducer from "./FAQModule";
import { backlogReducer } from "./BacklogModule";

// 프로젝트 관련 모듈 import
import { projectReducer} from "./ProjectModule";

const rootReducer = combineReducers({
  qnaReducer,
  paymentReducer,
  faqReducer,
  projectReducer,
  backlogReducer,
  memberReducer,
});

export default rootReducer;
