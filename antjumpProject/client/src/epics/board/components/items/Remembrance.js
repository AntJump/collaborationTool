import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import RemembranceLikedModal from "../../modals/RemembranceLikedModal";
import RemembranceLearnedModal from "../../modals/RemembranceLearnedModal";
import RemembranceLackedModal from "../../modals/RemembranceLackedModal";
import ArticleModal from "../../modals/ArticleModal";
// import { useDispatch, useSelector } from "react-redux";

function Remembrance({ remembrances }) {
  return (
    <>
      {/* {remembrances &&
        remembrances.map((remembrance) => ( */}
      <Box
        // key={remembrance.remembranceId}
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
            <Paper elevation={3}>
              회고 날짜 : {remembrances.remembranceDate}
            </Paper>

            <RemembranceLikedModal remembrances={remembrances} />
            <RemembranceLearnedModal remembrances={remembrances} />
            <RemembranceLackedModal remembrances={remembrances} />
          </Box>
        </div>
      </Box>
      {/* ))} */}
    </>
  );
}

export default Remembrance;
