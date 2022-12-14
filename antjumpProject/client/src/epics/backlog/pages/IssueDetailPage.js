import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import IssueType from "../components/IssueType.js";
import IssuePriority from "../components/IssuePriority.js";
import IssueDifficulty from "../components/IssueDifficulty.js";
import IssueCreateModal from "../modals/IssueCreateModal.js";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IssueFileUpload from "../components/IssueFileUpload.js";
import IssueManager from "../components/IssueManager.js";
import IssueDeleteModal from "../modals/IssueDeleteModal";
import IssuseStatus from "../components/IssueStatus";
import SubIssueListHeader from "../components/SubIssueListHeader.js";
import SubIssueTable from "../components/subissue/SubIssueTable.js";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";

export default function IssueDetailPage() {
  const { id, issueId } = useParams();
  const dispatch = useDispatch();
  const [state, setState] = useState([]);
  async function date() {
    const result = await fetch("http://192.168.0.63:8181/issues/sub")
      .then((result) => result.json())
      .then((data) => data.data);
    setState(result);
  }

  useEffect(() => {
    date();
  }, []);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          width: "100%",
          marginBottom: 5,
          "& > :not(style)": {
            m: 1,
          },
        }}
      >
        <h3>Task</h3>
        <h1>ISSUE-1</h1>
        <IssuseStatus />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box>
          <IssueManager />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              width: "100%",
              "& > :not(style)": {
                m: 1,
                width: 400,
                height: 100,
              },
            }}
          >
            <IssuePriority />
            <IssueDifficulty />
          </Box>

          <Box
            sx={{
              width: "100%",
              marginBottom: 10,
            }}
          >
            <TextField
              fullWidth
              label="?????? ?????? *"
              id="issue-comment"
              defaultValue="?????? ?????? ??????"
              placeholder="????????? ?????? ????????? ????????? ????????? ?????????."
            />
          </Box>
          <Box
            sx={{
              width: "100%",
              marginBottom: 5,
            }}
          >
            <TextField
              fullWidth
              id="issue-explanation"
              label="?????? ??????"
              defaultValue="??????????????? ???????????? ?????? ????????? ???????????? ?????? ?????????."
              placeholder="????????? ?????? ????????? ????????? ????????? ?????????."
              multiline
              rows={10}
            />
          </Box>
          <IssueFileUpload />
          <Button
            color="button"
            variant="contained"
            size="small"
            component={Link}
            to={`/project/${id}/issue/${issueId}/subissue-create`}
          >
            ???????????? ??????
          </Button>
          {/* <SubIssueListHeader />
          <SubIssueList /> */}
          <SubIssueTable isHeader={true} issues={state} />

          <Box sx={{ float: "left", m: 2 }}>
            <IssueDeleteModal />
          </Box>
          <Button
            style={{ marginTop: 50, marginBottom: 20 }}
            color="button"
            variant="contained"
            href={`/project/${id}`}
          >
            ??????
          </Button>
        </Box>
      </Box>
    </>
  );
}
