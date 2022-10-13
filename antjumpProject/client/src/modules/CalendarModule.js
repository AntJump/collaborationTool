import {createAction, handleActions} from "redux-actions"

const initialState = [];

export const GET_CALENDARS = "calendar/GET_CALENDARS";
export const GET_CALENDAR = "calendar/GET_CALENDAR";
export const POST_CALENDARS = "calendar/POST_CALENDARS";
export const PUT_CALENDARS = "calendar/PUT_CALENDARS";

const actions = createAction({
    [GET_CALENDARS]: () => {},
    [GET_CALENDAR]: () => {},
    [POST_CALENDARS]: () => {},
    [PUT_CALENDARS]: () => {},
});

/* 리듀서 */
const calendarReducer = handleActions(
    {
        [GET_CALENDARS]: (state, { payload }) => {
            
            return payload;
        },
        [GET_CALENDAR]: (state, {payload}) => {

            return payload;
        },
        [POST_CALENDARS]: (state, { payload }) => {

            return payload;
        },
        [PUT_CALENDARS]: (state, { payload }) => {

            return payload;
        },

    },
    initialState
);

export default calendarReducer;