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

export default function BasicModal() {
  const { id } = useParams();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        style={{
          marginLeft: "1250px",
        }}
        variant="contained"
        onClick={handleOpen}
      >
        생성하기
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            이슈 생성
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            새로운 이슈가 백로그 목록에 추가되었습니다!
          </Typography>
          <Button variant="contained" href={`/project/${id}`}>
            확인
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
