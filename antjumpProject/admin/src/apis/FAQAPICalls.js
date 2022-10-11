import {
    GET_FAQS,
    GET_FAQ_DETAIL,
    POST_FAQ
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


export const callFAQRegistAPI = ({form}) => {
    console.log('[FAQAPICalls] callFAQRegistAPI Call');

    const requestURL = `${process.env.REACT_APP_SERVER_IP}/faqs/admin`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                faqTitle: form.faqTitle,
                faqContent: form.faqContent,
                faqCategory: form.faqCategory,
                adminId: form.adminId
            })
        })
        .then(response => response.json());

        console.log('[FAQAPICalls] callFAQRegistAPI RESULT : ', result);

        dispatch({ type: POST_FAQ,  payload: result });
        
    };    
}