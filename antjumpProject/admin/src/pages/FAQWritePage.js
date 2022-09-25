import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FAQ_CONTENT, FAQ_TITLE } from '../modules/FAQModule';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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

function FAQWritePage() {

    
    const faq = useSelector(state => state.faqReducer);
    const dispatch = useDispatch();

    console.log(faq);

    useEffect(
        () => { 
            dispatch({ type: FAQ_TITLE, payload : '' })
            dispatch({ type: FAQ_CONTENT, payload : '' })
        },
        []
    );

    const titleOnChangeHandler = (e) => {
        dispatch({ type: FAQ_TITLE, payload : e.target.value });
    }
  
    const contentOnChangeHandler = (e) => {
        dispatch({ type: FAQ_CONTENT, payload : e.target.value });
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
                    value={ faq.faqTitle }
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
                    label="FAQ 내용"
                    multiline
                    rows={10}
                    fullWidth
                    value={ faq.faqContent }
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
        </>
    );
}

export default FAQWritePage;




