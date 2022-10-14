import { createAction, handleActions } from "redux-actions";

// 이슈 정보와 관련된 리덕스 모듈 설정

// 초기 state 값 설정
const initState = [];

// 액션 타입 설정
export const GET_ISSUES = "issues/GET_ISSUES";
export const GET_INCLUDED_ISSUES = "backlog/GET_INCLUDED_ISSUES";
export const UPDATE_ISSUES = "issues/UPDATE_ISSUES";
export const POST_ISSUECREATE = "issues/POST_ISSUECREATE";

// 액션 함수 생성
// 이슈 목록 관련 액션 함수
const actions = createAction({
  [GET_ISSUES]: () => {},
  [GET_INCLUDED_ISSUES]: () => {},
  [UPDATE_ISSUES]: () => {},
  [POST_ISSUECREATE]: () => {},
});

// 리듀서 함수 설정
export const issueReducer = handleActions(
  {
    [GET_ISSUES]: (state, { payload }) => {
      console.log("get_issue payload:", payload);
      return payload;
    },
    [GET_INCLUDED_ISSUES]: (state, { payload }) => {
      console.log("get included issues payload", payload);

      return payload;
    },
    [UPDATE_ISSUES]: (state, { payload }) => {
      console.log("update issues payload", payload);

      return payload;
    },

    [POST_ISSUECREATE]: (state, { payload }) => {
      return payload;
    },
  },
  initState
);
