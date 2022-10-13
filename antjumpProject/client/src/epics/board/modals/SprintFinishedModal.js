import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
// import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import CloseButton from "../../../common/components/items/CloseButton";
import { useDispatch } from "react-redux";
import { callCloseSprintAPI } from "../../../apis/SprintAPICalls";

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
          <CloseButton />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function SprintFinishedModal({ sprintInfo }) {
  const dispatch = useDispatch();

  const sprintId = sprintInfo.sprintId;
  console.log("sprintId : ", sprintId);

  const [open, setOpen] = useState(false);
  const [finishedIssueCount, setFinishedIssueCount] = useState(3);
  const [ingIssueCount, setIngIssueCount] = useState(2);

  const [form, setForm] = useState({
    sprintActualEndDate: "",
    sprintStatus: "",
  });

  const handleClickOpen = () => {
    //오늘 날짜 구하기
    const date = new Date();
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    const dateStr = year + "-" + month + "-" + day;

    setOpen(true);

    setForm({
      sprintActualEndDate: dateStr,
      sprintStatus: "완료",
    });

    console.log("form : ", form);
    dispatch(callCloseSprintAPI(sprintId, form));
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        스프린트 완료
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
          {sprintInfo.sprintName} 완료
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            이 스프린트에는{" "}
            <span
              style={{
                color: "#0000f0",
                fontSize: 30,
              }}
            >
              {finishedIssueCount}
            </span>
            개의 완료된 이슈와{" "}
            <span
              style={{
                color: "red",
                fontSize: 30,
              }}
            >
              {ingIssueCount}
            </span>
            개의 진행중인 이슈가 있습니다. <br></br>
            고생하셨습니다.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleClose}
            variant="contained"
            disableElevation
          >
            확인
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
