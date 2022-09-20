import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import PlusIcon from "../icons/PlusIcon";
import { useState, forwardRef } from "react";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function RemembranceHeader() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 30,
        }}
      >
        <div
          style={{
            margin: 0,
            marginLeft: "50px",
          }}
        >
          <h2
            style={{
              margin: 0,
            }}
          >
            스프린트 회고
          </h2>
        </div>
        <div>
          {/* <PlusIcon /> */}
          <Stack spacing={2} sx={{ width: "100%" }}>
            <Button variant="outlined" onClick={handleClick}>
              회고 생성
            </Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="info"
                sx={{ width: "100%" }}
              >
                오늘의 회고가 생성되었습니다.
              </Alert>
              {/* <Alert
                  onClose={handleClose}
                  severity="error"
                  sx={{ width: "100%" }}
                >
                  이미 오늘의 회고가 만들어져 있습니다.
                </Alert> */}
            </Snackbar>
          </Stack>
        </div>
      </div>
    </>
  );
}

export default RemembranceHeader;
