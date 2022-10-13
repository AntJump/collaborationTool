import {
    GET_MEMBERS,
    GET_MEMBER_DETAIL,
} from '../modules/MemberModule';


export const callMemberListAPI = () => {
    const requestURL = `${process.env.REACT_APP_SERVER_IP}/member`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json());

        console.log('[MemberAPICalls] callMemberListAPI RESULT : ', result.data);

        dispatch({ type: GET_MEMBERS,  payload: result.data });
        
    };
    
}

export const callMemberDetailAPI = (memberId) => {
    const requestURL = `${process.env.REACT_APP_SERVER_IP}/member/${memberId}`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json());

        console.log('[MemberAPICalls] callMemberDetailAPI RESULT : ', result.data);

        dispatch({ type: GET_MEMBER_DETAIL,  payload: result.data });
        
    };
    
}
