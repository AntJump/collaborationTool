import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import mainimg from "../imgs/그림3.png";

function MainPage() {
  return (
    <>
      <Box
        component="img"
        sx={{
          width: "100%",
        }}
        alt="메인페이지"
        src={mainimg}
      />
    </>
  );
}

export default MainPage;
