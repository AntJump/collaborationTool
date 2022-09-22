import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { QNA_CONTENT, QNA_TITLE } from '../../../modules/QNAModule';
// import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { InputAdornment } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles'


const CustomButton = styled(Button)({

    backgroundColor: 'gray',
    color: '#fff',
    '&:hover': {
      backgroundColor: 'gray',
      color: '#3c52b2'
}})


export default function QNATitle() {

    const dispatch = useDispatch();
    const { qnaNumber } = useParams();
    const qnas = useSelector(state => state.qnaReducer);
    const qna = qnas[qnaNumber];
    console.log("qna: ", qna);

    
    const titleOnChangeHandler = (e) => {
        dispatch({ type: QNA_TITLE, payload : e.target.value });
    }

    const contentOnChangeHandler = (e) => {
        dispatch({ type: QNA_CONTENT, payload : e.target.value });
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
                value={qna.qnaTitle}
                onChange={titleOnChangeHandler}
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
                value={qna.qnaContent}
                onChange={contentOnChangeHandler}
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
            <CustomButton variant="contained" disableElevation>
            작성 완료
            </CustomButton>
        </Box>
    );
}