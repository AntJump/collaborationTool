import Remembrance from "../items/Remembrance";
import RemembranceHeader from "../items/texts/RemembranceHeader";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";

const remembranceStyle = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  m: 1,
  border: 1,
  width: "75rem",
  height: "6rem",
};

function RemembranceList() {
  const results = useSelector((state) => state.remembranceReducer);
  const rememberanceList = results.rememberanceList;
  return (
    <>
      {rememberanceList &&
        rememberanceList.map((remembrance) => (
          <Box
            key={remembrance.remembranceId}
            sx={{ ...remembranceStyle, borderRadius: "16px" }}
          >
            <Remembrance remembrances={remembrance} />
          </Box>
        ))}
    </>
  );
}

export default RemembranceList;
