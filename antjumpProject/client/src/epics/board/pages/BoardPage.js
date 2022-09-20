import ProgressBar from "../components/items/bars/ProgressBar";
import BoardHeaderText from "../components/items/texts/BoardHeaderText";
import IssueContainBox from "../components/items/boxes/IssueContainBox";
import AlarmText from "../components/items/texts/AlarmText";
import Remembrance from "../components/items/Remembrance";

function BoardPage() {
  return (
    <>
      <BoardHeaderText />
      <ProgressBar />
      <IssueContainBox />
      <AlarmText />
      <Remembrance />
    </>
  );
}

export default BoardPage;
