import FaceIcon from '@mui/icons-material/Face';
import { Box, IconButton,  Chip } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import { useDispatch } from 'react-redux';
import { callProjectInvitationDeleteApi } from '../../../../apis/ProjectAPICalls';
function WaitMemberCard({invitation}){
    const dispatch= useDispatch();
    const onClickDelete = ()=>{
        dispatch(callProjectInvitationDeleteApi({invitationId: invitation.invitationId}));
    }

    return (
        <>
            <Box sx={{ml: 4}}>
                <Chip label={invitation.invitationEmail} sx={{ width: '150px'}}/>
                <IconButton onClick={onClickDelete}>
                    <HighlightOffIcon color='secondary' variant="contained"/>
                </IconButton>
            </Box>
        </>
    );
}

export default WaitMemberCard;