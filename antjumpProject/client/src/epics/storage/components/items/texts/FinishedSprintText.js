import { useState } from "react";
import SelectRememberanceButton from "../buttons/SelectRememberanceButton";
import Stack from "@mui/material/Stack";

function FinishedSprintText() {
  const [sprintName, setSprintName] = useState("개미 스프린트");
  const [sprintKey, setSprintKey] = useState("Sprint-01");
  const [startDate, setStartDate] = useState("2022-07-26");
  const [finishedDate, setFinishedDate] = useState("2022-08-23");
  const [deadLineDate, setDeadLineDate] = useState("2022-08-25");
  const [finishedCount, setFinishedCount] = useState("4");
  const [unFinishedCount, setUnFinishedCount] = useState("0");
  const [participantCount, setParticipantCount] = useState("5");

  const h3Style = {
    marginLeft: 30,
    marginRight: 100,
  };

  const h4Style = {
    margin: 0,
  };

  return (
    <>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        spacing={0}
      >
        <div>
          <h2>{sprintName} </h2>
          <h4>{sprintKey}</h4>
          <h3>
            {startDate} ~ {finishedDate}
          </h3>
        </div>

        {/* <div
          style={{
            display: "flex",
          }}
        > */}
        <div>
          <h3 style={h3Style}>백로그 </h3>
          <div>
            <h4 style={h4Style}>완료: {finishedCount}</h4>
            <h4 style={h4Style}>미완료: {unFinishedCount}</h4>
          </div>
        </div>

        <div>
          <h3 style={h3Style}>실제 완료 날짜 </h3>
          <h4 style={h3Style}>{deadLineDate}</h4>
        </div>

        <div>
          <h3>참여자 수</h3>
          <h4>{participantCount}명</h4>
        </div>
        <div
          style={{
            marginLeft: "50px",
            marginTop: "40px",
          }}
        >
          <SelectRememberanceButton />
        </div>
        {/* </div> */}
      </Stack>
    </>
  );
}

export default FinishedSprintText;
