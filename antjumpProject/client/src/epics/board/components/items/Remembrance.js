import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import RemembranceLikedModal from "../../modals/RemembranceLikedModal";
import RemembranceLearnedModal from "../../modals/RemembranceLearnedModal";
import RemembranceLackedModal from "../../modals/RemembranceLackedModal";
// import { useDispatch, useSelector } from "react-redux";

function Remembrance() {
  const [writtenDate, setWrittenDate] = useState("2022-07-15");
  // const [likedTitle, setLikedTitle] = useState("좋았던 점");
  // const [learnedTitle, setLearnedTitle] = useState("배웠던 점");
  // const [lackedTitle, setlackedTitle] = useState("부족했던 점");
  // const results = useSelector((state) => state);
  // const dispatch = useDispatch();

  return (
    <>
      <Box
        sx={{
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            marginLeft: "50px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: "120px",
                marginRight: "140px",
                height: 30,
              },
            }}
          >
            <Paper elevation={3}>Sprint</Paper>
            <Paper elevation={3}>Liked</Paper>
            <Paper elevation={3}>Learned</Paper>
            <Paper elevation={3}>Lacked</Paper>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: "200px",
                height: 30,
                marginRight: "50px",
              },
            }}
          >
            <Paper elevation={3}>스프린트 키 : {writtenDate}</Paper>
            <RemembranceLikedModal />
            <RemembranceLearnedModal />
            <RemembranceLackedModal />
          </Box>
        </div>
      </Box>
    </>
  );
}

export default Remembrance;
