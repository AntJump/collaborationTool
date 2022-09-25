import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useParams } from "react-router-dom";

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

export default function SubIssueCreateModal() {
  const { id, issueId } = useParams();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        style={{ marginTop: 20, marginBottom: 20 }}
        variant="contained"
        onClick={handleOpen}
        color="button"
      >
        확인
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            하위이슈 생성
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            새로운 하위이슈가 추가되었습니다!
          </Typography>
          <Button
            color="button"
            variant="contained"
            href={`/project/${id}/issue/${issueId}`}
          >
            확인
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
