import ProgressBar from "../components/items/bars/ProgressBar";
import BoardHeaderText from "../components/items/texts/BoardHeaderText";
import IssueContainBox from "../components/items/boxes/IssueContainBox";
import AlarmText from "../components/items/texts/AlarmText";
import Remembrance from "../components/items/Remembrance";
import RemembranceHeader from "../components/items/texts/RemembranceHeader";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const remembranceStyle = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  m: 1,
  border: 1,
  width: "75rem",
  height: "6rem",
};

function BoardPage() {
  return (
    <>
      <BoardHeaderText />
      <Box sx={{ m: 1, border: 1 }}>
        <ProgressBar />
        <IssueContainBox />
      </Box>
      <AlarmText />
      <RemembranceHeader />
      <Box sx={{ ...remembranceStyle, borderRadius: "16px" }}>
        <Remembrance />
      </Box>
    </>
  );
}

export default BoardPage;
