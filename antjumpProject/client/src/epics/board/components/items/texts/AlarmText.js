import AlarmIcon from "../icons/AlarmIcon";
// import ArrowDownIcon from "../icons/ArrowDownIcon";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { styled } from "@mui/material/styles";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

function AlarmText() {
  const [alarmCycle, setAlarmCycle] = useState("");

  const handleChange = (event) => {
    setAlarmCycle(event.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "right",
      }}
    >
      <Stack direction="row" spacing={2} justifyContent="space-between">
        {/* <Item> */}
        <AlarmIcon />
        {/* </Item> */}
        {/* <Item> */}
        <Box sx={{ minWidth: 100, marginTop: "10px" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">알람 주기</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={alarmCycle}
              label="알람 주기"
              onChange={handleChange}
            >
              <MenuItem value={1}>하루마다</MenuItem>
              <MenuItem value={3}>3일마다</MenuItem>
              <MenuItem value={7}>7일마다</MenuItem>
              <MenuItem value={10}>10일마다</MenuItem>
            </Select>
          </FormControl>
        </Box>
        {/* </Item> */}
      </Stack>
      {/* <AlarmIcon />
      <Box sx={{ minWidth: 100, marginTop: "10px" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">알람 주기</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={alarmCycle}
            label="알람 주기"
            onChange={handleChange}
          >
            <MenuItem value={1}>하루마다</MenuItem>
            <MenuItem value={3}>3일마다</MenuItem>
            <MenuItem value={7}>7일마다</MenuItem>
            <MenuItem value={10}>10일마다</MenuItem>
          </Select>
        </FormControl>
      </Box> */}
    </div>
  );
}

export default AlarmText;
