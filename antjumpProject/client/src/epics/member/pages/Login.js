import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { callLoginAPI } from "../../../apis/MemberAPICalls";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Avatar, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginMember = useSelector((state) => state.memberReducer); // API 요청하여 가져온 loginMember 정보

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    dispatch(
      callLoginAPI({
        data,
      })
    );
  };

  useEffect(() => {
    if (loginMember.status === 200) {
      console.log("[Login] Login SUCCESS {}", loginMember);
      navigate("/", { replace: true });
    }
  }, [loginMember]);

  // 로그인 상태일 시 로그인페이지로 접근 방지
  if (loginMember.length > 0) {
    console.log("[Login] Login is already authenticated by the server");
    return navigate("/");
  }
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
        <Avatar sx={{ mt: 3, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ mt: 1, mb: 1 }}>
          로그인
        </Typography>
        <TextField
          label="Email"
          required
          fullWidth
          name="email"
          autoFocus
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          required
          fullWidth
          name="password"
          margin="normal"
          sx={{ mt: 3 }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 3 }}
        >
          로그인
        </Button>
        <Grid container>
          <Grid item xs>
            <Link component={RouterLink} to="/members/request">
              비밀번호 찾기
            </Link>
          </Grid>
          <Grid item>
            <Link component={RouterLink} to="/members/register">
              회원가입 하기
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Login;
