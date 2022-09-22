import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function SelectRememberanceButton() {
  const projectNum = 1;
  return (
    <Box sx={{ "& button": { m: 1 } }}>
      <div>
        <Button variant="contained" size="large" href={`storage/${projectNum}`}>
          회고
          <br />
          조회
        </Button>
      </div>
    </Box>
  );
}

export default SelectRememberanceButton;
