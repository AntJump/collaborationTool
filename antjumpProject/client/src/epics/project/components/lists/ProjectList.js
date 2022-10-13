
import { Box } from "@mui/material";

import {  useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { GET_PROJECTS } from "../../../../modules/ProjectModule";
import {participatedProjects, myProjects} from "../../datas/ProjectList"

import RegistButton from "../items/RegistButton";
import MyProjectTable from "./MyProjectTable";
import ParticipatedProjectList from "./ParticipatedProjectList";
import {Stack} from "@mui/material";

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
            <h3>참여중인 프로젝트</h3>
            <Stack m={2} justifyContent='center'>
                <ParticipatedProjectList />
            </Stack>
            
           
            <h3 style={{display:'inline-block'}}>내 프로젝트</h3>
            <RegistButton />
            <MyProjectTable />
        </>
    );
}

export default ProjectList;