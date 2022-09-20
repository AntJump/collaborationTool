import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const results = [
  { title: "1", details: "tttt2" },
  { title: "2", details: "ttttdwqd2" },
  { title: "3", details: "tttfwafawt2" },
];

function IssueContainBox() {
  return (
    <Grid container spacing={2} marginTop={3}>
      {results.map((element) => {
        return (
          <Grid item xs={4}>
            <Paper elevation={3} sx={{ height: "400px" }}>
              <Typography> {element.title}</Typography>
              <Typography> {element.details}</Typography>
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default IssueContainBox;
