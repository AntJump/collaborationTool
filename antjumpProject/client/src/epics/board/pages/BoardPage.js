import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AddIcon from "@mui/icons-material/Add";

function BoardPage() {
  const [sprintName, setSprintName] = useState("개미 스프린트");
  const [startDate, setStartDate] = useState("2022-07-12");
  const [endDate, setEndDate] = useState("2022-08-11");
  const [progressState, setProgressState] = useState("20");
  const [alarmCycle, setAlarmCycle] = useState("일주일 마다");
  const [writtenDate, setWrittenDate] = useState("2022-07-15");
  const [likedTitle, setLikedTitle] = useState("좋았던 점");
  const [learnedTitle, setLearnedTitle] = useState("배웠던 점");
  const [lackedTitle, setlackedTitle] = useState("부족했던 점");

  const leftDate = -29;

  function AlarmIcon(props) {
    return (
      <AccessAlarmIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </AccessAlarmIcon>
    );
  }

  function SprintIcon(props) {
    return (
      <DirectionsRunIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </DirectionsRunIcon>
    );
  }

  function ArrowDownIcon(props) {
    return (
      <ArrowDropDownIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </ArrowDropDownIcon>
    );
  }

  function PlusIcon(props) {
    return (
      <AddIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </AddIcon>
    );
  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  // 진행률 설정
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 20,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
    },
  }));

  return (
    <>
      <div
        style={{
          display: "flex",
        }}
      >
        <div>
          <h3>
            {sprintName} {startDate} ~ {endDate}
          </h3>
        </div>
        <div
          style={{
            marginLeft: "810px",
            marginTop: "20px",
          }}
        >
          <SprintIcon />
          {leftDate}
          <button
            style={{
              marginLeft: "50px",
            }}
          >
            스프린트 완료
          </button>
        </div>
      </div>

      {/* 진행률 */}
      <Box sx={{ flexGrow: 1 }}>
        <BorderLinearProgress variant="determinate" value={progressState} />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 430,
            height: 400,
          },
        }}
      >
        <Paper elevation={3}>시작 전</Paper>
        <Paper elevation={3}>진행 중</Paper>
        <Paper elevation={3}>완료</Paper>
      </Box>
      <div
        style={{
          display: "flex",
          marginLeft: "1200px",
        }}
      >
        <AlarmIcon />
        <ArrowDownIcon />
        <span>{alarmCycle}</span>
      </div>
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
              width: "150px",
              marginRight: "150px",
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
              width: "250px",
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

export default BoardPage;
