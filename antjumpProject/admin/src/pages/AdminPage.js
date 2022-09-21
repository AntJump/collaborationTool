import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Avatar, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

function AdminPage() {
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
