import CreateButton from "../components/items/CreateButton";
import MyProjectList from "../components/lists/MyProjectList";
import ParticipatedProjectList from "../components/lists/ParticipatedProjectList";
import CreateModal from "../components/modals/CreateModal";

function ProjectlistPage() {
  return (
    <div>
      <CreateModal />
      <h2>참여중인 프로젝트</h2>
      <ParticipatedProjectList />
      <h2>내 프로젝트</h2>
      <CreateButton />
      <MyProjectList />
    </div>
  );
}

export default ProjectlistPage;
