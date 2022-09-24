import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";

function BacklogPage() {
  const { id } = useParams();

  return (
    <>
      <h2>프로젝트 페이지</h2>
      <h3>메인 스프린트</h3>
      <h3>임시 스프린트</h3>
      <h3>백로그 목록</h3>

      <Button variant="contained" href={`/project/${id}/issue-create`}>
        이슈 생성
      </Button>
    </>
  );
}

export default BacklogPage;
