import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { InputAdornment } from "@mui/material";

export default function CalendarFileUpload() {

    return (
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
    );
}