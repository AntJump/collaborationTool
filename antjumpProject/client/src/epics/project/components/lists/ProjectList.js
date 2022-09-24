
import {  useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { GET_PROJECTS } from "../../../../modules/ProjectModule";
import {participatedProjects, myProjects} from "../../resource/datas/ProjectList"

import RegistButton from "../items/RegistButton";
import MyProjectList from "./MyProjectList";
import ParticipatedProjectList from "./ParticipatedProjectList";

function ProjectList(){
    const projects = useSelector(state => state.projectReducer);
    const dispatch = useDispatch();

    useEffect(
        ()=>{
            dispatch({type: GET_PROJECTS, payload: {participatedProjects: participatedProjects , myProjects: myProjects}});
        },
        []
    );

    return projects && (
        <>
            <h2>참여중인 프로젝트</h2>
            <ParticipatedProjectList />
            <h2 style={{display:'inline-block'}}>내 프로젝트</h2>
            <RegistButton />
            <MyProjectList />
        </>
    );
}

export default ProjectList;