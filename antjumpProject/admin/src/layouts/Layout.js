import { Outlet } from "react-router-dom";

import TabPanel from "../components/tabpanel/TabPanel";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Stack } from "@mui/material";

function Layout() {
  const Item = styled(Paper)(({ theme }) => ({
    textAlign: "center",
    borderRadius:'20px'
  }));

  return (
    <>
      <Stack direction="row" spacing={3}>
        <Grid div xs={1}/>
        <Grid item xs={2}>
            <Item >
              <TabPanel />
            </Item>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={11.8}>
            <Item>
              <Outlet />
            </Item>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
}


export default Layout;
