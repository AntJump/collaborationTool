import {
    GET_QNAS,
    GET_QNA_DETAIL,
    QNA_TITLE,
    QNA_CONTENT
} from '../modules/QNAModule';

export const callQNAListAPI = () => {
    const requestURL = `${process.env.REACT_APP_SERVER_IP}/qnas`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json());

        console.log('[QNAAPICalls] callQNAListAPI RESULT : ', result.data.data);

        dispatch({ type: GET_QNAS,  payload: result.data.data });
        
    };
    
}

export const callQNADetailAPI = (qnaId) => {
    const requestURL = `${process.env.REACT_APP_SERVER_IP}/qnas/${qnaId}`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json());

        console.log('[QNAAPICalls] callQNADetailAPI RESULT : ', result.data);

        dispatch({ type: GET_QNA_DETAIL,  payload: result.data });
        
    };
    
}