import { createActions, handleActions } from "redux-actions";

/* 초기 state값 */
const initialState = [
];

/* 액션 타입 설정 */
export const POST_PAY = 'payment/POST_PAY';
export const GET_GOODS = 'payment/GET_GOODS';
export const GET_GOODS_DETAIL = 'payment/GET_GOODS_DETAIL';

/* 포켓몬 관련 액션 함수 */
const actions = createActions({
    [POST_PAY]: () => {}
    , [GET_GOODS]: () => {}
    , [GET_GOODS_DETAIL]: () => {}

});

console.log(actions);

/* 리듀서 함수 */
const paymentReducer = handleActions(
    {
        [POST_PAY]: (state, { payload }) => {

            return payload;
        }
        , [GET_GOODS]: (state, { payload : list }) => {

            return{
                ...state,
                list
            }
        }
        , [GET_GOODS_DETAIL]: (state, { payload : detail }) => {

            return detail
        }
    },
    initialState
);

export default paymentReducer;

