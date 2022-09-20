import SprintIcon from "../icons/SprintIcon";
import { useState } from "react";

function BoardHeaderText() {
  const [sprintName, setSprintName] = useState("개미 스프린트");
  const [startDate, setStartDate] = useState("2022-07-12");
  const [endDate, setEndDate] = useState("2022-08-11");
  const leftDate = -29;
  return (
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
          marginLeft: "700px",
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
  );
}

export default BoardHeaderText;
