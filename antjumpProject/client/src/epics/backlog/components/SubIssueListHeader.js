import { Button, Grid, Box, Stack } from "@mui/material";
import { Link, useParams } from "react-router-dom";

export default function BacklogTableIndex() {
  const { id, issueId } = useParams();

  return (
    <>
      <Grid item xs={12} mb={3}>
        <Box>
          <Stack
            direction="row"
            spacing={1}
            justifyContent="space-between"
            height="40px"
            mt={2}
            mb={2}
          >
            <h3>하위 이슈 목록</h3>
            <Button
              color="button"
              variant="contained"
              size="small"
              component={Link}
              to={`/project/${id}/issue/${issueId}/subissue-create`}
            >
              하위이슈 생성
            </Button>
          </Stack>
        </Box>
      </Grid>
    </>
  );
}
