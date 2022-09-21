import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function IssueType() {
  const [issueType, setIssueType] = React.useState("");

  const handleChange = (event) => {
    setIssueType(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="issue-select-label">이슈 유형</InputLabel>
        <Select
          labelId="issue-select-label"
          id="issue-select"
          value={issueType}
          label="issueType"
          onChange={handleChange}
        >
          <MenuItem value={"task"}>태스크</MenuItem>
          <MenuItem value={"story"}>스토리</MenuItem>
          <MenuItem value={"bug"}>버그</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
