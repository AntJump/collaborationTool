import RemembranceList from "../../board/components/lists/RemembranceList";
import RemembranceStorageHeader from "../components/items/texts/RemembranceStorageHeader";
import Grid from "@mui/material/Grid";

function RemembranceStoragePage() {
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <RemembranceStorageHeader />
        <hr />
        <Grid item xs={3}>
          <RemembranceList />
          <RemembranceList />
          <RemembranceList />
        </Grid>
      </Grid>
    </>
  );
}

export default RemembranceStoragePage;
