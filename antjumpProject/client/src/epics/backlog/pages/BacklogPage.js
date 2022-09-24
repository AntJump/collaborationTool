import { Button,  Grid, Box, Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import BacklogTable from "../lists/BacklogTable";

function BacklogPage() {
  const { id } = useParams();

  return (
    <>
      <Grid container spacing={1} sx={{width:'90%' , margin:'auto'}}>
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
        <Grid item xs={12}  mb={3}>
          <Box>
            <Stack  direction='row' spacing={1} justifyContent="space-between" m={0.5}>
              <h3 >백로그</h3>
              <Button 
                href={`/project/${id}/issue-create`}
              > 
                + 이슈 생성 
              </Button>
            </Stack>
            <BacklogTable/>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default BacklogPage;