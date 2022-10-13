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


// 액션 함수 생성
// 프로젝트 목록 관련 액션 함수
const actions =  createAction({
    [GET_ALLPROJECTS]: ()=>{},
    [GET_MYPROJECTS]: ()=>{}
});

// 리듀서 함수 설정
export const projectListReducer = handleActions(
    {
        [GET_ALLPROJECTS]: (state, {payload}) => {
            console.log('get all project payload:', payload);
            
            return {
                ...state,
                allProjects : payload
            };
        },
        [GET_MYPROJECTS]: (state, {payload}) => {
            console.log('get my project payload:', payload);

            return {
                ...state,
                myProjects : payload
            };
        }
  },
  initState
);
