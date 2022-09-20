import MyProjectList from "../components/lists/MyProjectList";
import ParticipatedProjectList from "../components/lists/ParticipatedProjectList";

function ProjectlistPage() {
  return (
    <div>
      <SearchBox />
      <h2>참여중인 프로젝트</h2>
      <ParticipatedProjectList />
      <h2>내 프로젝트</h2>
      <RegistButton />
      <MyProjectList />
    </div>
  );
}

export default ProjectlistPage;
