import axios from "axios";
import {
    GET_GOODS_DETAIL, POST_PAY, GET_GOODS_POSSESSIONS, GET_GOODS_POSSESSIONS_DETAIL
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

export function callCreatePaymentAPI(query, url) {

    const requestURL = url || `${process.env.REACT_APP_SERVER_IP}/payment${query}`; 

    return async function getPayment(dispatch, getState) {
    
        const paymentresult = await axios(requestURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.data.data)
        .catch(err=> err);
    
    
        dispatch({ type: POST_PAY, payload: paymentresult });
    }
}


export const callPossessionListAPI = (memberId) => {
    const requestURL = `${process.env.REACT_APP_SERVER_IP}/goods/mypossession/${memberId}`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json());

        console.log('[PaymentAPICalls] callPossessionListAPI RESULT : ', result.data);

        dispatch({ type: GET_GOODS_POSSESSIONS,  payload: result.data });
        
    };
    
}

export const callPossessionsDetailAPI = (possessionId) => {
    const requestURL = `${process.env.REACT_APP_SERVER_IP}/goods/possession/${possessionId}`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json());

        console.log('[PaymentAPICalls] callPossessionsDetailAPI RESULT : ', result.data);

        dispatch({ type: GET_GOODS_POSSESSIONS_DETAIL,  payload: result.data });
        
    };
    
}