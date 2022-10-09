import { combineReducers } from "redux";
import qnaReducer from "./QNAModule";
import paymentReducer from "./PaymentModule";
import memberReducer from "./MemberModule";
import faqReducer from "./FAQModule";
import { backlogReducer } from "./BacklogModule";
import { remembranceReducer } from "./RemembranceModule";
import { sprintReducer } from "./SprintModule";

// 프로젝트 관련 모듈 import

import { issueReducer } from "./IssueModule";
import { projectReducer } from "./ProjectModule";

const rootReducer = combineReducers({
  qnaReducer,
  paymentReducer,
  faqReducer,
  projectReducer,
  backlogReducer,
  memberReducer,
  issueReducer,
  remembranceReducer,
  sprintReducer,
});

export default rootReducer;
