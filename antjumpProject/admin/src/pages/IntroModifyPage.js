import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { INTRO_CONTENT } from '../modules/IntroModule';
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


export default function IntroModify() {

    const dispatch = useDispatch();
    const { introNumber } = useParams();
    const intros = useSelector(state => state.introReducer);
    const intro = intros[introNumber];
    console.log("intro: ", intro);

    

    const contentOnChangeHandler = (e) => {
        dispatch({ type: INTRO_CONTENT, payload : e.target.value });
    }

    return intro && (
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
                label="소개 내용"
                multiline
                rows={10}
                fullWidth
                value={intro.introContent}
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