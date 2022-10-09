import {
    GET_GOODS, GET_GOODS_DETAIL
} from '../modules/PaymentModule'

export const callGoodsDetailAPI = (goodsId) => {
    const requestURL = `${process.env.REACT_APP_SERVER_IP}/goods/${goodsId}`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json());

        console.log('[GoodsAPICalls] callGoodsDetailAPI RESULT : ', result.data);

        dispatch({ type: GET_GOODS_DETAIL,  payload: result.data });
        
    };
    
}