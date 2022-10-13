import { Button, Grid, Box, Stack } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import BacklogTable from "./BacklogTable";
import { GET_BACKLOG, SET_AREA } from "../../../modules/BacklogModule";
import { issuesData } from "../datas/backlog";

import { Link, useParams } from "react-router-dom";
import SprintStartModal from "../modals/SprintStartModal";
import { useState } from "react";

function BacklogTableIndex() {
  const { id } = useParams();
  const backlog = useSelector((state) => state.backlogReducer);
  const dispatch = useDispatch();
  const [state, setState] = useState([]);
  async function date() {
    const result = await fetch("http://localhost:8181/issues")
      .then((result) => result.json())
      .then((data) => data.data);
    setState(result);
  }

  useEffect(() => {
    dispatch({ type: GET_BACKLOG, payload: issuesData });
    date();
  }, []);

  const onClickCreate = () => {
    dispatch({ type: SET_AREA });
  };

  return (
    <>
      <Grid item xs={12}>
        <Box>
          <Stack
            direction="row"
            spacing={1}
            justifyContent="space-between"
            height="40px"
            mt={2}
            mb={2}
          >
            <h3>메인 스프린트</h3>
            <SprintStartModal includedIssues={backlog[1]} />
          </Stack>
          <Box sx={{ background: "#F2F2F2", borderRadius: "10px" }} p={3}>
            <BacklogTable isHeader={false} issues={backlog[1]} />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box>
          <h3 style={{ float: "left" }}>임시 스프린트</h3>
          {backlog.map((element, idx, arr) => {
            if (idx > 1) {
              return (
                <Box
                  sx={{
                    clear: "both",
                    background: "#F2F2F2",
                    borderRadius: "10px",
                  }}
                  p={3}
                  mt={1}
                >
                  <BacklogTable isHeader={false} issues={element} />
                </Box>
              );
            }
          })}
          <Button
            sx={{ float: "right" }}
            color="button"
            onClick={onClickCreate}
          >
            + 빈 스프린트 생성
          </Button>
        </Box>
      </Grid>
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
            <h3>백로그</h3>
            <Button
              color="button"
              variant="contained"
              size="small"
              component={Link}
              to={`/project/${id}/issue-create`}
            >
              이슈 생성
            </Button>
          </Stack>
          <BacklogTable isHeader={true} issues={state} />
        </Box>
      </Grid>
    </>
  );
}

export default BacklogTableIndex;
