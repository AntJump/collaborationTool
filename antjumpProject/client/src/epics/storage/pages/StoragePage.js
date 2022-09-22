import StorageHeader from "../components/items/texts/StorageHeader";
import FinishedSprintBox from "../components/items/boxes/FinishedSprintBox";
import Grid from "@mui/material/Grid";

function StoragePage() {
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <StorageHeader />
        {/* <FinishedSprintBox /> */}
        <Grid item xs={3}>
          <FinishedSprintBox />
        </Grid>
      </Grid>
      {/* <Box sx={{ ...remembranceStyle, borderRadius: "16px" }}>
        <FinishedSprintBox />
      </Box>
      <Box sx={{ ...remembranceStyle, borderRadius: "16px" }}>
        <FinishedSprintBox />
      </Box> */}
    </>
  );
}

export default StoragePage;
