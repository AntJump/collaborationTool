import { createActions, handleActions } from "redux-actions";

/* 초기 state값 */
const initialState = [
];

/* 액션 타입 설정 */
export const POST_PAY = 'payment/POST_PAY';

/* 포켓몬 관련 액션 함수 */
const actions = createActions({
    [POST_PAY]: () => {}
});

console.log(actions);

/* 리듀서 함수 */
const paymentReducer = handleActions(
    {
        [POST_PAY]: (state, { payload }) => {

            return payload;
        }
    },
    initialState
);

export default paymentReducer;

