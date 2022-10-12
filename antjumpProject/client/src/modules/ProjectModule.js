import { createAction, handleActions } from "redux-actions";

// 프로젝트 정보와 관련된 리덕스 모듈 설정

// 초기 state 값 설정
const initState = {
    projectKey: "",
    projectName: "",
    projectSummary: "",
    projectExplanation: ""
};

// 액션 타입 설정

export const GET_PROJECT= 'project/GET_PROJECT'; 
export const GET_SELECTED_PROJECT = 'project/GET_SELECTED_PROJECT';
export const POST_PROJECT = 'project/POST_PROJECT';
export const SET_PROJECT = 'project/SET_PROJECT';
export const PUT_PROJECT = 'project/PUT_PROJECT';

// 액션 함수 생성
// 프로젝트 목록 관련 액션 함수
const actions =  createAction({
    [GET_PROJECT]: () => {},
    [GET_SELECTED_PROJECT]: () => {},
    [POST_PROJECT]: ()=>{},
    [SET_PROJECT]: () => {},
    [PUT_PROJECT]: () => {}
});

// 리듀서 함수 설정
export const projectReducer = handleActions(
    {
        [GET_PROJECT] : (state, {payload}) => {
            console.log('get project payload: ', payload);
            return payload;
        },
        [GET_SELECTED_PROJECT]: (state, {payload}) =>{
            console.log('get selected project payload: ', payload);
            return payload;
        },
        [POST_PROJECT]: (state, {payload}) =>{
            console.log('get post project payload: ', payload);
            return payload;
        },
        [PUT_PROJECT]: (state, {payload}) =>{
            console.log('get post project payload: ', payload);
            return payload;
        },
        [SET_PROJECT] : (state, {payload})=>{
            console.log("get post project payload", payload);
            return {
                ...state,
                [payload.key] : payload.value
            }
        }
  },
  initState
);
