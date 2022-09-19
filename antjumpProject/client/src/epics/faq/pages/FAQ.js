import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

function FAQ() {

  return (
    <>
        <Box sx={{ flexGrow: 1, maxWidth: 1440 }}>
        <Typography sx={{ mt: 1, mb: 1,
                fontFamily: 'monospace',
                fontWeight: 700 }} variant="h3" align='center' color='#004392' >
            자주 묻는 질문(FAQ)
        </Typography>
        <Grid container spacing={2}>
            <Grid item xs={12} md={3}/>
            <Grid item xs={12} md={3}>
                <Typography sx={{ mt: 4, mb: 2,
                fontFamily: 'monospace',
                fontWeight: 700 }} variant="h6" component="div" color='#004392' >
                    개미 협업툴 사용 관련
                </Typography>
                <Demo>
                    {generate(
                        <Button component={Link} to={generate}>
                        <ListItem>
                        <ListItemText
                            primary="Single-line item"
                        />
                        </ListItem>
                        </Button>,
                    )}
                </Demo>
            </Grid>
            <Grid item xs={12} md={2}/>            
            <Grid item xs={12} md={3}>
                <Typography sx={{ mt: 4, mb: 2,
                fontFamily: 'monospace',
                fontWeight: 700 }} variant="h6" component="div" color='#004392' >
                    가격 정책
                </Typography>
                <Demo>
                    {generate(
                        <ListItem>
                        <ListItemText
                            primary="Single-line item"
                        />
                        </ListItem>,
                    )}
                </Demo>
            </Grid>
        </Grid>
        <Grid container spacing={2}>
            <Grid item xs={12} md={3}/>
            <Grid item xs={12} md={2}>
                <Typography sx={{ mt: 4, mb: 2,
                fontFamily: 'monospace',
                fontWeight: 700 }} variant="h6" component="div" color='#004392'>
                    결제 관련
                </Typography>
                <Demo>
                    {generate(
                        <ListItem>
                        <ListItemText
                            primary="Single-line item"
                        />
                        </ListItem>,
                    )}
                </Demo>
            </Grid>
            <Grid item xs={12} md={3}/>           
            <Grid item xs={12} md={3}>
                <Typography sx={{ mt: 4, mb: 2,
                fontFamily: 'monospace',
                fontWeight: 700 }} variant="h6" component="div" color='#004392'>
                    관리자
                </Typography>
                <Demo>
                    {generate(
                        <ListItem>
                        <ListItemText
                            primary="Single-line item"
                        />
                        </ListItem>,
                    )}
                </Demo>
            </Grid>
        </Grid>
        </Box>
    </>
    
    
  );
}

export default FAQ;