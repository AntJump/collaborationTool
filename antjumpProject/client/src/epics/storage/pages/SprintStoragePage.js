import SprintStorageHeader from "../components/items/texts/SprintStorageHeader";
import FinishedSprintBox from "../components/items/boxes/FinishedSprintBox";
import Grid from "@mui/material/Grid";
import { useSelector, useDispatch } from "react-redux";
import { callSelectSprintsByStatusAPI } from "../../../apis/SprintAPICalls";
import { useEffect } from "react";

function SprintStoragePage() {
  const projectId = 1;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(callSelectSprintsByStatusAPI("완료", projectId));
  }, []);

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
