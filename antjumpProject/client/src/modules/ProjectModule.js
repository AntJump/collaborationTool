import { createAction, handleActions } from "redux-actions";

// 프로젝트 정보와 관련된 리덕스 모듈 설정

// 초기 state 값 설정
const initState = {
  allProjects: [],
  myProjects: [],
};

// 액션 타입 설정

export const GET_PROJECTS= 'project/GET_PROJECTS'; 
export const GET_ALLPROJECTS = 'project/GET_ALLPROJECTS';
export const GET_MYPROJECTS = 'project/GET_MYROJECTS';

export const GET_PROJECT_MEMBERS = 'project/GET_PROJECT_MEMBERS';
export const GET_SELECTED_PROJECT = 'project/GET_SELECTED_PROJECT';


// 액션 함수 생성
// 프로젝트 목록 관련 액션 함수
const actions =  createAction({
    [GET_PROJECTS]: () => {},
    [GET_PROJECT_MEMBERS]: ()=>{},
    [GET_SELECTED_PROJECT] : () => {}
});

// 리듀서 함수 설정
export const projectReducer = handleActions(
    {
        [GET_SELECTED_PROJECT] : (state, {payload}) => {
            console.log('set selected project payload', payload);

            const s = (payload.projects).filter(project => project.id == Number(payload.id));
            console.log('changing state :', s);
            return s;
        },
        [GET_PROJECTS]: (state, {payload}) => {
            console.log('get project payload:', payload);

            return payload;
        },
        [GET_ALLPROJECTS]: (state, {payload}) => {
            console.log('get all project payload:', payload);
            
            let projects = { ...state };
            projects.allProjects = payload;

            return projects;
        },
        [GET_MYPROJECTS]: (state, {payload}) => {
            console.log('get my project payload:', payload);
            
            let projects = { ...state };
            projects.myProjects = payload;

            return projects;
        },
        [GET_PROJECT_MEMBERS]: (state, {payload}) =>{
            console.log('get porject payload:', payload);
            
            return payload;
        }
  },
  initState
);
