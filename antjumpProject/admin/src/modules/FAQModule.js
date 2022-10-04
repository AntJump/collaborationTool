import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = {
      faqTitle: ""
    , faqContent: ""
    , faqWriteTime: ""
    , faqChangeTime: ""
    , fkAdminsFaqs: 0
};

/* 액션 */
export const GET_FAQS = 'faqs/GET_FAQS';
export const GET_FAQ_DETAIL = 'faqs/GET_FAQ_DETAIL';
export const FAQ_TITLE = 'faqs/FAQ_TITLE';
export const FAQ_CONTENT = 'faqs/FAQ_CONTENT';

const actions = createActions({
    [GET_FAQS]: () => {},
    [GET_FAQ_DETAIL]: () => {},
    [FAQ_TITLE]: () => {},
    [FAQ_CONTENT]: () => {}
});

console.log(actions);

/* FAQ 리듀서 */
const faqReducer = handleActions(
    {
          [GET_FAQ_DETAIL]: (state, { payload : detail }) => {

              return detail;
          }
        , [GET_FAQS]: (state, { payload : list }) => {

              return{
                  ...state,
                  list
              }
          }
        , [FAQ_TITLE]: (state, { payload: faqTitle }) => {
            
              state = {...state, faqTitle}
              return state;    
          }
        , [FAQ_CONTENT]: (state, { payload:faqContent }) => {
              state = {...state, faqContent}
              return state; 
          }
    },
    initialState
);

export default faqReducer;