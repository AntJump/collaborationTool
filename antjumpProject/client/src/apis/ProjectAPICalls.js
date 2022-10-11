import { GET_PROJECTS } from "../modules/ProjectModule";

console.log("[ProjectAPICalls]");

export const callAllProjectListApi = ({currentPage})=>{
    console.log("============= callAllProjectListApi ================");
    
    const requestUrl = `http://${process.env.REACT_APP_RESTAPI_IP}:8181/projects-all?currentPage=${currentPage}&limit=5&buttonCount=1`;
    
    return async(dispatch, getState) => {
        const result = await fetch(requestUrl, {
            method: 'GET',
            headers:{
                "Content-Type" : "application/json"
            }
        })
        .then(response => response.json());

        console.log("result: ", result);
        dispatch({type: GET_PROJECTS, payload: result});
    }

}


export const callMyProjectListApi = ({currentPage})=>{
   
    console.log("============= callMyProjectListApi ================");
    const requestUrl = `http://${process.env.REACT_APP_RESTAPI_IP}:8181/projects-my?currentPage=${currentPage}&limit=5&buttonCount=1`;


    return async(dispatch, getState) => {
        const result = await fetch(requestUrl, {
            method: 'GET',
            headers:{
                "Content-Type" : "application/json"
            }
        })
        .then(response => response.json());

        console.log("result: ", result);
        dispatch({type: GET_PR+OJECTS, payload: result});
    }

}
    