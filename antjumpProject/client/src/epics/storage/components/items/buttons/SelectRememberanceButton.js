import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function SelectRememberanceButton() {
  const sprintNum = 1;
  return (
    <Box sx={{ "& button": { m: 1 } }}>
      <div>
        <Button
          variant="contained"
          size="large"
          // href={`remembrancestorage/${sprintNum}`}
          href={`remembrancestorage`}
        >
          회고
          <br />
          조회
        </Button>
      </div>
    </Box>
  );
}

export default SelectRememberanceButton;
