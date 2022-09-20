import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = {
      qnaTitle: ""
    , qnaContent: ""
    , qnaWriteTime: ""
    , qnaChangeTime: ""
    , qnaStatus: ""
    , qnaDepth: 0
    , fkMembersQnas: 0
    , fkAdminsQnas: 0
};

/* 액션 */
export const GET_QNAS = 'qnas/GET_QNAS';
export const GET_QNA_DETAIL = 'qnas/GET_QNA_DETAIL';
export const QNA_TITLE = 'qnas/QNA_TITLE';
export const QNA_CONTENT = 'qnas/QNA_CONTENT';

const actions = createActions({
    [GET_QNAS]: () => {},
    [GET_QNA_DETAIL]: () => {},
    [QNA_TITLE]: () => {},
    [QNA_CONTENT]: () => {}
});

console.log(actions);

/* 리듀서 */
const qnaReducer = handleActions(
    {
          [GET_QNA_DETAIL]: (state, { payload : detail }) => {

              return detail;
          }
        , [GET_QNAS]: (state, { payload : list }) => {

              return{
                  ...state,
                  list
              }
          }
        , [QNA_TITLE]: (state, { payload: qnaTitle }) => {
            
              state = {...state, qnaTitle}
              return state;    
          }
        , [QNA_CONTENT]: (state, { payload:qnaContent }) => {
              state = {...state, qnaContent}
              return state; 
          }
    },
    initialState
);

export default qnaReducer;