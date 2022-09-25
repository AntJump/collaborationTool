import { Grid } from "@mui/material";

// import { DndProvider } from 'react-dnd'
// import  {HTML5Backend} from 'react-dnd-html5-backend'
import BacklogTableIndex from "../components/BacklogTableIndex";
function BacklogPage() {
  return (

    // <DndProvider backend={HTML5Backend}>
      <Grid container spacing={1} sx={{width:'90%' , margin:'auto'}}>
        <BacklogTableIndex/>
      </Grid>
    // </DndProvider>

  );
}

export default BacklogPage;