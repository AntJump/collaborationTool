import { useState } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function RemembranceLikedModal() {
  const [open, setOpen] = useState(false);
  const [sprintKey, setSprintKey] = useState("Sprint-01");
  const [createdDate, setCreatedDate] = useState("2022-07-15");
  const [title, setTitle] = useState("좋았던 점 제목");
  const [content, setContent] = useState("좋았던 점 내용");

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        좋았던 점
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
          align="center"
          fontSize="30px"
          width="500px"
        >
          스프린트 회고
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <span
              style={{
                fontStyle: BootstrapDialog,
                fontSize: 50,
              }}
            >
              Liked
              <br />
            </span>
            <span
              style={{
                color: "gray",
                fontSize: 35,
              }}
            >
              {sprintKey} : {createdDate}
            </span>
            <br />
            <br />
            <div className="textArea">
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "50ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextField
                    id="outlined-multiline-static"
                    label="제목"
                    제목
                    rows={4}
                    defaultValue=""
                  />
                </div>
              </Box>
            </div>

            <div className="textArea">
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "50ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextField
                    id="outlined-multiline-static"
                    label="내용"
                    내용
                    rows={10}
                    defaultValue=""
                  />
                </div>
              </Box>
            </div>
          </Typography>
        </DialogContent>
        <div
          style={{
            display: "flex",
            justifyContent: "right",
          }}
        >
          <DialogActions>
            <Button
              autoFocus
              onClick={handleClose}
              variant="contained"
              disableElevation
            >
              적용
            </Button>
          </DialogActions>
          <DialogActions>
            <Button onClick={handleClose} variant="contained" disableElevation>
              취소
            </Button>
          </DialogActions>
        </div>
      </BootstrapDialog>
    </div>
  );
}
