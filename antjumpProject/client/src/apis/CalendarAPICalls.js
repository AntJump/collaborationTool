import { formatDayString } from '@fullcalendar/core';
import {
    GET_CALENDARS,
    GET_CALENDAR,
    POST_CALENDARS,
    PUT_CALENDARS,
} from '../modules/CalendarModule';

export const getCalendars = () => {

    const requestURL = `${process.env.REACT_APP_SERVER_IP}/calendar/plan`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
        
        .then(response => response.json());

        dispatch({type: GET_CALENDARS, payload: result});
    }
}

export const getCalendarsById = ({calendarId}) => {

    const requestURL = `${process.env.REACT_APP_SERVER_IP}/calendar/plan/${calendarId}`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json());

        dispatch({type: GET_CALENDAR, payload: result});
    }
}

export const deleteCalendar = (calendarId) => {

    const requestURL = `${process.env.REACT_APP_SERVER_IP}/calendar/plan/${calendarId}`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: 'DELETE'
        })
        .then();
    }
}

export const postCalendars = ({form}) => {
    console.log('CalendarAPICalls :', form);
    const requestURL = `${process.env.REACT_APP_SERVER_IP}/calendar/plan`

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                calendarId: form.calendarId,
                calendarName: form.calendarName,
                calendarStartDate: form.calendarStartDate,
                calendarEndDate: form.calendarEndDate,
                calendarStartTime: form.calendarStartTime,
                calendarEndTime: form.calendarEndTime,
                calendarColor: form.calendarColor,
                calendarRepeatYn: form.calendarRepeatYn,
                explanation: form.explanation,
                calendarAlarmCycle: form.calendarAlarmCycle,
                calendarLocation: form.calendarLocation,
                calendarAttenders: form.calendarAttenders,
                calendarCategory: form.calendarCategory,
                calendarOpenYn: form.calendarOpenYn,
                fkMembersCalendars: form.fkMembersCalendars,
                fkSprintsCalendars: form.fkSprintsCalendars
            })
        })
        .then(response => response.json());
        dispatch({ type: POST_CALENDARS, payload: result });
    }
}

export const putCalendars = ({form}) => {
    console.log('calendarForm', form);

    const requestURL = `${process.env.REACT_APP_SERVER_IP}/calendar/plan/${form.calendarId}`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: 'PUT',
            headers: {
                "Allow": "PUT" 
            },
            body: form,
            withCredentials: true
        })
        .then(response => response.json());

        console.log(' RESULT : ', result);

        dispatch({ type: PUT_CALENDARS, payload: result });
    }
}