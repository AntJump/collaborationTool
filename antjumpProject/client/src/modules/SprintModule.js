import { createAction, handleActions } from "redux-actions";

// 스프린트 정보와 관련된 리덕스 모듈 설정

// 초기 state 값 설정
const initState = [];

// 액션 타입 설정
export const GET_SPRINT = "sprint/GET_SPRINT";
export const GET_SPRINTS = "sprint/GET_SPRINTS";
export const POST_SPRINT = "sprint/POST_SPRINT";
export const PUT_START_SPRINT = "sprint/PUT_START_SPRINT";
export const PUT_CLOSE_SPRINT = "sprint/PUT_CLOSE_SPRINT";
export const PATCH_SPRINT = "sprint/PATCH_SPRINT";
export const DELETE_SPRINT = "sprint/DELETE_SPRINT";

// 액션 함수 생성
// 스프린트 액션 함수
const actions = createAction({
  [GET_SPRINT]: () => {},
  [GET_SPRINTS]: () => {},
  [POST_SPRINT]: () => {},
  [PUT_START_SPRINT]: () => {},
  [PUT_CLOSE_SPRINT]: () => {},
  [PATCH_SPRINT]: () => {},
  [DELETE_SPRINT]: () => {},
});

// 리듀서 함수 설정
export const sprintReducer = handleActions(
  {
    [GET_SPRINT]: (state, { payload }) => {
      console.log("get sprint by sprintId payload", payload);
      return payload;
    },
    [GET_SPRINTS]: (state, { payload }) => {
      console.log("get sprints by status payload:", payload);
      return payload;
    },
    [POST_SPRINT]: (state, { payload }) => {
      console.log("post sprint payload:", payload);
      return payload;
    },
    [PUT_START_SPRINT]: (state, { payload }) => {
      console.log("put start sprint payload:", payload);
      return payload;
    },
    [PUT_CLOSE_SPRINT]: (state, { payload }) => {
      console.log("put close sprint payload:", payload);
      return payload;
    },
    [PATCH_SPRINT]: (state, { payload }) => {
      console.log("patch sprint alarm payload:", payload);
      return payload;
    },
    [DELETE_SPRINT]: (state, { payload }) => {
      console.log("delete sprint payload:", payload);
      return payload;
    },
  },
  initState
);
