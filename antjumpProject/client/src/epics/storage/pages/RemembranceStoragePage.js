import RemembranceList from "../../board/components/lists/RemembranceList";
import RemembranceStorageHeader from "../components/items/texts/RemembranceStorageHeader";

function RemembranceStoragePage() {
  return (
    <>
      <RemembranceStorageHeader />
      <hr />
      <RemembranceList />
      <RemembranceList />
      <RemembranceList />
    </>
  );
}

export default RemembranceStoragePage;
