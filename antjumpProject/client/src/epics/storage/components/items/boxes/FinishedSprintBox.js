import * as React from "react";
import Box from "@mui/material/Box";
import FinishedSprintText from "../texts/FinishedSprintText";
import StorageHeader from "../texts/StorageHeader";

const remembranceStyle = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  m: 3,
  border: 1,
  width: "60rem",
  height: "9rem",
};

function FinishedSprintBox() {
  return (
    <>
      <Box sx={{ ...remembranceStyle, borderRadius: "16px" }}>
        <FinishedSprintText />
      </Box>
      <Box sx={{ ...remembranceStyle, borderRadius: "16px" }}>
        <FinishedSprintText />
      </Box>
    </>
  );
}

export default FinishedSprintBox;
