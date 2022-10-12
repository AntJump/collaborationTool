import {
    GET_QNAS,
    GET_QNA_DETAIL,
    POST_QNA,
    PUT_QNA
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


export const callQNARegistAPI = ({form}) => {
    console.log('[QNAAPICalls] callQNARegistAPI Call');

    const requestURL = `${process.env.REACT_APP_SERVER_IP}/qnas`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                qnaTitle: form.qnaTitle,
                qnaContent: form.qnaContent,
                qnaCategoryNo: form.qnaCategoryNo,
                memberId: form.memberId
            })
        })
        .then(response => response.json());

        console.log('[QNAAPICalls] callQNARegistAPI RESULT : ', result);

        dispatch({ type: POST_QNA,  payload: result });
        
    };    
}

export const callQNAUpdateAPI = ({form}) => {
    console.log('[QNAAPICalls] callQNAUpdateAPI Call');

    const requestURL = `${process.env.REACT_APP_SERVER_IP}/qnas`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            },
            body: JSON.stringify({
                qnaId : form.qnaId,
                qnaTitle: form.qnaTitle,
                qnaContent: form.qnaContent,
                qnaCategoryNo: form.qnaCategoryNo,
                memberId: form.memberId
            })
        })
        .then(response => response.json());
        
        console.log('[QNAAPICalls] callQNAUpdateAPI Result : ', result);

        dispatch({ type: PUT_QNA, payload: result });
        
    }
}

export const callAdminQNAUpdateAPI = ({form}) => {
    console.log('[QNAAPICalls] callAdminQNAUpdateAPI Call');

    const requestURL = `${process.env.REACT_APP_SERVER_IP}/qnas/admin`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "PUT",
            headers: {
                "Accept": "*/*"
            },
            body: form
        })
        .then(response => response.json());
        
        console.log('[QNAAPICalls] callAdminQNAUpdateAPI Result : ', result);

        dispatch({ type: PUT_QNA, payload: result });
        
    }
}


export const callQNADeleteAPI = (qnaId) => {
    const requestURL = `${process.env.REACT_APP_SERVER_IP}/qnas/${qnaId}`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "DELETE"
        })
        .then();
    };
}

