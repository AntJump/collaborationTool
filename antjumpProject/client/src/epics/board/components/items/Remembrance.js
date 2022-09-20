import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import PlusIcon from "./icons/PlusIcon";

function Remembrance() {
  const [writtenDate, setWrittenDate] = useState("2022-07-15");
  const [likedTitle, setLikedTitle] = useState("좋았던 점");
  const [learnedTitle, setLearnedTitle] = useState("배웠던 점");
  const [lackedTitle, setlackedTitle] = useState("부족했던 점");

  return (
    <>
      <div
        style={{
          display: "flex",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            marginLeft: "50px",
          }}
        >
          <h2>스프린트 회고</h2>
        </div>
        <div
          style={{
            marginLeft: "930px",
          }}
        >
          <h2>
            <PlusIcon />
            회고 생성
          </h2>
        </div>
      </div>
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
              width: "140px",
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
              width: "230px",
              height: 30,
              marginRight: "50px",
            },
          }}
        >
          <Paper elevation={3}>스프린트 키 : {writtenDate}</Paper>
          <Paper elevation={3}>{likedTitle}</Paper>
          <Paper elevation={3}>{learnedTitle}</Paper>
          <Paper elevation={3}>{lackedTitle}</Paper>
        </Box>
      </div>
    </>
  );
}

export default Remembrance;
