import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function FindPwd() {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        component="form"
        onSubmit={handleSubmit}
        noValidate
      >
        <h1>비밀번호 찾기</h1>
        <h4>
          가입하신 이메일 주소를 입력하시면, 비밀번호 변경 메일을
          발송해드립니다.
        </h4>
        <TextField
          label="Email"
          required
          fullWidth
          name="email"
          autoFocus
          margin="normal"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 3 }}
        >
          비밀번호 변경 이메일 받기
        </Button>
      </Box>
    </Container>
  );
}

export default FindPwd;
