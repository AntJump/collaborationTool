import { createActions, handleActions } from "redux-actions";

/* 초기값 */
const initialState = [];

/* 액션 */
export const GET_MEMBER = "member/GET_MEMBER";
export const POST_LOGIN = "member/POST_LOGIN";
export const POST_REGISTER = "member/POST_REGISTER";
export const POST_UPDATE = "member/POST_UPDATE";
export const POST_DELETE = "member/POST_DELETE";

const actions = createActions({
  [GET_MEMBER]: () => {},
  [POST_LOGIN]: () => {},
  [POST_REGISTER]: () => {},
  [POST_UPDATE]: () => {},
  [POST_DELETE]: () => {},
});

/* 리듀서 */
const memberReducer = handleActions(
  {
    [GET_MEMBER]: (state, { payload }) => {
      return payload;
    },
    [POST_LOGIN]: (state, { payload }) => {
      return payload;
    },
    [POST_REGISTER]: (state, { payload }) => {
      return payload;
    },
    [POST_UPDATE]: (state, { payload }) => {
      return payload;
    },
  },
  initialState
);

export default memberReducer;
