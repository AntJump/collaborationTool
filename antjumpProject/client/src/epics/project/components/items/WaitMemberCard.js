import FaceIcon from '@mui/icons-material/Face';
import { Box, IconButton, Typography } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

function WaitMemberCard({wait}){

    return (
        <>
            <Box>
                <Typography>
                    {wait.invitationEmail}
                    <IconButton >
                        <HighlightOffIcon color='secondary' variant="contained"/>
                    </IconButton>
                </Typography>
            </Box>
        </>
    );
}

export default WaitMemberCard;