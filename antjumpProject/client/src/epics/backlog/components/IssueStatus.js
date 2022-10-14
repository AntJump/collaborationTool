import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { color } from "@mui/system";

export default function ClickableChips() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip
        label="시작 전"
        variant="outlined"
        sx={{ backgroundColor: "#f06292", color: "white", marginTop: 1 }}
      />
    </Stack>
  );
}
