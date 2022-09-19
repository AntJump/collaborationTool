import React from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Avatar, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      const response = await axios.post("http://localhost:8181/login", {
        memberEmail: data.get("email"),
        memberPwd: data.get("password"),
      });
      navigate("/");
    } catch (err) {
      if (!err?.response) {
        console.log("error");
      }
    }
  };
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
            <Link href="#">비밀번호 찾기</Link>
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
