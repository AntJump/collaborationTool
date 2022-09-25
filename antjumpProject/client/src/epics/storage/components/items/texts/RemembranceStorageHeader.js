import { useState } from "react";

function RemembranceStorageHeader() {
  const [sprintKey, setSprintKey] = useState("Sprint-01");

  return (
    <>
      <h1 align="left">{sprintKey} 회고록</h1>
    </>
  );
}

export default RemembranceStorageHeader;
