import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function IssueDelete() {
  const handleDelete = () => {
    console.info("이슈가 삭제 되었습니다.");
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip
        label="이슈삭제"
        onDelete={handleDelete}
        sx={{ marginTop: "20px" }}
      />
    </Stack>
  );
}
