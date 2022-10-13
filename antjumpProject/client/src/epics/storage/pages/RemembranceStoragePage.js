import RemembranceList from "../../board/components/lists/RemembranceList";
import RemembranceStorageHeader from "../components/items/texts/RemembranceStorageHeader";
import Grid from "@mui/material/Grid";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { callSprintAPI } from "../../../apis/SprintAPICalls";
import { callSelectRemembrancesAPI } from "../../../apis/RemembranceAPICalls";

function RemembranceStoragePage() {
  const dispatch = useDispatch();
  const remembrances = useSelector((state) => state.remembranceReducer);
  const sprintId = 1;
  const projectId = 1;

  useEffect(() => {
    dispatch(callSelectRemembrancesAPI(sprintId));
  }, []);

  return (
    <>
      {/* (remembrances && remembrances.map((remembrance => (
      
    )))) */}
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
