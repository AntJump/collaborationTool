import * as React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

export default function CalendarSearchCategory() {
  return (
    <Box sx={{ minWidth: 120, paddingTop: '30px' }}>
      <FormControl sx={{ width: '60%' }}>
        <NativeSelect
          defaultValue={10}
          inputProps={{
            name: "category",
            id: "uncontrolled-native"
          }}
        >
          <option value={10}>월간</option>
          <option value={20}>주간</option>
          <option value={30}>일간</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
