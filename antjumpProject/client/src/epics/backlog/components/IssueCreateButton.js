import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function CreateButton() {
  return (
    <div
      style={{
        marginLeft: "1250px",
      }}
    >
      <Stack spacing={2} direction="row">
        <Button variant="contained">생성하기</Button>
      </Stack>
    </div>
  );
}
