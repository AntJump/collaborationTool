import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = {
      introContent: ""
    , introWriteTime: ""
    , introChangeTime: ""
    , fkAdminsIntros: 0
};

/* 액션 */
export const GET_INTROS = 'faqs/GET_INTROS';
export const GET_INTRO_DETAIL = 'faqs/GET_INTRO_DETAIL';
export const INTRO_CONTENT = 'faqs/INTRO_CONTENT';

const actions = createActions({
    [GET_INTROS]: () => {},
    [GET_INTRO_DETAIL]: () => {},
    [INTRO_CONTENT]: () => {}
});

console.log(actions);

/* 리듀서 */
const qnaReducer = handleActions(
    {
          [GET_INTRO_DETAIL]: (state, { payload : detail }) => {

              return detail;
          }
        , [GET_INTROS]: (state, { payload : list }) => {

              return{
                  ...state,
                  list
              }
          }
        , [INTRO_CONTENT]: (state, { payload:introContent }) => {
              state = {...state, introContent}
              return state; 
          }
    },
    initialState
);

export default qnaReducer;