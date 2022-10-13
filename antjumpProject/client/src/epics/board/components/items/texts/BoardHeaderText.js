import SprintIcon from "../icons/SprintIcon";
import SprintFinishedModal from "../../../modals/SprintFinishedModal";
import { useSelector } from "react-redux";

function BoardHeaderText() {
  const results = useSelector((state) => state.sprintReducer);
  const sprint = results.sprint;
  console.log("sprint data : ", sprint);

  return (
    <>
      {sprint &&
        sprint.map((sprintInfo) => (
          <div key={sprintInfo.sprintId}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h3>
                  {sprintInfo.sprintName} {sprintInfo.sprintStartDate} ~{" "}
                  {sprintInfo.sprintEndDate}
                </h3>
              </div>
              <div
                style={{
                  marginLeft: "400px",
                  marginTop: "20px",
                  display: "flex",
                }}
              >
                <h3>
                  <SprintIcon />
                  {/* {leftDate} */}
                </h3>
                <div style={{ marginLeft: "20px", marginTop: "20px" }}>
                  <SprintFinishedModal sprintInfo={sprintInfo} />
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

export default BoardHeaderText;
