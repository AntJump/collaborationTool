import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch } from "react-redux";
import { InputAdornment, Typography } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState, useRef } from "react";
import { callQNARegistAPI } from '../../../apis/QNAAPICalls';

const CustomButton = styled(Button)({

    backgroundColor: 'gray',
    color: '#fff',
    '&:hover': {
      backgroundColor: 'gray',
      color: '#3c52b2'
}})

function QNAWritePage() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    
    const [image, setImage] = useState(null);
    const imageInput = useRef();
    const [form, setForm] = useState({
        qnaTitle: '',
        qnaContent: '',
        qnaCategoryNo: 0,
        memberId: 1
    });

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    
    const onChangeImageUpload = (e) => {

        const image = e.target.files[0];

        setImage(image);
    };

    const onClickImageUpload = () => {
        imageInput.current.click();
    }


    const onClickQNAHandler = () => {        
        console.log('[QNAWritePage] onClickQNAHandler Start!!');

        const formData = new FormData();

        formData.append("qnaTitle", form.qnaTitle)
        formData.append("qnaContent", form.qnaContent)
        formData.append("qnaCategoryNo", form.qnaCategoryNo)
        formData.append("memberId", form.memberId)

        console.log('fromData : ', formData.get("qnaTitle"));
        console.log('fromData : ', formData.get("qnaContent"));
        console.log('fromData : ', formData.get("qnaCategoryNo"));
        console.log('fromData : ', formData.get("memberId"));

        if(image) {
            formData.append("qnaFile", image);
        }

        console.log('form', form);
        dispatch(callQNARegistAPI({	// 글 작성
            form: formData
        }));

        alert('글 등록이 완료되었습니다.');

        navigate(`/qnas`);

        console.log('[FAQWritePage] onClickQNAHandler End!!');

    }

    return (
        <>
            <Box sx ={{mt: 15}}>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    sx={{
                        width: 700,
                        maxWidth: '100%',
                        paddingTop: 5,
                        margin: 'auto'
                    }}
                >
                <TextField
                    id="outlined-multiline-static, fullWidth"
                    label="문의 제목"
                    multiline
                    fullWidth
                    name='qnaTitle'
                    onChange={onChangeHandler}
                />
                </Box>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    sx={{
                        width: 700,
                        maxWidth: '100%',
                        paddingTop: 5,
                        margin: 'auto'
                    }}
                >
                <TextField
                    id="outlined-multiline-static, fullWidth"
                    label="문의 내용"
                    multiline
                    rows={10}
                    fullWidth
                    name='qnaContent'
                    onChange={onChangeHandler}
                />
                </Box>
                <Box
                    sx={{
                        width: 700,
                        maxWidth: '100%',
                        paddingTop: 5,
                        margin: 'auto'
                    }}
                >
                    <TextField
                        fullWidth label="파일 첨부"
                        id="fullWidth"
                        readOnly
                        name="qnaFile"
                        InputProps={{
                        startAdornment: <InputAdornment position="start">
                                <IconButton color="primary" aria-label="upload picture" component="label" >
                                    <Typography component="input" hidden accept="image/*" type="file" onChange={onChangeImageUpload} ref= { imageInput }/>
                                    <PhotoCamera />
                                    <Box component="button" onClick={ onClickImageUpload }></Box>
                                </IconButton>
                            </InputAdornment>
                        }}
                    />
                </Box>

                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name='qnaCategoryNo'
                    onChange={onChangeHandler}
                    >
                    <MenuItem value={1}>프로젝트 관련</MenuItem>
                    <MenuItem value={2}>채팅 관련</MenuItem>
                    <MenuItem value={3}>협업툴 관련</MenuItem>
                    <MenuItem value={4}>결제 관련</MenuItem>
                    <MenuItem value={5}>역할 관련</MenuItem>
                    <MenuItem value={6}>기타</MenuItem>
                </Select>
                <CustomButton variant="contained" disableElevation onClick={onClickQNAHandler}>
                    작성 완료
                </CustomButton>
            </Box>
        </>
    );
}
export default QNAWritePage;