import { createActions, handleActions } from "redux-actions";

/* 초기 state값 */
const initialState = {

};

/* 액션 타입 설정 */
export const GET_PAIES = 'payment/GET_PAIES';
export const GET_PAYMENT_DETAIL = 'payment/GET_PAY_DETAIL';
export const POST_PAY = 'payment/POST_PAY';
export const POST_REFUND = 'payment/POST_REFUND';

/* 결제 관련 액션 함수 */
const actions = createActions({
    [GET_PAIES]: () => {},
    [GET_PAYMENT_DETAIL]: () => {},
    [POST_PAY]: () => {},
    [POST_REFUND]: () => {}
});

console.log(actions);

/* 리듀서 함수 */
const paymentReducer = handleActions(
    {
        [GET_PAYMENT_DETAIL]: (state, { payload : detail }) => {

            return detail;
        }
      , [GET_PAIES]: (state, { payload : list }) => {

            return{
                ...state,
                list
            }
        }
      , [POST_PAY]: (state, { payload }) => {

            return payload;
        }
      , [POST_REFUND]: (state, { payload }) => {

            return payload;
        }
    },
    initialState
);

export default paymentReducer;

