import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from "react-redux";
import { InputAdornment } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { callFAQDetailAPI, callFAQUpdateAPI } from '../apis/FAQAPICalls';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


const CustomButton = styled(Button)({

    backgroundColor: 'gray',
    color: '#fff',
    '&:hover': {
      backgroundColor: 'gray',
      color: '#3c52b2'
}})


export default function FAQModifyPage() {

    
    const dispatch = useDispatch();
    const { faqNumber } = useParams();

    const faqs = useSelector(state => state.faqReducer);
    const faq = faqs;

    console.log("faq: ", faq);

    const navigate = useNavigate();

    const [form, setForm] = useState({
        faqId : faqNumber,
        faqTitle: faq.faqTitle,
        faqContent: faq.faqContent,
        faqCategoryNo: faq.faqCategoryNo,
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
            dispatch(callFAQDetailAPI(faqNumber));
        }
    , []);

    const onClickFAQHandler = () => {        
        console.log('[FAQModifyPage] onClickFAQHandler Start!!');
        console.log('form', form);
        dispatch(callFAQUpdateAPI({	// 글 작성
            form: form
        }));

        alert('글 등록이 완료되었습니다.');

        navigate(`/faqs`);

        console.log('[FAQModifyPage] onClickFAQHandler End!!');

    }

    return faq && (
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
                label="FAQ 제목"
                multiline
                fullWidth
                defaultValue={faq.faqTitle}
                name='faqTitle'
                onChange={onChangeHandler}
            />
            </Box>
            
            <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name='faqCategoryNo'
                        onChange={onChangeHandler}
                        sx ={{
                            float: 'right',
                            width: 200,
                            margin: 'auto'
                        }}
                        defaultValue={faq.faqCategoryNo}
                        >
                        <MenuItem value={1}>개미 협업툴 사용 관련</MenuItem>
                        <MenuItem value={2}>가격 정책</MenuItem>
                        <MenuItem value={3}>결제 관련</MenuItem>
                        <MenuItem value={4}>관리자</MenuItem>
                    </Select>
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
                defaultValue={faq.faqContent}
                name='faqContent'
                onChange={onChangeHandler}
            />
            </Box>
            <CustomButton variant="contained" disableElevation onClick={onClickFAQHandler}>
            작성 완료
            </CustomButton>
        </Box>
    );
}