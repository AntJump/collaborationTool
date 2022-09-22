import { Button, MenuItem, Box} from "@mui/material";
import { StyledMenu } from "./StyledMenu";
import { useState } from "react";

function RoleChangeButton({member}){
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null)
    };
    

    return (
        <Box >
            <Button color = "grey" variant="contained" onClick={handleClick} sx={{ borderRadius:10, display: 'inline-block'}}>
                {member.roleName}
            </Button>
            <StyledMenu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose} disableRipple> 팀원 </MenuItem>
                <MenuItem onClick={handleClose} disableRipple> 스크럼 매니저 </MenuItem>
            </StyledMenu> 
        </Box>
    );
}

export default RoleChangeButton;