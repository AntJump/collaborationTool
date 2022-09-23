import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Avatar, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import axios from "axios";
import { useNavigate, Link as RouterLink } from "react-router-dom";

function AdminPage() {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      const response = await axios.post("http://localhost:8181/admin/login", {
        adminEmail: data.get("email"),
        adminPwd: data.get("password"),
      });
      navigate("/faqs");
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
          관리자 로그인
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
      </Box>
    </Container>
  );
}

export default AdminPage;
