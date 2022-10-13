import { Button, MenuItem, Box} from "@mui/material";
import { StyledMenu } from "./StyledMenu";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { callProjectRoleListApi, callProjectMemberRoleModifyApi } from "../../../../apis/ProjectAPICalls";
function RoleChangeButton({roleInfo, projectMemberId}){
    console.log("roleInfo:", roleInfo);
    const roleList = useSelector(state => state.projectReducer);
        console.log("roleList:", roleList);
    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {

        // 역할 목록 api 호출 -> roleList세팅
        dispatch(callProjectRoleListApi());    
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (e) => {
        setAnchorEl(null);
    };


    const onClickOtherRole = (e)=>{
        dispatch(callProjectMemberRoleModifyApi({projectMemberId: projectMemberId, roleId: e.target.value}));
        setAnchorEl(null);
    }

    
    

    return roleInfo && (
        <Box >
            <Button color = "grey" variant="contained" onClick={handleClick} sx={{ borderRadius:10, display: 'inline-block'}}>
                {roleInfo.projectRoleName}
            </Button>
            {roleInfo.projectRoleName != 'PM' && 
            <StyledMenu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {Array.isArray(roleList) &&  roleList.map(role => 
                    role.projectRoleName!= 'PM' && 
                    role.projectRoleName != roleInfo.projectRoleName &&  
                    <MenuItem onClick={onClickOtherRole} value = {role.projectRoleId} disableRipple> {role.projectRoleName} </MenuItem>
                )}
            </StyledMenu> }
        </Box>
    );
}

export default RoleChangeButton;