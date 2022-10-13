import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from "react-redux";
import { InputAdornment, Typography } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { callQNADetailAPI, callQNAUpdateAPI } from '../../../apis/QNAAPICalls';
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
    
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState();
    const imageInput = useRef();

    const qnas = useSelector(state => state.qnaReducer);
    const qna = qnas;

    console.log("qna: ", qna);

    const navigate = useNavigate();

    const [form, setForm] = useState({
        qnaId : qnaNumber,
        qnaTitle: qna.qnaTitle,
        qnaContent: qna.qnaContent,
        qnaCategoryNo: qna.qnaCategoryNo,
        qnaSaveName: qna.qnaSaveName,
        memberId: 1
    });

    useEffect(() => {
        // 이미지 업로드시 미리보기 세팅
        if(image){
            const fileReader = new FileReader();
            fileReader.onload = (e) => {
                const { result } = e.target;
                if( result ){
                    setImageUrl(result);
                }
            }
            fileReader.readAsDataURL(image);
        }
    },
    [image]);

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

    useEffect(
        () => {
            dispatch(callQNADetailAPI(qnaNumber));
        }
    , []);

    const onClickQNAHandler = () => {        
        console.log('[QNAModifyPage] onClickQNAHandler Start!!');

        const formData = new FormData();

        formData.append("qnaId", form.qnaId)
        formData.append("qnaTitle", form.qnaTitle)
        formData.append("qnaContent", form.qnaContent)
        formData.append("qnaCategoryNo", form.qnaCategoryNo)
        formData.append("memberId", form.memberId)
        formData.append("qnaSaveName", form.qnaSaveName)

        if(image) {
            formData.append("qnaFile", image);
        }

        dispatch(callQNAUpdateAPI({	// 글 작성
            form: formData
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
            <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name='qnaCategoryNo'
                        onChange={onChangeHandler}
                        sx ={{
                            float: 'right',
                            width: 200,
                            margin: 'auto'
                        }}
                        defaultValue={qna.qnaCategoryNo}
                        >
                        <MenuItem value={1}>프로젝트 관련</MenuItem>
                        <MenuItem value={2}>채팅 관련</MenuItem>
                        <MenuItem value={3}>협업툴 관련</MenuItem>
                        <MenuItem value={4}>결제 관련</MenuItem>
                        <MenuItem value={5}>역할 관련</MenuItem>
                        <MenuItem value={6}>기타</MenuItem>
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
                        name="qnaFile"
                        InputProps={{
                        startAdornment: <InputAdornment position="start">
                                <IconButton color="primary" aria-label="upload picture" component="label" >
                                    
                                    <Typography 
                                        component="input" hidden accept="image/*" type="file" onChange={onChangeImageUpload} ref= { imageInput }/>
                                    <PhotoCamera />
                                    
                                    <Box component="button" 
                                        sx={{
                                            border:0
                                        }}
                                        onClick={ onClickImageUpload }></Box>
                                    { qna && <Box component="img"
                                        sx={{
                                            width: 300,
                                            maxWidth: '100%',
                                            paddingTop: 5,
                                            margin: 'auto'
                                        }}
                                        src={ (imageUrl == null) ? qna.qnaFileUrl : imageUrl } 
                                        alt="preview"
                                    />}
                                        
                                </IconButton>
                            </InputAdornment>
                        }}
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
                <CustomButton variant="contained" disableElevation onClick={onClickQNAHandler}>
                    작성 완료
                </CustomButton>
            </Box>
        </Box>
    );
}

export default QNAModifyPage;