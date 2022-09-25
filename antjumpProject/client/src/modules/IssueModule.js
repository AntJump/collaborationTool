import { createAction, handleActions } from "redux-actions";

// 이슈 정보와 관련된 리덕스 모듈 설정

// 초기 state 값 설정
const initState = [];

// 액션 타입 설정
export const GET_ISSUES = "issues/GET_ISSUES";

// 액션 함수 생성
// 이슈 목록 관련 액션 함수
const actions = createAction({
  [GET_ISSUES]: () => {},
});

// 리듀서 함수 설정
export const issueReducer = handleActions(
  {
    [GET_ISSUES]: (state, { payload }) => {
      console.log("get_issue payload:", payload);
      return payload;
    },
  },
  initState
);
