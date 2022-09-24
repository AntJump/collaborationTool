import { Button, Grid, Box } from "@mui/material";
import { useParams } from "react-router-dom";

function BacklogPage() {
  const { id } = useParams();

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Box>
            <h3>메인 스프린트</h3>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <h3>임시 스프린트</h3>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Button variant="contained" href={`/project/${id}/issue-create`}>
              이슈 생성
            </Button>
            <h3>백로그 목록</h3>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default BacklogPage;
