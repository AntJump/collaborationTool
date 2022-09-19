import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import Box from "@mui/material/Box";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

function BoardPage() {
  const [sprintName, setSprintName] = useState("개미 스프린트");
  const [startDate, setStartDate] = useState("2022-07-12");
  const [endDate, setEndDate] = useState("2022-08-11");

  const leftDate = -29;

  function SprintIcon(props) {
    return (
      <DirectionsRunIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </DirectionsRunIcon>
    );
  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <div classname="">
        <div>
          <h3>
            {sprintName} {startDate} ~ {endDate}
          </h3>
        </div>
        <div>
          <SprintIcon />
          {leftDate}
          <button>스프린트 완료</button>
        </div>
      </div>
      {/* <Box
        sx={{
          "& > :not(style)": {
            m: 2,
          },
        }}
      >
        <SprintIcon />
        {leftDate}
        <button>스프린트 완료</button>
      </Box> */}

      {/* <Grid container spacing={2}>
        <Grid item xs={5}>
          <Item>
            <div>
              <h3>
                {sprintName} {startDate} ~ {endDate}
              </h3>
            </div>
          </Item>
        </Grid>
        <Grid item xs={7}>
          <Item>
            <div>
              <Box
                sx={{
                  "& > :not(style)": {
                    m: 2,
                  },
                }}
              >
                <SprintIcon />
                {leftDate}
                <button>스프린트 완료</button>
              </Box>
            </div>
          </Item>
        </Grid>
      </Grid> */}
    </>
  );
}

export default BoardPage;
