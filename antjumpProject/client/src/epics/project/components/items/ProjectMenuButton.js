
import { Button } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
// import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";

import { useState } from "react";
import ModifyModal from "../modals/ModifyModal";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right"
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 33,
    minWidth: 130,
    color: theme.palette.black,
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
        "& .MuiMenuItem-root": {
            justifyContent : 'center',
      "& .MuiSvgIcon-root": {
        fontSize: 18
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        )
      }
    }
  }
}));

function ProjectMenuButton({project}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const [ModifymodalOpen, setModalOpen] = useState(false);
    const handleModifyModalOpen = () => setModalOpen(true);
    const handleModifyModalClose = () => setModalOpen(false);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const onClickhandleModifyItem = () => {
      handleModifyModalOpen();
      // setAnchorEl(null);
    };


    return (
      <div>
        <Button
          id="demo-customized-button"
          aria-controls={open ? "demo-customized-menu" : undefined}
          onClick={handleClick}
        >
          ⋮
        </Button>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            "aria-labelledby": "demo-customized-button"
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={onClickhandleModifyItem} disableRipple>
            정보 수정
          </MenuItem>
          <ModifyModal open = {ModifymodalOpen} handleClose = {handleModifyModalClose} project={project}/>
          <Divider sx={{ my: 0.5 }} />
          <MenuItem onClick={handleClose} disableRipple>
            팀원 목록
          </MenuItem>
          <Divider sx={{ my: 0.5 }} />
          <MenuItem onClick={handleClose} disableRipple>
            프로젝트 삭제
          </MenuItem>
        </StyledMenu>
      </div>
    );
}

export default ProjectMenuButton;