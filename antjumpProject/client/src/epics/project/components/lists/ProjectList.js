
import RegistButton from "../items/RegistButton";
import MyProjectTable from "./MyProjectTable";
import AllProjectList from "./AllProjectList";
import {Stack} from "@mui/material";

function ProjectList(){

    return(
        <>
            <h3>참여중인 모든 프로젝트</h3>
            <Stack direction="row" m={2} justifyContent='center'>
                <AllProjectList />
            </Stack>
            
           
            <h3 style={{display:'inline-block'}}>내 프로젝트</h3>
            <RegistButton />
            <MyProjectTable />
        </>
    );
}

export default ProjectList;