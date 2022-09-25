// import { Grid, Typography } from "@mui/material";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";

// const results = [
//   { title: "1", details: "tttt2" },
//   { title: "2", details: "ttttdwqd2" },
//   { title: "3", details: "tttfwafawt2" },
// ];

// function IssueContainBox() {
//   return (
//     <Grid container spacing={3} marginTop={1}>
//       {results.map((element) => {
//         return (
//           <Grid item xs={4}>
//             <Paper elevation={3} sx={{ height: "400px" }}>
//               <Typography> {element.title}</Typography>
//               <Typography> {element.details}</Typography>
//             </Paper>
//           </Grid>
//         );
//       })}
//     </Grid>
//   );
// }

// export default IssueContainBox;

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
  const [left, setLeft] = React.useState([0, 1, 2, 3]);
  const [middle, setMiddle] = React.useState([4, 5, 6, 7]);
  const [right, setRight] = React.useState([8, 9, 10, 11]);

  const leftChecked = intersection(checked, left);
  const middleChecked = intersection(checked, middle);
  const rightChecked = intersection(checked, right);

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

  // const handleAllRight = () => {
  //   setRight(right.concat(left));
  //   setLeft([]);
  // };

  // // 왼쪽 전체를 중간으로
  // const handleLeftAllToMiddle = () => {
  //   setMiddle(middle.concat(left));
  //   setLeft([]);
  // };

  // // 중간 전체를 오른쪽으로
  // const handleMiddleAllToRight = () => {
  //   setRight(right.concat(middle));
  //   setMiddle([]);
  // };

  // // 오른쪽 전체를 중간으로
  // const handleRightAllToMiddle = () => {
  //   setMiddle(middle.concat(right));
  //   setRight([]);
  // };

  // // 중간 전체를 왼쪽으로
  // const handleMiddleAllToLeft = () => {
  //   setLeft(left.concat(middle));
  //   setMiddle([]);
  // };

  // const handleCheckedRight = () => {
  //   setRight(right.concat(leftChecked));
  //   setLeft(not(left, leftChecked));
  //   setChecked(not(checked, leftChecked));
  // };
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

  // const handleCheckedLeft = () => {
  //   setLeft(left.concat(rightChecked));
  //   setRight(not(right, rightChecked));
  //   setChecked(not(checked, rightChecked));
  // };

  // const handleAllLeft = () => {
  //   setLeft(left.concat(right));
  //   setRight([]);
  // };

  const customList = (items) => (
    <Paper sx={{ width: 320, height: 230, overflow: "auto" }}>
      <List dense component="div" role="list">
        {items.map((value) => {
          const labelId = `transfer-list-item-${value}-label`;

          return (
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
              <ListItemText id={labelId} primary={`List item ${value + 1}`} />
            </ListItem>
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
