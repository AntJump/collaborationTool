import SprintStorageHeader from "../components/items/texts/SprintStorageHeader";
import FinishedSprintBox from "../components/items/boxes/FinishedSprintBox";
import Grid from "@mui/material/Grid";

function SprintStoragePage() {
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        // justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <SprintStorageHeader />
        <hr />
        <Grid item xs={3}>
          <FinishedSprintBox />
        </Grid>
      </Grid>
    </>
  );
}

export default SprintStoragePage;
