import ProgressBar from "../components/items/bars/ProgressBar";
import BoardHeaderText from "../components/items/texts/BoardHeaderText";
import IssueContainBox from "../components/items/boxes/IssueContainBox";
import AlarmText from "../components/items/texts/AlarmText";
import Remembrance from "../components/items/Remembrance";
import RemembranceHeader from "../components/items/texts/RemembranceHeader";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import RemembranceList from "../components/lists/RemembranceList";
import Grid from "@mui/material/Grid";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  callCloseSprintAPI,
  callModifySprintAlarmAPI,
  callSelectSprintByIdAPI,
} from "../../../apis/SprintAPICalls";
import { callSelectRemembrancesAPI } from "../../../apis/RemembranceAPICalls";
import { useSelector } from "react-redux";
import { INIT_REMEMBRANCES } from "../../../modules/RemembranceModule";

function BoardPage() {
  const dispatch = useDispatch();
  const results = useSelector((state) => state.remembranceReducer);

  const sprintId = 1;
  const projectId = 1;

  useEffect(() => {
    if (results.postSuccess !== "") {
      dispatch(callSelectSprintByIdAPI(sprintId, projectId));
      dispatch(callSelectRemembrancesAPI(sprintId));
      dispatch({ type: INIT_REMEMBRANCES });
    }
  }, [results.postSuccess]);

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <BoardHeaderText />
        <Box sx={{ m: 1, border: 1 }}>
          <ProgressBar />
          <IssueContainBox />
        </Box>
        <hr />
        <Grid item xs={3}>
          <AlarmText />
          <RemembranceHeader fk_sprints_remembrances={sprintId} />
          <RemembranceList />
        </Grid>
      </Grid>
    </>
  );
}

export default BoardPage;
