import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import IssueType from "../components/IssueType.js";
import IssuePriority from "../components/IssuePriority.js";
import IssueDifficulty from "../components/IssueDifficulty.js";
import SubIssueCreateModal from "../modals/SubIssueCreateModal";
import IssueFileUpload from "../components/IssueFileUpload.js";

export default function SubIssueCreatePage() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box>
        <h3>하위이슈 생성</h3>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            "& > :not(style)": {
              m: 1,
              width: 300,
              height: 100,
            },
          }}
        >
          <IssueType />
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
            label="하위이슈 요약 *"
            id="subissue-comment"
            placeholder="하위이슈에 대한 간략한 내용을 작성해 주세요."
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
            id="subissue-explanation"
            label="하위이슈 설명"
            placeholder="하위이슈에 대한 자세한 내용을 작성해 주세요."
            multiline
            rows={10}
          />
        </Box>
        <IssueFileUpload />
        <SubIssueCreateModal />
      </Box>
    </Box>
  );
}
