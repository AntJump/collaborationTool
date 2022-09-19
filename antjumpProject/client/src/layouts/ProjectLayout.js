import { Outlet } from "react-router-dom";

import ProjectHeader from "../common/components/headers/ProjectHeader";

import ProjectTabPanel from "../common/components/tabPanel/ProjectTabPanel";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

function ProjectLayout() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
          <ProjectHeader />
          </Item>
        </Grid>
        <Grid item xs={1}>
          <Item>
            <ProjectTabPanel />
          </Item>
        </Grid>
        <Grid item xs={11}>
          <Item>
            <Outlet />
          </Item>
        </Grid>
      </Grid>
    </>
  );
}


export default ProjectLayout;
