import { Button, Typography} from "@mui/material";
import {Link} from "react-router-dom";
function LogoButton() {
    return (
        <Button component={Link} to="/" sx={ {padding: '30px'}}>
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, color:"white", mr: 1}} /> */}
            <img 
            style={{
            width: '71px',
            height: '63px'}}
            src="/그림1.jpg" />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/main"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
                color: "white",
              }}
            >
              ANT
            </Typography>
          </Button>
    );
}   

export default LogoButton;