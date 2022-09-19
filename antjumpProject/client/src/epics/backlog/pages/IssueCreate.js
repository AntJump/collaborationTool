import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import SelectType from "../components/SelectType.js";
import Priority from "../components/Priority.js";
import Difficulty from "../components/Difficulty.js";
import IssueCreateButton from "../components/IssueCreateButton.js";
import Paper from "@mui/material/Paper";

export default function IssueCreate() {
  return (
    <div>
      <h3>이슈 생성</h3>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 430,
            height: 100,
          },
        }}
      >
        <SelectType />
        <Priority />
        <Difficulty />
      </Box>
      <div>
        <Box
          sx={{
            width: 1000,

            marginBottom: 10,
          }}
        >
          <TextField
            fullWidth
            label="이슈 요약"
            id="issue-comment"
            placeholder="이슈에 대한 간략한 내용을 작성해 주세요."
          />
        </Box>
        <Box
          sx={{
            width: 1000,
          }}
        >
          <TextField
            fullWidth
            id="issue-explanation"
            label="이슈 설명"
            placeholder="이슈에 대한 자세한 내용을 작성해 주세요."
            multiline
            rows={10}
          />
        </Box>
      </div>

      <IssueCreateButton />
    </div>
  );
}

//  return <Button variant="contained">Hello World</Button>;
