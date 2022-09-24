import FaceIcon from '@mui/icons-material/Face';
import { Box, IconButton,  Chip } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


function WaitMemberCard({wait}){

    return (
        <>
            <Box sx={{ml: 4}}>
                <Chip label={wait.invitationEmail} sx={{ width: '150px'}}/>
                <IconButton >
                    <HighlightOffIcon color='secondary' variant="contained"/>
                </IconButton>
            </Box>
        </>
    );
}

export default WaitMemberCard;