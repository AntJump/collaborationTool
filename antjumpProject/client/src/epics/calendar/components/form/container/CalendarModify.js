import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
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

import CalendarColorPicker from '../CalendarColorPicker';

import { getCalendarsById, putCalendars } from '../../../../../apis/CalendarAPICalls';

function CalendarModify({calendarId}) {

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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const plan  = useSelector(state => state.calendarReducer);  
  const CalendarDetail = plan.data
  const [form, setForm] = useState({});

  useEffect(
    () => {
      console.log(calendarId);

      dispatch(getCalendarsById({
        calendarId: calendarId
      }));
    }, []
  );

  const onChangeHandler = (e) => {
      setForm({
          ...form,
          [e.target.name]: e.target.value
      });
  };

  const onClickUpdateHandler = () => {

    dispatch(putCalendars({
      form: form
    }));

    navigate(`project/2/calendar`, { replace: true});
    window.location.reload();
  };

  return (
    <>
    { CalendarDetail &&
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
                  name="calendarTitle"
                  label="일정 제목 *"
                  multiline
                  fullWidth
                  value = { (form.calendarTitle) || '' }
                  onChange = { onChangeHandler }
              />
          </Box>

          {/* 일정 시작 날짜 */}
          <Box sx={{paddingTop: 5, display: 'inline-block', paddingRight: 2.5}}>
              <TextField
                  id="datetime-local"
                  label="시작 날짜 *"
                  type="datetime-local"
                  defaultValue="2022-09-19T2:40"
                  sx={{ width: 340 }}
                  InputLabelProps={{
                      shrink: true,
                  }}
              />
          </Box>

          {/* 일정 끝나는 날짜 */}
          <Box sx={{paddingTop: 5, margin: 'auto', display: 'inline-block'}}>
                <TextField
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
        <div style={{display: 'flex', marginRight: '10px' }}>

          {/* 일정 상태 */}
          <Box sx={{ display: 'inline-block' }}>
              <FormControl sx={{ m: 1, minWidth: 140 }} size="small">
                  <InputLabel id="demo-select-small">상태</InputLabel>
                  <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      value={tension}
                      label="tension"
                      onChange={handleChangeTension}
                  >
                      <MenuItem value={10}>바쁨</MenuItem>
                      <MenuItem value={20}>한가함</MenuItem>
                  </Select>
              </FormControl>
          </Box>

          {/* 컬러 피커 */}
          <CalendarColorPicker/>
        </div>
        <div style={{display: 'flex', marginRight: '10px' }}>

          {/* 일정 알람 */}
          <Box sx={{ display: 'inline-block', marginRight: '4px' }}>
              <FormControl sx={{ m: 1, minWidth: 140 }} size="small">
                  <InputLabel id="demo-select-small">알람</InputLabel>
                  <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      value={alarmTime}
                      label="alarmTime"
                      onChange={handleChangeAlarm}
                  >
                      <MenuItem value="">
                          <em>없음</em>
                      </MenuItem>
                      <MenuItem value={10}>10분 전</MenuItem>
                      <MenuItem value={20}>30분 전</MenuItem>
                      <MenuItem value={30}>1시간 전</MenuItem>
                  </Select>
              </FormControl>
          </Box>

          {/* 일정 공개 여부 */}
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
                      <MenuItem value={10}>전체 공개</MenuItem>
                      <MenuItem value={20}>나만 보기</MenuItem>
                  </Select>
              </FormControl>
          </Box>
        </div>
        <br/>
        <div style={{display: 'flex', justifyContent: 'center'}}>

          {/* 일정 공유하기 버튼 */}
          <CustomButtonShare variant="contained" disableElevation
              // sx={{ backgroundColor: 'gray', display: 'inline-block' }}
          >
            일정 공유하기
          </CustomButtonShare>
          <br/>

          {/* 일정 수정하기 버튼 */}
          <CustomButton 
            variant="contained" 
            disableElevation
          >
            일정 수정
          </CustomButton>
        </div>
        </div>
      }
    </>
  );
}

export default CalendarModify;
