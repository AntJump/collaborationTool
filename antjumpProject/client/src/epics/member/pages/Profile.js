import * as React from "react";
import { useEffect, useState } from "react";
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
import Input from "@mui/material/Input";

import {
  callGetMemberAPI,
  callUpdateMemberAPI,
  callDeleteMemberAPI,
  callLogoutAPI,
} from "../../../apis/MemberAPICalls";
import { decodeJwt } from "../../../utils/tokenUtils";

function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const member = useSelector((state) => state.memberReducer);
  const token = decodeJwt(window.localStorage.getItem("accessToken"));
  const memberDetail = member.data;
  const [modifyMode, setModifyMode] = useState(false);

  const [form, setForm] = useState({});
  console.log("form:", form);

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

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onClickModifyModeHandler = () => {
    setModifyMode(true);
    setForm({
      memberId: token.sub,
      memberName: memberDetail.memberName,
      memberPhone: memberDetail.memberPhone,
    });
  };

  const onClickUpdateMemberHandler = () => {
    dispatch(
      callUpdateMemberAPI({
        form: form,
      })
    );

    navigate(`/members/profile`, { replace: true });
    window.location.reload();
  };

  const onClickDeleteMember = () => {
    dispatch(
      callDeleteMemberAPI({
        memberId: token.sub,
      })
    );
    window.localStorage.removeItem("accessToken");
    //????????????
    dispatch(callLogoutAPI());
    navigate("/", { replace: true });
    window.location.reload();
  };

  return (
    memberDetail && (
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
            ??? ?????? ??????
          </Typography>
          <Box component="form" autoComplete="off" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="?????????"
                  name="email"
                  readOnly={true}
                  value={memberDetail.memberEmail}
                />
              </Grid>
              <Grid item xs={12}>
                {!modifyMode ? (
                  <TextField
                    required
                    fullWidth
                    id="name"
                    label="??????"
                    name="name"
                    value={memberDetail.memberName}
                    onChange={onChangeHandler}
                  />
                ) : (
                  <TextField
                    required
                    fullWidth
                    id="name"
                    label="??????"
                    name="name"
                    defaulvalue={form.memberName}
                    onChange={onChangeHandler}
                  />
                )}
              </Grid>
              <Grid item xs={12}>
                {!modifyMode ? (
                  <TextField
                    required
                    fullWidth
                    id="phone"
                    label="????????????"
                    name="phone"
                    value={memberDetail.memberPhone}
                    onChange={onChangeHandler}
                  />
                ) : (
                  <TextField
                    required
                    fullWidth
                    id="phone"
                    label="????????????"
                    name="phone"
                    defaultValue={form.memberPhone}
                    onChange={onChangeHandler}
                  />
                )}
              </Grid>
            </Grid>

            {memberDetail && (
              <div>
                {!modifyMode && (
                  <div>
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      onClick={onClickModifyModeHandler}
                    >
                      ????????????
                    </Button>
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      onClick={onClickDeleteMember}
                    >
                      ????????????
                    </Button>
                  </div>
                )}
                {modifyMode && (
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={onClickUpdateMemberHandler}
                  >
                    ???????????? ?????? ??????
                  </Button>
                )}
              </div>
            )}
          </Box>
        </Box>
      </Container>
    )
  );
}

export default Profile;
