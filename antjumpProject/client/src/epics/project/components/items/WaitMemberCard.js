import FaceIcon from '@mui/icons-material/Face';
import { Box, IconButton,  Chip } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

function WaitMemberCard({wait}){

    return (
        <>
            <Box>
                <Chip label={wait.invitationEmail}/>
                <IconButton >
                    <HighlightOffIcon color='secondary' variant="contained"/>
                </IconButton>
            </Box>
        </>
    );
}

export default WaitMemberCard;