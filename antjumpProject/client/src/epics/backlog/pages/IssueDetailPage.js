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
import { useParams } from "react-router-dom";
import SubIssueTable from "../components/subissue/SubIssueTable.js";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function IssueDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [state, setState] = useState([]);
  async function date() {
    const result = await fetch("http://localhost:8181/issues/sub")
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
              label="이슈 요약 *"
              id="issue-comment"
              defaultValue="기능 상세 설계"
              placeholder="이슈에 대한 간략한 내용을 작성해 주세요."
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
              label="이슈 설명"
              defaultValue="프로젝트를 진행하기 전에 기능을 상세하게 설계 합니다."
              placeholder="이슈에 대한 자세한 내용을 작성해 주세요."
              multiline
              rows={10}
            />
          </Box>
          <IssueFileUpload />

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
            확인
          </Button>
        </Box>
      </Box>
    </>
  );
}
