import { createActions, handleActions } from "redux-actions";

/* 초기 state값 */
const initialState = [
];

/* 액션 타입 설정 */
export const POST_PAY = 'payment/POST_PAY';
export const GET_GOODS_DETAIL = 'payment/GET_GOODS_DETAIL';
export const GET_GOODS_POSSESSIONS = 'payment/GET_GOODS_POSSESSIONS';
export const GET_GOODS_POSSESSIONS_DETAIL = 'payment/GET_GOODS_POSSESSIONS_DETAIL';

/* 포켓몬 관련 액션 함수 */
const actions = createActions({
    [POST_PAY]: () => {}
    , [GET_GOODS_DETAIL]: () => {}
    , [GET_GOODS_POSSESSIONS]: () => {}
    , [GET_GOODS_POSSESSIONS_DETAIL]: () => {}

});

console.log(actions);

/* 리듀서 함수 */
const paymentReducer = handleActions(
    {
        [POST_PAY]: (state, { payload }) => {

            return payload;
        }
        , [GET_GOODS_DETAIL]: (state, { payload : detail }) => {

            return detail
        }
        , [GET_GOODS_POSSESSIONS]: (state, { payload : list }) => {

            return{
                ...state,
                list
            }
        }
        , [GET_GOODS_POSSESSIONS_DETAIL]: (state, { payload : possessionDetail }) => {

            return possessionDetail
        }
    },
    initialState
);

export default paymentReducer;

