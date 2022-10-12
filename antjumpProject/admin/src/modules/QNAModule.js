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
export const POST_QNA = 'qnas/POST_QNA';
export const PUT_QNA = 'qnas/PUT_QNA';

const actions = createActions({
    [GET_QNAS]: () => {},
    [GET_QNA_DETAIL]: () => {},
    [POST_QNA]: () => {},
    [PUT_QNA]: () => {}
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
        , [POST_QNA]: (state, { payload }) => {
            
            return payload; 
        }
        , [PUT_QNA]: (state, { payload }) => {
            
            return payload; 
        }
    },
    initialState
);

export default qnaReducer;