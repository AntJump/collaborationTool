import {createAction, handleActions} from "redux-actions"




// 초기 state 값 설정
const initState =[];

// 액션 타입 설정
export const GET_BACKLOG = 'backlog/GET_BACKLOG';


// 액션 함수 생성
const actions =  createAction({
    [GET_BACKLOG]: () => {}
});

// 리듀서 함수 설정
export const backlogReducer = handleActions(
    {
        [GET_BACKLOG] : (state, {payload}) => {
            console.log('get issues payload', payload);
            var backlogArray = [];
            payload.filter((issue)=>{
                if(backlogArray[issue.areaCode] === undefined){
                    backlogArray[issue.areaCode] = [];
                }
                backlogArray[issue.areaCode].push(issue);
            })
            return backlogArray;
        },
    },
    initState
)


