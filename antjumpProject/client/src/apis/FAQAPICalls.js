import {
    GET_FAQS,
    GET_FAQ_DETAIL,
} from '../modules/FAQModule';

export const callFAQListAPI = () => {
    const requestURL = `${process.env.REACT_APP_SERVER_IP}/faqs`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json());

        console.log('[FAQAPICalls] callFAQListAPI RESULT : ', result.data);

        dispatch({ type: GET_FAQS,  payload: result.data });
        
    };
    
}

export const callFAQDetailAPI = (faqId) => {
    const requestURL = `${process.env.REACT_APP_SERVER_IP}/faqs/${faqId}`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json());

        console.log('[FAQAPICalls] callFAQDetailAPI RESULT : ', result.data);

        dispatch({ type: GET_FAQ_DETAIL,  payload: result.data });
        
    };
    
}