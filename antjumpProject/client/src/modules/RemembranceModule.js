import { createAction, handleActions } from "redux-actions";

// 데일리 회고 정보와 관련된 리덕스 모듈 설정

// 초기 state 값 설정
const initState = [];

// 액션 타입 설정
export const GET_REMEMBRANCE = "remembrance/GET_REMEMBRANCE";
export const GET_REMEMBRANCES = "remembrance/GET_REMEMBRANCES";
export const POST_REMEMBRANCES = "remembrance/POST_REMEMBRANCES";
export const PUT_REMEMBRANCE = "remembrance/PUT_REMEMBRANCE";
export const DELETE_REMEMBRANCES = "remembrance/DELETE_REMEMBRANCES";

// 액션 함수 생성
// 데일리 회고 관련 액션 함수
const actions = createAction({
  [GET_REMEMBRANCE]: () => {},
  [GET_REMEMBRANCES]: () => {},
  [POST_REMEMBRANCES]: () => {},
  [PUT_REMEMBRANCE]: () => {},
  [DELETE_REMEMBRANCES]: () => {},
});

// 리듀서 함수 설정
export const remembranceReducer = handleActions(
  {
    [GET_REMEMBRANCE]: (state, { payload }) => {
      console.log("get written date", payload);
      return payload;
    },
    [GET_REMEMBRANCES]: (state, { payload }) => {
      console.log("get written date", payload);
      return payload;
    },
    [POST_REMEMBRANCES]: (state, { payload }) => {
      console.log("get written date", payload);
      return payload;
    },
    [PUT_REMEMBRANCE]: (state, { payload }) => {
      console.log("get written date", payload);
      return payload;
    },
    [DELETE_REMEMBRANCES]: (state, { payload }) => {
      console.log("get written date", payload);
      return payload;
    },
  },
  initState
);
