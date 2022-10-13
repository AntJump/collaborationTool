import { createAction, handleActions } from "redux-actions";

// 프로젝트 정보와 관련된 리덕스 모듈 설정

// 초기 state 값 설정
const initState = {
};

// 액션 타입 설정
export const GET_PROJECT_MEMBERS = 'project/GET_PROJECT_MEMBERS';


// 액션 함수 생성
const actions =  createAction({
    [GET_PROJECT_MEMBERS]: ()=>{}
});

// 리듀서 함수 설정
export const projectMemberReducer = handleActions(
    {
        [GET_PROJECT_MEMBERS]: (state, {payload}) => {
            console.log('get project members payload:', payload);
            return payload;
        }
  },
  initState
);
