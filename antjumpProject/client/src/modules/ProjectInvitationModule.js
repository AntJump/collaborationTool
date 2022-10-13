import { createAction, handleActions } from "redux-actions";

// 프로젝트 정보와 관련된 리덕스 모듈 설정

// 초기 state 값 설정
const initState = {
    invitations: {},
    emails: []
};

// const initState = [];

// 액션 타입 설정
export const INIT_INVITATIONS='project/INIT_INVITATIONS';
export const INIT_EMAILS='project/INIT_EMAILS';
export const GET_INVITATIONS = 'project/GET_INVITATIONS';

export const SET_EMAIL = 'project/SET_EMAIL';

export const DELETE_EMAIL=  'project/DELETE_EMAIL';

export const VERIFY_TOKEN = 'project/VERIFY_TOKEN';


// 액션 함수 생성
const actions =  createAction({
    [INIT_EMAILS]: ()=>{},
    [GET_INVITATIONS]: ()=>{},
    [SET_EMAIL]: ()=>{},
    [DELETE_EMAIL]: ()=>{},
    [VERIFY_TOKEN]: ()=>{}
});

// 리듀서 함수 설정
export const projectInvitationReducer = handleActions(
    {
        [GET_INVITATIONS]: (state, {payload}) => {
            console.log('get invitations payload:', payload);
            return {
                ...state,
                invitations: payload
            }

            
        },
        [SET_EMAIL]: (state, {payload})=>{
            console.log('set email payload:', payload);
            return {
                ...state,
                emails: [ ...state.emails, payload ]
            };
        },
        [DELETE_EMAIL]: (state, {payload})=>{
            console.log('delete email payload:', payload);

             
            return {
                ...state,
                emails: state.emails.filter(email=>email != payload)
            }
        },
        [VERIFY_TOKEN]: (state, {payload})=>{
            console.log('verify token payload:', payload);
            return payload; 
        },
        [INIT_EMAILS]: (state, payload)=>{
            return {
                ...state,
                emails: []
            }
        }
  },
  initState
);
