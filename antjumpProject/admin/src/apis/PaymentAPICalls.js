import {
    GET_PAIES,
    GET_PAYMENT_DETAIL,
    POST_REFUND,
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


export const callRefundAPI = (paymentKey, cancelReason) => {
    const requestURL = `https://api.tosspayments.com/v1/payments/${paymentKey}/cancel`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                Authorization: 'Basic dGVzdF9za19NR2pMSm9RMWFWWjFSSzU3d0IxM3c2S1llMlJOOg==',
                'Content-Type': 'application/json'
            },
            data: {cancelReason: cancelReason}
        })
        .then(response => response.json());

        console.log('[PaymentAPICalls] callRefundAPI RESULT : ', result.data);

        dispatch({ type: POST_REFUND , payload: result.data })
        
    };
    
}