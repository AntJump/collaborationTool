import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useParams } from "react-router-dom";
import IssueFileUpload from "../components/IssueFileUpload.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { callIssueCreateAPI } from "../../../apis/IssueCreateAPICall";

const styleModal = {
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

export default function IssueCreatePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [form, setForm] = useState({
    issueName: "ISSUE",
    issueSummary: "",
    issueExplanation: "",
    issueDifficulty: "",
    issueCategory: "",
    issuePriority: "",
    projectId: id,
    memberId: 1,
  });

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onClickIssueHandler = () => {
    dispatch(
      callIssueCreateAPI({
        form: form,
      })
    );
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box>
        <h3>이슈 생성</h3>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            "& > :not(style)": {
              m: 1,
              width: 300,
              height: 100,
            },
          }}
        >
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="issue-select-label">이슈 유형</InputLabel>
              <Select
                labelId="issue-select-label"
                id="issue-select"
                label="issueType"
                name="issueCategory"
                onChange={onChangeHandler}
              >
                <MenuItem value={"태스크"}>태스크</MenuItem>
                <MenuItem value={"스토리"}>스토리</MenuItem>
                <MenuItem value={"버그"}>버그</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box>
            <FormControl fullWidth>
              <InputLabel id="priority-select-label">우선순위</InputLabel>
              <Select
                labelId="priority-select-label"
                id="priority-select"
                label="priority"
                name="issuePriority"
                onChange={onChangeHandler}
              >
                <MenuItem value={"M"}>Must</MenuItem>
                <MenuItem value={"S"}>Should</MenuItem>
                <MenuItem value={"C"}>Could</MenuItem>
                <MenuItem value={"W"}>Won't</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="difficulty-select-label">난이도</InputLabel>
              <Select
                labelId="difficulty-select-label"
                id="difficulty-select"
                name="issueDifficulty"
                label="difficulty"
                onChange={onChangeHandler}
              >
                <MenuItem value={"Easy"}>Easy</MenuItem>
                <MenuItem value={"Normal"}>Normal</MenuItem>
                <MenuItem value={"Hard"}>Hard</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            marginBottom: 10,
          }}
        >
          <TextField
            fullWidth
            label="이슈 요약 *"
            id="issue-comment"
            name="issueSummary"
            placeholder="이슈에 대한 간략한 내용을 작성해 주세요."
            onChange={onChangeHandler}
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            marginBottom: 5,
          }}
        >
          <TextField
            fullWidth
            id="issue-explanation"
            label="이슈 설명"
            placeholder="이슈에 대한 자세한 내용을 작성해 주세요."
            multiline
            rows={10}
            name="issueExplanation"
            onChange={onChangeHandler}
          />
        </Box>
        <IssueFileUpload />
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
            <Box sx={styleModal}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                이슈 생성
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                새로운 이슈가 백로그 목록에 추가되었습니다!
              </Typography>
              <Button
                color="button"
                variant="contained"
                onClick={onClickIssueHandler}
                href={`/project/${id}`}
              >
                확인
              </Button>
            </Box>
          </Modal>
        </div>
      </Box>
    </Box>
  );
}
