import { Grid, TextField } from "@mui/material";
import {useState} from "react";

import moment from 'moment';
import "moment/locale/ko";


function SprintDateSelect({period}){

    
    let now = moment();
    const [endDate, setEndDate] = useState(moment().add(period*7, 'days'))
   
    const onChangeStartDate = (e)=>{
        console.log(e.target.value);
        setEndDate(moment(e.target.value).add(period*7, 'days'));
    }

    return (
        <>
            <Grid item  sx= {{width: '47%'}}>
                
                <TextField
                    label="시작 날짜 *"
                    type="datetime-local"
                    defaultValue={now.format('YYYY-MM-DD HH:mm:ss')}
                    onChange={onChangeStartDate}
                    fullWidth
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Grid>
            <Grid item  sx= {{width: '47%'}}>
                {period == 0 ?
                    <TextField
                        label="종료 날짜 *"
                        value={endDate.format('YYYY-MM-DD HH:mm:ss')}
                        fullWidth
                        readOnly
                    />
                    :
                    <TextField
                        label="종료 날짜 *"
                        type="datetime-local"
                        value={endDate.format('YYYY-MM-DD HH:mm:ss')}
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                }
                
            </Grid>
        </>

    );

}

export default SprintDateSelect;