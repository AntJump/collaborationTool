
import SearchBox from "../components/items/SearchBox";
import ProjectList from "../components/lists/ProjectList";

import { Grid } from "@mui/material";

function ProjectlistPage() {
  return (
    <Grid container spacing={1} sx={{width:'90%' , margin:'auto'}}>
      <Grid item xs={12}>
        <SearchBox />
      </Grid>
      <Grid item xs={12}>
        <ProjectList/>
      </Grid>
    </Grid>
  );
}

export default ProjectlistPage;
