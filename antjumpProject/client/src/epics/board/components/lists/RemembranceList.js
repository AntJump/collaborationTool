import Remembrance from "../items/Remembrance";
import RemembranceHeader from "../items/texts/RemembranceHeader";
import Box from "@mui/material/Box";

const remembranceStyle = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  m: 1,
  border: 1,
  width: "75rem",
  height: "6rem",
};

function RemembranceList() {
  return (
    <>
      <Box sx={{ ...remembranceStyle, borderRadius: "16px" }}>
        <Remembrance />
      </Box>
    </>
  );
}

export default RemembranceList;
