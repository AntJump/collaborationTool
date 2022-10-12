import { createAction, handleActions } from "redux-actions";

// 프로젝트 정보와 관련된 리덕스 모듈 설정

// 초기 state 값 설정
const initState = {
  allProjects: [],
  myProjects: [],
};

// 액션 타입 설정

export const GET_ALLPROJECTS = 'projects/GET_ALLPROJECTS';
export const GET_MYPROJECTS = 'projects/GET_MYROJECTS';

export const GET_PROJECT_MEMBERS = 'projects/GET_PROJECT_MEMBERS';


// 액션 함수 생성
// 프로젝트 목록 관련 액션 함수
const actions =  createAction({
    [GET_ALLPROJECTS]: ()=>{},
    [GET_MYPROJECTS]: ()=>{},
    [GET_PROJECT_MEMBERS]: ()=>{}
});

// 리듀서 함수 설정
export const projectListReducer = handleActions(
    {
        [GET_ALLPROJECTS]: (state, {payload}) => {
            console.log('get all project payload:', payload);
            
            // let projects = { ...state };
            // projects.allProjects = payload;

            return {
                ...state,
                allProjects : payload
            };
        },
        [GET_MYPROJECTS]: (state, {payload}) => {
            console.log('get my project payload:', payload);
            
            // let projects = { ...state };
            // projects.myProjects = payload;

            return {
                ...state,
                myProjects : payload
            };
        },
        [GET_PROJECT_MEMBERS]: (state, {payload}) =>{
            console.log('get porject payload:', payload);
            
            return payload;
        }
  },
  initState
);
