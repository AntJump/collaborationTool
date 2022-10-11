import { GET_ALLPROJECTS, GET_MYPROJECTS } from "../modules/ProjectModule";

console.log("[ProjectAPICalls]");

export const callAllProjectListApi = ({currentPage})=>{
    console.log("============= callAllProjectListApi ================");
    
    const requestUrl = `${process.env.REACT_APP_SERVER_IP}/projects-all?currentPage=${currentPage}&limit=5&buttonCount=0`;
    
    return async(dispatch, getState) => {
        const result = await fetch(requestUrl, {
            method: 'GET',
            headers:{
                "Content-Type" : "application/json"
            }
        })
        .then(response => response.json());

        console.log("result: ", result);
        dispatch({type: GET_ALLPROJECTS, payload: result.data});
    }

}


export const callMyProjectListApi = ({currentPage, status})=>{
   
    console.log("============= callMyProjectListApi ================");
    const requestUrl = `${process.env.REACT_APP_SERVER_IP}/projects-my?currentPage=${currentPage}&limit=5&buttonCount=5&status=${status}`;


    return async(dispatch, getState) => {
        const result = await fetch(requestUrl, {
            method: 'GET',
            headers:{
                "Content-Type" : "application/json"
            }
        })
        .then(response => response.json());

        console.log("result: ", result);
        dispatch({type: GET_MYPROJECTS, payload: result.data});
    }

}
    