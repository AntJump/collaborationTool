import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from "react-redux";
import { InputAdornment } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { callQNADetailAPI, callQNAUpdateAPI } from '../apis/QNAAPICalls';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


const CustomButton = styled(Button)({

    backgroundColor: 'gray',
    color: '#fff',
    '&:hover': {
      backgroundColor: 'gray',
      color: '#3c52b2'
}})

function QNAModifyPage() {

    const dispatch = useDispatch();
    const { qnaNumber } = useParams();

    const qnas = useSelector(state => state.qnaReducer);
    const qna = qnas;

    console.log("qna: ", qna);

    const navigate = useNavigate();

    const [form, setForm] = useState({
        qnaId : qnaNumber,
        qnaTitle: qna.qnaTitle,
        qnaContent: qna.qnaContent,
        qnaCategoryNo: qna.qnaCategoryNo,
        adminId: 1
    });

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    useEffect(
        () => {
            dispatch(callQNADetailAPI(qnaNumber));
        }
    , []);

    const onClickQNAHandler = () => {        
        console.log('[QNAModifyPage] onClickQNAHandler Start!!');
        console.log('form', form);
        dispatch(callQNAUpdateAPI({	// 글 작성
            form: form
        }));

        alert('글 등록이 완료되었습니다.');

        navigate(`/qnas`);

        console.log('[QNAModifyPage] onClickQNAHandler End!!');

    }

    return qna&& (
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
                label="문의 제목"
                multiline
                fullWidth
                defaultValue={qna.qnaTitle}
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
                defaultValue={qna.qnaContent}
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
                    defaultValue={qna.qnaCategoryNo}
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
    );
}

export default QNAModifyPage;