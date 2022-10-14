import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useParams } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import WarningIcon from "@mui/icons-material/Warning";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function IssueDeleteModal() {
  const { id } = useParams();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = () => {
    console.info("이슈가 삭제 되었습니다.");
  };

  return (
    <div>
      <IconButton
        aria-label="delete"
        style={{ marginTop: 20, marginBottom: 20 }}
        variant="contained"
        onClick={handleOpen}
        color="button"
      >
        <DeleteIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <WarningIcon sx={{ color: "red" }} />
            이슈 삭제
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            정말로 이슈를 삭제하시겠습니까?
          </Typography>
          <Button
            color="button"
            variant="contained"
            onClick={handleDelete}
            href={`/project/${id}`}
          >
            확인
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
