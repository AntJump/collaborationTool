import { createAction, handleActions } from "redux-actions";

// 프로젝트 정보와 관련된 리덕스 모듈 설정

// 초기 state 값 설정
const initState = {
    projectId: 0,
    projectKey: "",
    projectName: "",
    projectSummary: "",
    projectExplanation: ""
};

// 액션 타입 설정
export const SET_PROJECT = 'project/SET_PROJECT';

export const GET_PROJECT= 'project/GET_PROJECT'; 
export const GET_PROJECT_ROLES = 'project/GET_PROJECT_ROLES';

export const POST_PROJECT = 'project/POST_PROJECT';
export const PUT_PROJECT = 'project/PUT_PROJECT';
export const PATCH_PROJECT = 'project/PATCH_PROJECT';
export const DELETE_PROJECT = 'project/DELETE_PROJECT';

// 액션 함수 생성
// 프로젝트 목록 관련 액션 함수
const actions =  createAction({
    [GET_PROJECT]: () => {},
    [GET_PROJECT_ROLES]: ()=> {},
    [POST_PROJECT]: ()=>{},
    [SET_PROJECT]: () => {},
    [PUT_PROJECT]: () => {},
    [PATCH_PROJECT]: () => {},
    [DELETE_PROJECT]: ()=>{}
});

// 리듀서 함수 설정
export const projectReducer = handleActions(
    {
        [SET_PROJECT] : (state, {payload})=>{
            console.log("get post project payload", payload);
            return {
                ...state,
                [payload.key] : payload.value
            }
        },
        [GET_PROJECT] : (state, {payload}) => {
            console.log('get project payload: ', payload);
            return payload;
        },
        [GET_PROJECT_ROLES] : (state, {payload}) => {
            console.log('get project payload: ', payload);
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
        [PATCH_PROJECT]:(state, {payload}) =>{
            console.log('get patch project payload: ', payload);
            return payload;
        },
        [DELETE_PROJECT]:(state, {payload}) =>{
            console.log('get delete project payload: ', payload);
            return payload;
        }
  },
  initState
);
