import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function IssueDifficulty() {
  const [difficulty, setDifficulty] = React.useState("");

  const handleChange = (event) => {
    setDifficulty(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="difficulty-select-label">난이도</InputLabel>
        <Select
          labelId="difficulty-select-label"
          id="difficulty-select"
          value={difficulty}
          label="difficulty"
          onChange={handleChange}
        >
          <MenuItem value={"easy"}>Easy</MenuItem>
          <MenuItem value={"normal"}>Normal</MenuItem>
          <MenuItem value={"hard"}>Hard</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
