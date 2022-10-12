import {
    GET_PAIES,
    GET_PAYMENT_DETAIL,
} from '../modules/PaymentModule';

export const callPaymentListAPI = () => {
    const requestURL = `${process.env.REACT_APP_SERVER_IP}/payment`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json());

        console.log('[PaymentAPICalls] callPaymentListAPI RESULT : ', result.data);

        dispatch({ type: GET_PAIES,  payload: result.data });
        
    };
    
}

export const callPaymentDetailAPI = (paymentId) => {
    const requestURL = `${process.env.REACT_APP_SERVER_IP}/payment/${paymentId}`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json());

        console.log('[PaymentAPICalls] callPaymentDetailAPI RESULT : ', result.data);

        dispatch({ type: GET_PAYMENT_DETAIL,  payload: result.data });
        
    };
    
}