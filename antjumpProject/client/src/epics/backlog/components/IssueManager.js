import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function FormPropsTextFields() {
  return (
    <Box
      sx={{
        width: "100%",
        marginBottom: 5,
      }}
    >
      <div>
        <TextField
          id="outlined-read-only-input"
          label="담당자"
          defaultValue="개미"
          InputProps={{
            readOnly: true,
          }}
        />
      </div>
    </Box>
  );
}
