import { Outlet } from "react-router-dom";

import ProjectHeader from "../common/components/headers/ProjectHeader";

import ProjectTabPanel from "../common/components/tabPanel/ProjectTabPanel";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Stack } from "@mui/material";

function ProjectLayout() {
  const Item = styled(Paper)(({ theme }) => ({
    textAlign: "center",
  }));

  return (
    <>
      <Stack direction="row" spacing={2}>
      <Grid item xs={1}>
          <Item>
            <ProjectTabPanel />
          </Item>
        </Grid>
        <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
          <ProjectHeader />
          </Item>
        </Grid>
       
        <Grid item xs={12}>
          <Item>
            <Outlet />
          </Item>
        </Grid>
      </Grid>
      </Stack>
    </>
  );
}


export default ProjectLayout;
