import ProjectTabPanel from "../../../../common/components/tabPanel/ProjectTabPanel";
import BoardTitle from "../titles/BoardTitle";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export default function BoardFrame() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={1}>
          <Item>
            <ProjectTabPanel />
          </Item>
        </Grid>
        <Grid item xs={11}>
          <Item>
            <BoardTitle />
          </Item>
        </Grid>
      </Grid>
    </>
  );
}
