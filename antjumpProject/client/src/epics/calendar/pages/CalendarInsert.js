import * as React from 'react';

import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { InputAdornment } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import CalendarColorPicker from '../components/form/CalendarColorPicker';
import { postCalendars } from '../../../apis/CalendarAPICalls';
import CalendarShareModal from '../components/modal/CalendarShareModal';

function CalendarInsert() {

  // 참석자 예시
  const top100Films = [
    {email: 'antjump@mtvs.com'}
  ];

  // 캘린더 상태
  const [tension, setTension] = React.useState('');

  const handleChangeTension = (e) => {
      setTension(e.target.value);
  };

  // 캘린더 알람
  const [alarmTime, setAlarmTime] = React.useState('');

  const handleChangeAlarm = (e) => {
      setAlarmTime(e.target.value);
  };

  // 캘린더 공개 여부
  const [PublicSetting, setPublicSetting] = React.useState('');

  const handleChange = (e) => {
      setPublicSetting(e.target.value);
  };

  // 공유하기 버튼
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

  // 일정 추가 버튼
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

  // 공유하기 modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // POST 전송

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    calendarColor: 'blue',
    calendarCategory: '개인일정',
    calendarOpenYn: 'Y'
  });

  const onChangeHandler = (e) => {
    setForm({
        ...form,
        [e.target.name]: e.target.value
    });
  }

  const onClickInsertBtnHandler = () => {

    dispatch(
        postCalendars({
            form
        }), []
    );

    console.log('form', form);

    alert('일정 등록이 완료 되었습니다');

    navigate(`/project/2/calendar`, { replace: true });
    window.location.reload();
  }

  return (
    <>
    <form>
      {/* 캘린더 제목 */}
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
              name='calendarName'
              id="outlined-multiline-static, fullWidth"
              label="일정 제목 *"
              multiline
              fullWidth
              onChange={ onChangeHandler }
          />
      </Box>

      {/* 캘린더 시작 날짜 */}
      <Box sx={{paddingTop: 5, display: 'inline-block', paddingRight: 2.5}}>
          <TextField
              name='calendarStartDate'
              id="datetime-local"
              label="시작 날짜 *"
              type="datetime-local"
              defaultValue="2022-09-19T2:40"
              sx={{ width: 340 }}
              InputLabelProps={{
                  shrink: true,
              }}
              onChange={ onChangeHandler }
              typeof="date"
          />
      </Box>

      {/* 캘린더 끝나는 날짜 */}
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
              onChange={ onChangeHandler }
              typeof="date"
          />
      </Box>
      <br/>

      {/* 캘린더 참석자 */}
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
                  name='calendarAttenders'
                  {...params}
                  label="참석자"
                  placeholder="추가"
                  fullWidth
                  id="fullWidth"
                  onAbort={ onChangeHandler }
              />
          )}
      />

      {/* 캘린더 일정 설명 */}
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
              name='explanation'
              id="outlined-multiline-static, fullWidth"
              label="일정 설명"
              multiline
              rows={10}
              fullWidth
              onChange={ onChangeHandler }
          />
      </Box>
      <br/>

      {/* 캘린더 파일 첨부 */}
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
      <br/>

      {/* 일정 추가하기 버튼 */}
      <CustomButton 
        variant="contained" 
        disableElevation
        onClick={ onClickInsertBtnHandler }
      >
        일정 추가
      </CustomButton>
    </form>
    </>
  );
}

export default CalendarInsert;
