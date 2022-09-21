import * as React from 'react';
import CalendarTitle from '../components/form/CalendarTitle';
import CalendarAttendees from '../components/form/CalendarAttendees';
import CalendarDetailInfo from '../components/form/CalendarDetailInfo';
import CalendarFileUpload from '../components/form/CalendarFileUpload';
import CalendarFinishDate from '../components/form/CalendarFinishDate';
import CalendarStartDate from '../components/form/CalendarStartDate';
import CalendarTension from '../components/form/CalendarTension';
import CalendarColorPicker from '../components/form/CalendarColorPicker';
import CalendarAlarm from '../components/form/CalendarAlarm';
import CalendarPublicSet from '../components/form/CalendarPublicSet';
import CalendarShareBtn from '../components/form/CalendarShareBtn';

function CalendarInsert() {
  return (
    <>
      <CalendarTitle/>
      <CalendarStartDate/>
      <CalendarFinishDate/>
      <br/>
      <CalendarAttendees/>
      <CalendarDetailInfo/>
      <br/>
      <CalendarFileUpload/>
      <br/>
      <CalendarTension/>
      <CalendarColorPicker/>
      <CalendarAlarm/>
      <CalendarPublicSet/>
      <CalendarShareBtn/>
    </>
  );
}

export default CalendarInsert;
