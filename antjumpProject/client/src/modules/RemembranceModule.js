import { createAction, handleActions } from "redux-actions";

// 데일리 회고 정보와 관련된 리덕스 모듈 설정

// 초기 state 값 설정
const initState = {
  postSuccess: false,
};

// 액션 타입 설정

export const GET_REMEMBRANCES = "remembrance/GET_REMEMBRANCES";
export const GET_ARTICLES = "remembrance/GET_ARTICLE";
export const POST_REMEMBRANCE = "remembrance/POST_REMEMBRANCE";
export const POST_ARTICLES = "remembrance/POST_ARTICLES";
export const PUT_ARTICLE = "remembrance/PUT_ARTICLE";
export const INIT_REMEMBRANCES = "remembrance/INIT_REMEMBRANCES";
// export const DELETE_REMEMBRANCES = "remembrance/DELETE_REMEMBRANCES";

// 액션 함수 생성
// 데일리 회고 관련 액션 함수
const actions = createAction({
  [GET_REMEMBRANCES]: () => {},
  [GET_ARTICLES]: () => {},
  [POST_REMEMBRANCE]: () => {},
  [POST_ARTICLES]: () => {},
  [PUT_ARTICLE]: () => {},
  [INIT_REMEMBRANCES]: () => {},
});

// 리듀서 함수 설정
export const remembranceReducer = handleActions(
  {
    [INIT_REMEMBRANCES]: (state, { payload }) => {
      console.log("get remembrances", payload);
      return {
        ...state,
        rememberanceList: payload,
      };
    },
    [GET_REMEMBRANCES]: (state, { payload }) => {
      console.log("get remembrances", payload);
      return {
        ...state,
        rememberanceList: payload,
      };
    },
    [GET_ARTICLES]: (state, { payload }) => {
      console.log("get article info", payload);
      return {
        ...state,
        rememberanceList: payload,
      };
    },
    [POST_REMEMBRANCE]: (state, { payload }) => {
      console.log("post remembrance", payload);
      return {
        ...state,
        postSuccess: true,
      };
    },
    [POST_ARTICLES]: (state, { payload }) => {
      console.log("post articles", payload);
      return {
        ...state,
        postSuccess: true,
      };
    },
    [PUT_ARTICLE]: (state, { payload }) => {
      console.log("put remembrance", payload);
      return payload;
    },
  },
  initState
);
