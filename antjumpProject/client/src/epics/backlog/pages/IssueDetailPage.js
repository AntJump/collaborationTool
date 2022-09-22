import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import IssueType from "../components/IssueType.js";
import IssuePriority from "../components/IssuePriority.js";
import IssueDifficulty from "../components/IssueDifficulty.js";
import IssueCreateModal from "../modals/IssueCreateModal.js";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function IssueDetailPage() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="standard-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
          variant="standard"
        />
      </div>
    </Box>
  );
}
