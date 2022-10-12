import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch } from "react-redux";
import { InputAdornment } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import { callFAQRegistAPI } from '../apis/FAQAPICalls';

const CustomButton = styled(Button)({

    backgroundColor: 'gray',
    color: '#fff',
    '&:hover': {
      backgroundColor: 'gray',
      color: '#3c52b2'
}})

function FAQWritePage() {


    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [form, setForm] = useState({
        faqTitle: '',
        faqContent: '',
        faqCategoryNo: 0,
        adminId: 1
    });

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const onClickFAQHandler = () => {        
        console.log('[FAQWritePage] onClickFAQHandler Start!!');
        console.log('form', form);
        dispatch(callFAQRegistAPI({	// 글 작성
            form: form
        }));

        alert('글 등록이 완료되었습니다.');

        navigate(`/faqs`);

        console.log('[FAQWritePage] onClickFAQHandler End!!');

    }

    return (
        <>
            <Box>
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
                    label="FAQ 제목"
                    multiline
                    fullWidth
                    name='faqTitle'
                    type="text" 
                    placeholder="글 제목" 
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
                    label="FAQ 내용"
                    multiline
                    rows={10}
                    fullWidth
                    name='faqContent'
                    type="text" 
                    placeholder="글 본문" 
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
                        InputProps={{
                        startAdornment: <InputAdornment position="start">
                                <IconButton color="primary" aria-label="upload picture" component="label">
                                    <input hidden accept="image/*" type="file" />
                                    <PhotoCamera />
                                </IconButton>
                            </InputAdornment>
                        }}
                    />
                </Box>

                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name='faqCategory'
                    onChange={onChangeHandler}
                    >
                    <MenuItem value={1}>개미 협업툴 사용 관련</MenuItem>
                    <MenuItem value={2}>가격 정책</MenuItem>
                    <MenuItem value={3}>결제 관련</MenuItem>
                    <MenuItem value={4}>관리자</MenuItem>
                </Select>
                <CustomButton variant="contained" disableElevation onClick={onClickFAQHandler}>
                    작성 완료
                </CustomButton>
            </Box>
        </>
    );
}

export default FAQWritePage;




