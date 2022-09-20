import SprintIcon from "../icons/SprintIcon";
import SprintFinishedModal from "../../../modals/SprintFinishedModal";
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
        justifyContent: "space-between",
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
          display: "flex",
        }}
      >
        <h3>
          <SprintIcon />
          {leftDate}
        </h3>
        <div style={{ marginLeft: "20px", marginTop: "20px" }}>
          <SprintFinishedModal />
        </div>
      </div>
    </div>
  );
}

export default BoardHeaderText;
