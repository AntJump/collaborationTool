import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

function IssueContainBox() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 405,
          height: 400,
        },
      }}
    >
      <Paper elevation={3}>시작 전</Paper>
      <Paper elevation={3}>진행 중</Paper>
      <Paper elevation={3}>완료</Paper>
    </Box>
  );
}

export default IssueContainBox;
