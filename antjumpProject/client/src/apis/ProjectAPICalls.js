
import { decodeJwt } from "../utils/tokenUtils";

import { 
    GET_ALLPROJECTS, 
    GET_MYPROJECTS 
} from "../modules/ProjectListModule";

import { 
    GET_PROJECT, 
    POST_PROJECT, 
    PUT_PROJECT,  
    PATCH_PROJECT
} from "../modules/ProjectModule";

import {
    GET_PROJECT_MEMBERS,
    GET_INVITATIONS
} from "../modules/ProjectMemberModule";

console.log("[ProjectAPICalls]");

/* 모든 프로젝트 목록 조회 */
export const callAllProjectListApi = ({currentPage})=>{
    console.log("============= callAllProjectListApi ================");

    const userId = decodeJwt(window.localStorage.getItem("accessToken")).sub;

    const requestUrl = `${process.env.REACT_APP_SERVER_IP}/projects-all?currentPage=${currentPage}&limit=5&buttonCount=0&user=${userId}`;
    
    return async(dispatch, getState) => {
        const result = await fetch(requestUrl, {
            method: 'GET',
            headers:{
                "Content-Type" : "application/json"
            },
        })
        .then(response => response.json());

        console.log("result: ", result);
        dispatch({type: GET_ALLPROJECTS, payload: result.data});
    }

}

/* 내 프로젝트 목록 조회 */
export const callMyProjectListApi = ({currentPage, status})=>{
   
    console.log("============= callMyProjectListApi ================");
   
    const userId = decodeJwt(window.localStorage.getItem("accessToken")).sub;
    const requestUrl = `${process.env.REACT_APP_SERVER_IP}/projects-my?currentPage=${currentPage}&limit=5&buttonCount=5&status=${status}&user=${userId}`;


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
    
/* 프로젝트 상세 정보 조회 */
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

/* 프로젝트 생성 */
export const callProjectCreateApi = ({form}) => {
    console.log("============= callProjectCreateApi ================");
    console.log("form:", form);

    const userId = decodeJwt(window.localStorage.getItem("accessToken")).sub;

    const requestUrl = `${process.env.REACT_APP_SERVER_IP}/projects?user=${userId}`;


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
            alert("프로젝트 생성 성공");
        } else{
            alert("프로젝트 생성 실패");
        }

        window.location.reload(true);
        
    }


    
}

/* 프로젝트 정보 수정 */
export const callProjectUdateApi = ({form}) => {
    console.log("============= callProjectUdateApi ================");
    console.log("form:", form);
    const requestUrl = `${process.env.REACT_APP_SERVER_IP}/projects/${form.projectId}`;


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

            alert("프로젝트 수정 성공");
        } else{
            alert("프로젝트 수정 실패");
        }
        
        
        window.location.reload(true);
       
    }
    
}


/* 프로젝트 임시 삭제 */
export const callProjectTemporaryDeleteApi= ({projectId})=>{
    console.log("============= callProjectTemporaryDelete ================");
    const requestUrl = `${process.env.REACT_APP_SERVER_IP}/projects/${projectId}/temp-delete`;

    return async(dispatch, state)=>{
        const result = await fetch(requestUrl, {
            method: 'PATCH',
            headers:{
                "Content-Type" : "application/json"
            }
        })
        .then(response => response.json());

        console.log("result :", result);

        if(result.status == 200){
            dispatch({type: PATCH_PROJECT , payload: result});  
            alert("프로젝트 임시 삭제 성공");
        } else{
            alert("프로젝트 임시 삭제 실패");
        }

        window.location.reload(true);
    }
}

/* 프로젝트 복구 */
export const callProjectRestoreApi= ({projectId})=>{
    
    console.log("============= callProjectRestoreApi ================");
    const requestUrl = `${process.env.REACT_APP_SERVER_IP}/projects/${projectId}`;

    return async(dispatch, state)=>{
        const result = await fetch(requestUrl, {
            method: 'PATCH',
            headers:{
                "Content-Type" : "application/json"
            }
        })
        .then(response => response.json());

        console.log("result :", result);

        if(result.status == 200){
            dispatch({type: PATCH_PROJECT , payload: result});  
            alert("프로젝트 복구 성공");
        } else{
            alert("프로젝트 복구 실패");
        }

        window.location.reload(true);
    }
}


/* 유저의 프로젝트 팀원 정보(프로젝트에서의 고유 id, 역할 등) */
export const callProjectMemberByUserApi= ({projectId})=>{
    console.log("============= callProjectMemberByUserApi ================");
    const userId = decodeJwt(window.localStorage.getItem("accessToken")).sub;
    const requestUrl = `${process.env.REACT_APP_SERVER_IP}/project-members/user?projectId=${projectId}&user=${userId}`;

    return async(dispatch, state)=>{
        const result = await fetch(requestUrl, {
            method: 'GET',
            headers:{
                "Content-Type" : "application/json"
            }
        })
        .then(response => response.json());

        console.log("result :", result);

        dispatch({type: GET_PROJECT , payload: result.data});  

    }
}


//==============================================================================================================


/* 프로젝트 팀원 목록 조회 */
export const callProjectMemberListApi = ({projectId})=>{
    console.log("============= callProjectMemberListApi ================");

    const requestUrl = `${process.env.REACT_APP_SERVER_IP}/project-members?projectId=${projectId}`;
    
    return async(dispatch, getState) => {
        const result = await fetch(requestUrl, {
            method: 'GET',
            headers:{
                "Content-Type" : "application/json"
            },
        })
        .then(response => response.json());

        console.log("result: ", result);
        dispatch({type: GET_PROJECT_MEMBERS, payload: result.data});
    }

}

/* 프로젝트 팀원 역할 변경 */
export const callProjectMemberRoleModifyApi = ({projectMemberId, roleId})=>{
    console.log("============= callProjectMemberRoleModifyApi ================");

    const requestUrl = `${process.env.REACT_APP_SERVER_IP}/project-members/${projectMemberId}?roleId=${roleId}`;
    
    return async(dispatch, getState) => {
        const result = await fetch(requestUrl, {
            method: 'PATCH',
            headers:{
                "Content-Type" : "application/json"
            },
        })
        .then(response => response.json());

        console.log("result: ", result);
        dispatch({type: PATCH_PROJECT, payload: result.data});
    }

}

/* 프로젝트 역할 목록 조회 */
export const callProjectRoleListApi = ()=>{
    console.log("============= callProjectRoleListApi ================");

    const requestUrl = `${process.env.REACT_APP_SERVER_IP}/project-roles`;
    
    return async(dispatch, getState) => {
        const result = await fetch(requestUrl, {
            method: 'GET',
            headers:{
                "Content-Type" : "application/json"
            },
        })
        .then(response => response.json());

        console.log("result: ", result);
        dispatch({type: GET_PROJECT, payload: result.data});
    }

}