import { GET_ALLPROJECTS, GET_MYPROJECTS } from "../modules/ProjectListModule";
import { GET_PROJECT, POST_PROJECT, PUT_PROJECT } from "../modules/ProjectModule";

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
    

export const callProjectDetailApi = ({projectId})=>{
   
    console.log("============= callProjectDetailApi ================");
    const requestUrl = `${process.env.REACT_APP_SERVER_IP}/projects/${projectId}`;


    return async(dispatch, getState) => {
        const result = await fetch(requestUrl, {
            method: 'GET',
            headers:{
                "Content-Type" : "application/json"
            }
        })
        .then(response => response.json());

        console.log("result: ", result);
        dispatch({type: GET_PROJECT, payload: result.data});
    }

}

export const callProjectCreateApi = ({form}) => {
    console.log("============= callProjectCreateApi ================");
    console.log("form:", form);
    const requestUrl = `${process.env.REACT_APP_SERVER_IP}/projects`;


    return async(dispatch, getState) => {
        const result = await fetch(requestUrl, {
            method: 'POST',
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(form)
        })
        .then(response => response.json());
        console.log("result: ", result);

        if(result.status == 200){
            dispatch({type: POST_PROJECT, payload: result.data});
            alert('프로젝트 생성 완료!');
        }else{
            alert('프로젝트 생성 실패!');
        }

        window.location.reload(true);
        
    }


    
}

export const callProjectUdateApi = ({form, projectId}) => {
    console.log("============= callProjectUdateApi ================");
    console.log("form:", form);
    const requestUrl = `${process.env.REACT_APP_SERVER_IP}/projects/${projectId}`;


    return async(dispatch, getState) => {
        const result = await fetch(requestUrl, {
            method: 'PUT',
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(form)
        })
        .then(response => response.json());
        console.log("result: ", result);

        if(result.status == 200){
            dispatch({type: PUT_PROJECT, payload: result.data});
            alert('프로젝트 수정 완료!');
        }else{
            alert('프로젝트 수정 실패!');
        }

        window.location.reload(true);
        
    }
    
}