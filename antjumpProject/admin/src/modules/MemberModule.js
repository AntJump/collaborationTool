import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = {
};

/* 액션 */
export const GET_MEMBERS = 'members/GET_MEMBERS';
export const GET_MEMBER_DETAIL = 'members/GET_MEMBER_DETAIL';

const actions = createActions({
    [GET_MEMBERS]: () => {},
    [GET_MEMBER_DETAIL]: () => {}
});

console.log(actions);

/* 리듀서 */
const memberReducer = handleActions(
    {
          [GET_MEMBER_DETAIL]: (state, { payload : detail }) => {

              return detail;
          }
        , [GET_MEMBERS]: (state, { payload : list }) => {

              return{
                  ...state,
                  list
              }
          }
    },
    initialState
);

export default memberReducer;