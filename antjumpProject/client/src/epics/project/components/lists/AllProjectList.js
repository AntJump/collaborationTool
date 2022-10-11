
import { Button } from '@mui/material';



import { Link } from 'react-router-dom';
import {  useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { callAllProjectListApi } from "../../../../apis/ProjectAPICalls";


import AllProjectCard from '../items/AllProjectCard';

import PagingAfterButton from '../items/PagingAfterButton';
import PagingBeforeButton from '../items/PagingBeforeButton';

function AllProjectList(){

    const result = useSelector(state => state.projectReducer);
    const projects = result.allProjects.data;
    const pagingInfo = result.allProjects.pagingInfo;
        console.log("all projects :", projects);
        console.log("all projects paging:", pagingInfo);

    const dispatch = useDispatch();
    useEffect(
        ()=>{
            dispatch(callAllProjectListApi({currentPage: 1}));
        },
        []
    );

    const [currentPage, setCurrentPage] = useState(1);
    const onClickButton = (param)=>{
        setCurrentPage(param);
    }

    // 현재 페이지가 바뀔 때마다 api호출해서 랜더링
    useEffect(
        ()=>{
            dispatch(callAllProjectListApi({currentPage: currentPage}));
        },
        [currentPage]
    );



    return  Array.isArray(projects) && (
        <div>
            <PagingBeforeButton onClickHandler={onClickButton} currentPage={currentPage}/>
            
            {projects.map(project => 
              
                <Button  
                    key ={project.projectId} 
                    component={Link} to={`/project/${project.id}`} 
                    color="blackline" sx={{minWidth:  275, maxWidth: 300}}
                    
                >
                    <AllProjectCard project = {project}/>
                </Button>                       

            )}

            <PagingAfterButton onClickHandler={onClickButton} currentPage={currentPage} pagingInfo={pagingInfo}/>
        </div>
        
    );

}

export default AllProjectList;
