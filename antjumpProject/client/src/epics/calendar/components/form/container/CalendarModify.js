import * as React from 'react';
import CalendarTitle from '../CalendarTitle';
import CalendarAttendees from '../CalendarAttendees';
import CalendarDetailInfo from '../CalendarDetailInfo';
import CalendarFileUpload from '../CalendarFileUpload';
import CalendarFinishDate from '../CalendarFinishDate';
import CalendarStartDate from '../CalendarStartDate';
import CalendarTension from '../CalendarTension';
import CalendarColorPicker from '../CalendarColorPicker';
import CalendarAlarm from '../CalendarAlarm';
import CalendarPublicSet from '../CalendarPublicSet';
import CalendarShareBtn from '../CalendarShareBtn';
import CalendarInsertBtn from '../CalendarInsertBtn';

function CalendarModify() {
  return (
    <>
    <div style={{overflowY: 'scroll', height: '85%', marginRight: '-10px'}}>
      <div style={{marginRight: '10px'}}>
      <CalendarTitle/>
        <CalendarStartDate/>
      <CalendarFinishDate/>
      <br/>
      <CalendarAttendees/>
      <CalendarDetailInfo/>
      <br/>
      <CalendarFileUpload/>
      <br/>
      </div>
      <div style={{display: 'flex', marginRight: '10px' }}>
        <CalendarTension/>
        <CalendarColorPicker/>
      </div>
      <div style={{display: 'flex', marginRight: '10px' }}>
        <CalendarAlarm/>
        <CalendarPublicSet/>
      </div>
      <br/>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <CalendarShareBtn/>
        <br/>
        <CalendarInsertBtn/>
      </div>
      </div>
    </>
  );
}

export default CalendarModify;
