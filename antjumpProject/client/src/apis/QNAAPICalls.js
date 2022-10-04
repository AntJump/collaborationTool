import {
    GET_QNAS,
    GET_QNA_DETAIL,
    QNA_TITLE,
    QNA_CONTENT
} from '../modules/QNAModule';

export const callFAQListAPI = () => {
    const requestURL = `${process.env.REACT_APP_SERVER_IP}/qnas/list/`;

    return async (dispatch, getState) => {

        const list = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            }
        })
        .then(response => response.json());

        console.log('[QNAAPICalls] callPurchaseListAPI RESULT : ', list);

        dispatch({ type: GET_QNAS,  payload: list });
        
    };
    
}