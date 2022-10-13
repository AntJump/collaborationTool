
import { Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";

import { useState } from "react";
import ModifyMenuItem from "./ModifyMenuItem";
import DeleteMenuItem from "./DeleteMenuItem";
import MembersMenuItem from "./MembersMenuItem";

import { StyledMenu } from "./StyledMenu";

function ProjectMenuButton({project}) {

  console.log("project", project); 
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
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
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <ModifyMenuItem projectId={project.projectId}/>
          <Divider sx={{ my: 0.5 }} />
          <MembersMenuItem project={project}/>
          <Divider sx={{ my: 0.5 }} />
          <DeleteMenuItem projectId={project.projectId}/>

        </StyledMenu>
      </div>
    );
}

export default ProjectMenuButton;