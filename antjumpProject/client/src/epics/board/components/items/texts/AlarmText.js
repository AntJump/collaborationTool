import AlarmIcon from "../icons/AlarmIcon";
import ArrowDownIcon from "../icons/ArrowDownIcon";
import { useState } from "react";

function AlarmText() {
  const [alarmCycle, setAlarmCycle] = useState("일주일 마다");
  return (
    <div
      style={{
        display: "flex",
        marginLeft: "1100px",
      }}
    >
      <AlarmIcon />
      <ArrowDownIcon />
      <span>{alarmCycle}</span>
    </div>
  );
}

export default AlarmText;
