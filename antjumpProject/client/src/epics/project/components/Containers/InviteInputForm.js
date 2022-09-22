import TextField from '@mui/material/TextField';
function InviteInputForm(){
    return (
        <>
            <TextField 
                name="invitEmails" 
                variant="outlined" 
                label="초대 이메일"
                multiline
                rows={3}
                fullWidth
            />
        </>
    );
}

export default InviteInputForm;