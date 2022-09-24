import * as React from "react";

export default function CalendarHeader() {

        const week = ['일', '월', '화', '수', '목', '금', '토'];

        let now = new Date();
        let todayMonth = now.getMonth() + 1;
        let todayDate = now.getDate();
        let dayOfWeek = week[now.getDay()];


    return (
                <div style={{fontSize: '48px', textAlign: 'left', paddingLeft: '7px', fontWeight: 'bold'}}>
                    {todayMonth + '월 ' + todayDate + '일 (' + dayOfWeek + ')'}
                </div>
    );
}