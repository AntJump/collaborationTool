import {createAction, handleActions} from "redux-actions"




// 초기 state 값 설정
const initState =[];

// 액션 타입 설정
export const GET_ISSUES = 'issue/GET_ISSEUS';


// 액션 함수 생성
const actions =  createAction({
    [GET_ISSUES]: () => {}
});

// 리듀서 함수 설정
export const issueReducer = handleActions(
    {
        [GET_ISSUES] : (state, {payload}) => {
            console.log('get issues payload', payload);
            return payload;
        },
    },
    initState
)


