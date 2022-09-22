import {createAction, handleActions} from "redux-actions"


// 프로젝트 정보와 관련된 리덕스 모듈 설정


// 초기 state 값 설정
const initState =[];

// 액션 타입 설정
export const GET_MYPROJECTS = 'project/GET_MYPROJECTS';
export const GET_PARTICIPATED_PROJECTS = 'project/GET_PARTICIPATED_PROJECTS';
export const GET_PROJECT_MEMBERS = 'project'

// 액션 함수 생성
// 프로젝트 목록 관련 액션 함수
const actions =  createAction({
    [GET_MYPROJECTS]: () => {},
    [GET_PARTICIPATED_PROJECTS]: () => {}
});

// 리듀서 함수 설정
export const myProjectReducer = handleActions(
    {
        [GET_MYPROJECTS]: (state, {payload}) => {
            console.log('get_project payload:', payload);
            return payload;
        },
    },
    initState
);

export const participatedProjectReducer = handleActions(
    {
        [GET_PARTICIPATED_PROJECTS]: (state, {payload}) => {
            console.log('get_project payload:', payload);
            return payload;
        }
    },
    initState
);


