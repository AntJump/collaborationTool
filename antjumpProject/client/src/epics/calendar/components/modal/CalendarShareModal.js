import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, Divider, Stack } from '@mui/material';
import { modalBoxStyle } from '../../../../common/styles/ModalStyle';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';


export default function CalendarShareModal({open, handleClose}) {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_l8hblg7', 'template_su0nm5t', form.current, '6W3eGfj3I_ypd_FKm')
        .then((result) => {
            console.log('전송 성공');
            handleClose();
            alert('일정 공유 완료');
        }, (error) => {
            console.log('전송 실패');
        })
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box sx={modalBoxStyle({w:'20vw',h:'10vh'})}>
                <Typography id="modal-title" variant="h6" component="h1" sx={{ height: '80%', textAlign: 'center'}}>
                    공유할 이메일을 입력하세요
                </Typography>
                
                <form ref={form} onSubmit={sendEmail} style={{textAlign: 'center', marginTop: '-45px'}}>
                    <input type="text" name="email"/>
                
                    <Stack direction='row' spacing ={2} sx={{justifyContent: 'center', verticalAlign: 'bottom', marginTop: '17px'}}>
                        <Button type='submit' value="Send" color='button' variant="contained">
                            공유하기
                        </Button>
                    </Stack>
                </form>
            </Box>
        </Modal>
    );
}
