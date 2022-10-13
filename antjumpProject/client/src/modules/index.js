import { combineReducers } from "redux";
import qnaReducer from "./QNAModule";
import paymentReducer from "./PaymentModule";
import memberReducer from "./MemberModule";
import faqReducer from "./FAQModule";
import { backlogReducer } from "./BacklogModule";
import { remembranceReducer } from "./RemembranceModule";
import { sprintReducer } from "./SprintModule";
import calendarReducer from "./CalendarModule";

// 프로젝트 관련 모듈 import

import { issueReducer } from "./IssueModule";
import { projectReducer } from "./ProjectModule";
import { projectListReducer } from "./ProjectListModule";
import { projectMemberReducer } from "./ProjectMemberModule";
import { projectInvitationReducer } from "./ProjectInvitationModule";
const rootReducer = combineReducers({
  qnaReducer,
  paymentReducer,
  faqReducer,
  projectReducer,
  projectListReducer,
  projectMemberReducer,
  projectInvitationReducer,
  backlogReducer,
  memberReducer,
  issueReducer,
  remembranceReducer,
  sprintReducer,
  calendarReducer,
});

export default rootReducer;
