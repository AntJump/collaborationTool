
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


function SprintPeriodSelect({period, setPeriod}){
    const handleChange = (event) => {
        setPeriod(event.target.value);
    };


    return (
        <FormControl fullWidth>
            <InputLabel id="select-label">기간 *</InputLabel>
            <Select
                defaultValue={period}
                label='기간 *'
                onChange={handleChange}
            >
                <MenuItem value={1}>1주</MenuItem>
                <MenuItem value={2}>2주</MenuItem>
                <MenuItem value={3}>3주</MenuItem>
                <MenuItem value={4}>4주</MenuItem>
                <MenuItem value={0}>사용자 지정</MenuItem>
            </Select>
        </FormControl>
    );
}

export default SprintPeriodSelect;