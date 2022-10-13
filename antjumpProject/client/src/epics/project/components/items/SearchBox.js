
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import { Box, InputBase} from "@mui/material";

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));
const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: 30,
    border: 1,
    width: 250,
    backgroundColor: alpha(theme.palette.common.black, 0.05),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.black, 0.15),
    },
    // marginRight: theme.spacing(2),
    marginLeft: 0,
    // width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
    //   width: "auto",
    },
  }));
  
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));



  function SearchBox(){

    return (
        <Box sx={{ float : 'right'}}>
          <Search>
              <SearchIconWrapper >
                <SearchIcon />
              </SearchIconWrapper >
              <StyledInputBase 
                placeholder="프로젝트 검색"
              //   inputProps={{ "aria-label": "search" }}
              />
          </Search> 
        </Box>
       
    );
}

export default SearchBox;