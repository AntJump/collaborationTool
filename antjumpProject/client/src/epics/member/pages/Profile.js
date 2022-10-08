import * as React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { callGetMemberAPI } from "../../../apis/MemberAPICalls";
import { decodeJwt } from "../../../utils/tokenUtils";

function Profile() {
  const dispatch = useDispatch();
  const member = useSelector((state) => state.memberReducer);
  const token = decodeJwt(window.localStorage.getItem("accessToken"));
  const memberDetail = member.data;

  useEffect(() => {
    console.log("token", token.sub);
    if (token !== null) {
      dispatch(
        callGetMemberAPI({
          memberId: token.sub,
        })
      );
    }
  }, []);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          내 정보 변경
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="email"
                name="email"
                required
                fullWidth
                id="email"
                label="이메일"
                autoFocus
                value={memberDetail.memberEmail || ""}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="name"
                label="이름"
                name="name"
                autoComplete="name"
                value={memberDetail.memberName || ""}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="phone"
                label="전화번호"
                name="phone"
                autoComplete="phone"
                value={memberDetail.memberPhone || ""}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="비밀번호"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            회원정보 수정 완료
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Profile;
