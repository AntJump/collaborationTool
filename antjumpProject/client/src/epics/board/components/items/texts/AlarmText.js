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
import { useDispatch, useSelector } from "react-redux";
import { callModifySprintAlarmAPI } from "../../../../../apis/SprintAPICalls";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

function AlarmText() {
  const dispatch = useDispatch();
  const results = useSelector((state) => state.sprintReducer);
  const sprint = results.sprint;

  const [alarmCycle, setAlarmCycle] = useState("");

  const [form, setForm] = useState({
    sprintAlarmCycle: "",
  });

  const handleChange = (e) => {
    setForm({
      sprintAlarmCycle: e.target.value,
    });

    dispatch(callModifySprintAlarmAPI(1, form));
  };

  return (
    <>
      {sprint &&
        sprint.map((sprintInfo) => (
          <div
            key={sprintInfo.sprintId}
            style={{
              display: "flex",
              justifyContent: "right",
            }}
          >
            <Stack direction="row" spacing={2} justifyContent="space-between">
              <AlarmIcon />
              <Box sx={{ minWidth: 100, marginTop: "10px" }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    알람 주기
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sprintInfo.sprintAlarmCycle}
                    label="알람 주기"
                    onChange={handleChange}
                  >
                    <MenuItem value={"하루마다"}>하루마다</MenuItem>
                    <MenuItem value={"3일마다"}>3일마다</MenuItem>
                    <MenuItem value={"7일마다"}>7일마다</MenuItem>
                    <MenuItem value={"10일마다"}>10일마다</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Stack>
          </div>
        ))}
    </>
  );
}

export default AlarmText;
