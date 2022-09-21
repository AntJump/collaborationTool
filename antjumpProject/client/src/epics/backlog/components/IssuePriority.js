import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function IssuePriority() {
  const [priority, setPriority] = React.useState("");

  const handleChange = (event) => {
    setPriority(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="priority-select-label">우선순위</InputLabel>
        <Select
          labelId="priority-select-label"
          id="priority-select"
          value={priority}
          label="priority"
          onChange={handleChange}
        >
          <MenuItem value={"must"}>M</MenuItem>
          <MenuItem value={"should"}>S</MenuItem>
          <MenuItem value={"could"}>C</MenuItem>
          <MenuItem value={"willNot"}>W</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
