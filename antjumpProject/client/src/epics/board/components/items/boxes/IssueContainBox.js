import * as React from "react";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

export default function IssueContainBox() {
  const [checked, setChecked] = React.useState([]);
  const [left, setLeft] = React.useState([0, 1, 2, 3, 4]);
  const [middle, setMiddle] = React.useState([]);
  const [right, setRight] = React.useState([]);

  const leftChecked = intersection(checked, left);
  const middleChecked = intersection(checked, middle);
  const rightChecked = intersection(checked, right);
  const issueId = 1;

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handlecheckedLeftToMiddle = () => {
    setMiddle(middle.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handlecheckedMiddleToRight = () => {
    setRight(right.concat(middleChecked));
    setMiddle(not(middle, middleChecked));
    setChecked(not(checked, middleChecked));
  };

  const handleCheckedRightToMiddle = () => {
    setMiddle(middle.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const handleCheckedMiddleToLeft = () => {
    setLeft(left.concat(middleChecked));
    setMiddle(not(middle, middleChecked));
    setChecked(not(checked, middleChecked));
  };

  const customList = (items) => (
    <Paper sx={{ width: 320, height: 230, overflow: "auto" }}>
      <List dense component="div" role="list">
        {items.map((value) => {
          const labelId = `transfer-list-item-${value}-label`;

          return (
            <div>
              <ListItem
                key={value}
                role="listitem"
                button
                onClick={handleToggle(value)}
              >
                <ListItemIcon>
                  <Checkbox
                    checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{
                      "aria-labelledby": labelId,
                    }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={`issue ${value + 1}`} />
                <Button href={`issue/${issueId}`}>상세</Button>
              </ListItem>
            </div>
          );
        })}
        <ListItem />
      </List>
    </Paper>
  );

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      {/* left to middle */}
      <Grid item>{customList(left)}</Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            // onClick={handleCheckedRight}
            onClick={handlecheckedLeftToMiddle}
            disabled={leftChecked.length === 0}
            aria-label="move selected right"
          >
            &gt;
          </Button>
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            // onClick={handleCheckedLeft}
            onClick={handleCheckedMiddleToLeft}
            // disabled={rightChecked.length === 0}
            disabled={middleChecked.length === 0}
            aria-label="move selected left"
          >
            &lt;
          </Button>
        </Grid>
      </Grid>
      {/* <Grid item>{customList(right)}</Grid> */}
      <Grid item>{customList(middle)}</Grid>
      {/* middle to right */}
      {/* <Grid item>{customList(middle)}</Grid> */}
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            // onClick={handleCheckedRight}
            // onClick={handlecheckedLeftToMiddle}
            onClick={handlecheckedMiddleToRight}
            disabled={middleChecked.length === 0}
            aria-label="move selected right"
          >
            &gt;
          </Button>
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            // onClick={handleCheckedLeft}
            // onClick={handleCheckedMiddleToLeft}
            onClick={handleCheckedRightToMiddle}
            // disabled={rightChecked.length === 0}
            disabled={rightChecked.length === 0}
            aria-label="move selected left"
          >
            &lt;
          </Button>
        </Grid>
      </Grid>
      {/* <Grid item>{customList(right)}</Grid> */}
      <Grid item>{customList(right)}</Grid>
    </Grid>
  );
}
