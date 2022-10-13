import * as React from "react";
import Box from "@mui/material/Box";
import FinishedSprintText from "../texts/FinishedSprintText";
import { useSelector } from "react-redux";

const remembranceStyle = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  m: 3,
  border: 1,
  width: "60rem",
  height: "9rem",
};

function FinishedSprintBox() {
  const sprints = useSelector((state) => state.sprintReducer);
  const finishSprints = sprints.finish;

  console.log(sprints);
  return (
    <>
      {finishSprints &&
        finishSprints.map((sprint) => (
          <Box
            key={sprint.sprintId}
            sx={{ ...remembranceStyle, borderRadius: "16px" }}
          >
            <FinishedSprintText sprint={sprint} />
          </Box>
        ))}
    </>
  );
}

export default FinishedSprintBox;
