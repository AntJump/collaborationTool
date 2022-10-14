// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
// import ModalHeader from './ModalHeader';
// import { modalBoxstyle } from './ModalStyle';
// import CalendarModify from '../form/container/CalendarModify';
import * as React from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { InputAdornment } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

import CalendarColorPicker from '../../calendar/components/form/CalendarColorPicker';

import { GET_CALENDAR } from '../../../modules/CalendarModule';
import { getCalendarsById, putCalendars, deleteCalendar } from '../../../apis/CalendarAPICalls';
import CalendarShareModal from '../components/modal/CalendarShareModal';
import { textAlign } from '@mui/system';

export default function CalendarDetail() {

    const navigate = useNavigate();

    {/* 임시 참석자 */}
    const top100Films = [
        {email: 'antjump@mtvs.com'}
    ];

    {/* 캘린더 상태 */}
    const [tension, setTension] = React.useState('');

    const handleChangeTension = (e) => {
        setTension(e.target.value);
    };

    {/* 일정 알람 */}
    const [alarmTime, setAlarmTime] = React.useState('');

    const handleChangeAlarm = (e) => {
        setAlarmTime(e.target.value);
    };

    {/* 일정 공개 여부 */}
    const [PublicSetting, setPublicSetting] = React.useState('');

    const handleChange = (e) => {
        setPublicSetting(e.target.value);
    };

    {/* 일정 공유하기 버튼 */}
    const CustomButtonShare = styled(Button)({

        backgroundColor: 'gray',
        color: '#fff',
        '&:hover': {
        backgroundColor: '#E8E8E8',
        color: 'black'
        },
        marginTop: '10px',
        marginLeft: '15px',
        height: '40px'
    })

    {/* 일정 수정하기 버튼 */}
    const CustomButton = styled(Button)({

        backgroundColor: '#004392',
        color: '#fff',
        '&:hover': {
        backgroundColor: '#3A7DCB',
        color: 'white',
        },
        height: '40px',
        width: '120px',
        marginTop: '10px',
        marginBottom: '50px'
    })

    {/* 수정 리덕스 호출 */}
    const { calendarId } = useParams();
    const dispatch = useDispatch();
    const plan = useSelector(state => state.calendarReducer);  
    const calendarDetail = plan.data;
    console.log('calendarDetail', calendarDetail)
    const [form, setForm] = useState({
        calendarId: calendarId,
        calendarColor: 'blue',
        calendarCategory: '개인일정',
        calendarOpenYn: 'Y',
        calendarName: '',
        calendarStartDate: new Date(),
        calendarEndDate: new Date(),
        explanation: ''
    });

    // console.log('calendarName', calendarDetail.calendarName);
    console.log('form', form);


    useEffect(
        () => {
            console.log('calendarId', calendarId);

            dispatch(getCalendarsById({calendarId}
            ));
            
            if(calendarDetail !== undefined ) {
                setForm({
                    ...form,
                    calendarId: calendarDetail.calendarId,
                    calendarColor: 'blue',
                    calendarCategory: '개인일정',
                    calendarOpenYn: 'Y',
                    calendarName : calendarDetail.calendarName,
                    calendarStartDate : calendarDetail.calendarStartDate,
                    calendarEndDate : calendarDetail.calendarEndDate,
                    explanation : calendarDetail.explanation,
                })
            }

        }, []
    );

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const onClickUpdateHandler = () => {

        dispatch(putCalendars({form}
        ));

        // navigate(`project/2/calendar/plan/${calendarId}`, { replace: false});
        window.location.reload();
    };

    // 공유하기 modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // 일정 삭제 handler
    const onClickDeleteHandler = () => {
        dispatch(deleteCalendar(calendarId));
        alert(`일정이 삭제 되었습니다`);
        navigate(`/project/2/calendar`);
    }

    return (
    calendarDetail && (
        <div style={{overflowY: 'scroll', height: '85%', marginRight: '-10px'}}>
            <div style={{marginRight: '10px'}}>

                {/* 캘린더 일정 제목 */}
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
                        name="calendarName"
                        label="일정 제목 *"
                        multiline
                        fullWidth
                        onChange = { onChangeHandler }
                        value={calendarDetail.calendarName}
                    />
                </Box>

                {/* 일정 시작 날짜 */}
                <Box sx={{paddingTop: 5, display: 'inline-block', paddingRight: 2.5}}>
                    <TextField
                        name='calendarStartDate'
                        id="datetime-local"
                        label="시작 날짜 *"
                        type="datetime-local"
                        // defaultValue="2022-09-19T2:40"
                        sx={{ width: 340 }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={calendarDetail.calendarStartDate}
                    />
                </Box>

                {/* 일정 끝나는 날짜 */}
                <Box sx={{paddingTop: 5, margin: 'auto', display: 'inline-block'}}>
                    <TextField
                        name='calendarEndDate'
                        id="datetime-local"
                        label="끝나는 날짜 *"
                        type="datetime-local"
                        defaultValue="2022-09-19T2:40"
                        sx={{ 
                            width: 340
                        }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={calendarDetail.calendarEndDate}
                    />
                </Box>
                <br/>

                {/* 일정 참석자 */}
                <Autocomplete
                    multiple
                    id="tags-outlined"
                    options={top100Films}
                    getOptionLabel={(option) => option.email}
                    filterSelectedOptions
                    sx={{
                        width: 700,
                        maxWidth: '100%',
                        paddingTop: 5,
                        margin: 'auto'
                    }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="참석자"
                            placeholder="추가"
                            fullWidth
                            id="fullWidth"
                        />
                    )}
                />

                {/* 일정 상세 설명 */}
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
                        label="일정 설명"
                        multiline
                        rows={10}
                        fullWidth
                        name='explanation'
                        value={calendarDetail.explanation}
                    />
                </Box>
                <br/>

                {/* 일정 파일 업로드 */}
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
            <br/>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', marginRight: '10px' }}>

                {/* 캘린더 상태 선택 */}
                <Box sx={{ display: 'inline-block' }}>
                    <FormControl sx={{ m: 1, minWidth: 140 }} size="small">
                        <InputLabel id="demo-select-small">상태</InputLabel>
                        <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={tension}
                            label="tension"
                            onChange={ handleChangeTension }
                        >
                            <MenuItem value={10}>바쁨</MenuItem>
                            <MenuItem value={20}>한가함</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                {/* 캘린더 컬러 피커 */}
                <CalendarColorPicker/>

                {/* 캘린더 알람 설정 */}
                <Box sx={{ display: 'inline-block', marginRight: '4px' }}>
                    <FormControl sx={{ m: 1, minWidth: 140 }} size="small">
                        <InputLabel id="demo-select-small">알람</InputLabel>
                        <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={alarmTime}
                            label="alarmTime"
                            onChange={ handleChangeAlarm }
                        >
                            <MenuItem  name="calendarAlarmCycle" value="">
                                <em>없음</em>
                            </MenuItem>
                            <MenuItem name="calendarAlarmCycle" onChange={ onChangeHandler } value={10}>10분 전</MenuItem>
                            <MenuItem name="calendarAlarmCycle" onChange={ onChangeHandler } value={20}>30분 전</MenuItem>
                            <MenuItem name="calendarAlarmCycle" onChange={ onChangeHandler } value={30}>1시간 전</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                {/* 캘린더 공개 여부 */}
                <Box sx={{ display: 'inline-block' }}>
                    <FormControl sx={{ m: 1, minWidth: 148 }} size="small">
                        <InputLabel id="demo-select-small">공개 여부 *</InputLabel>
                        <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={PublicSetting}
                            label="PublicSetting"
                            onChange={handleChange}
                        >
                            <MenuItem name="calendarOpenYn" onChange={ onChangeHandler } value={10}>전체 공개</MenuItem>
                            <MenuItem name="calendarOpenYn" onChange={ onChangeHandler } value={20}>나만 보기</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                {/* 일정 공유하기 버튼 */}
                <CustomButtonShare variant="contained" disableElevation onClick={handleOpen}>
                    일정 공유하기
                </CustomButtonShare>
                <CalendarShareModal open = { open } handleClose = { handleClose } />

            </div>

            <div style={{display: 'flex', justifyContent: 'center'}}>
                {/* 일정 수정하기 버튼 */}
                <CustomButton 
                    variant="contained" 
                    disableElevation
                    onClick={onClickUpdateHandler}
                >
                    일정 수정
                </CustomButton>
                <CustomButtonShare variant="contained" disableElevation onClick={onClickDeleteHandler}>
                    일정 삭제하기
                </CustomButtonShare>
            </div>
        </div>
        )
    );
}
