import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { callFAQListAPI } from "../../../../apis/FAQAPICalls";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

function FAQList() {
  const faq = useSelector((state) => state.faqReducer);
  const faqs = faq.list;
  console.log("faqs: ", faqs);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_FAQS, payload: faqRows });
  }, [dispatch]);

<<<<<<< HEAD
  return (
    faqs && (
      <>
        <Box sx={{ flexGrow: 1, maxWidth: 1440 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3} />
            <Grid item xs={12} md={3}>
              <Typography
                sx={{ mt: 4, mb: 2, fontFamily: "monospace", fontWeight: 700 }}
                variant="h6"
                component="div"
                color="#004392"
              >
                개미 협업툴 사용 관련
              </Typography>
              <Demo>
                {faqs
                  .filter((faq) => faq.faqCategoryNo === 1)
                  .map((faq) => (
                    <div key={faq.id}>
                      <Button component={Link} to={faq.id}>
                        {faq.faqTitle}
                      </Button>
                    </div>
                  ))}
              </Demo>
            </Grid>
            <Grid item xs={12} md={2} />
            <Grid item xs={12} md={3}>
              <Typography
                sx={{ mt: 4, mb: 2, fontFamily: "monospace", fontWeight: 700 }}
                variant="h6"
                component="div"
                color="#004392"
              >
                가격 정책
              </Typography>
              <Demo>
                {faqs
                  .filter((faq) => faq.faqCategoryNo === 2)
                  .map((faq) => (
                    <div key={faq.id}>
                      <Button component={Link} to={faq.id}>
                        {faq.faqTitle}
                      </Button>
                    </div>
                  ))}
              </Demo>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3} />
            <Grid item xs={12} md={3}>
              <Typography
                sx={{ mt: 4, mb: 2, fontFamily: "monospace", fontWeight: 700 }}
                variant="h6"
                component="div"
                color="#004392"
              >
                결제 관련
              </Typography>
              <Demo>
                {faqs
                  .filter((faq) => faq.faqCategoryNo === 3)
                  .map((faq) => (
                    <div key={faq.id}>
                      <Button component={Link} to={faq.id}>
                        {faq.faqTitle}
                      </Button>
                    </div>
                  ))}
              </Demo>
            </Grid>
            <Grid item xs={12} md={2} />
            <Grid item xs={12} md={3}>
              <Typography
                sx={{ mt: 4, mb: 2, fontFamily: "monospace", fontWeight: 700 }}
                variant="h6"
                component="div"
                color="#004392"
              >
                관리자
              </Typography>
              <Demo>
                {faqs
                  .filter((faq) => faq.faqCategoryNo === 4)
                  .map((faq) => (
                    <div key={faq.id}>
                      <Button component={Link} to={faq.id}>
                        {faq.faqTitle}
                      </Button>
                    </div>
                  ))}
              </Demo>
            </Grid>
          </Grid>
        </Box>
      </>
    )
  );
=======
    useEffect(
        ()=>{
            dispatch(callFAQListAPI());
        },
        [dispatch]
    );

    return faqs && (
        <> 
            <Box sx={{ flexGrow: 1, maxWidth: 1440 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3}/>
                    <Grid item xs={12} md={3}>
                        <Typography sx={{ mt: 4, mb: 2,
                        fontFamily: 'monospace',
                        fontWeight: 700 }} variant="h6" component="div" color='#004392' >
                            개미 협업툴 사용 관련
                        </Typography>
                        <Demo>
                                {
                                    faqs.filter((faq) => faq.faqCategoryNo === 1)
                                    .map((faq) =>(
                                        <div key ={faq.faqId}>
                                            <Button component={Link} to={String(faq.faqId)}>
                                                {faq.faqTitle}
                                            </Button>
                                        </div>
                                    ))
                                }
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
                                {
                                    faqs.filter((faq) => faq.faqCategoryNo === 2)
                                    .map((faq) =>(
                                        <div key ={faq.faqId}>
                                            <Button component={Link} to={String(faq.faqId)}>
                                                {faq.faqTitle}
                                            </Button>
                                        </div>
                                    ))
                                }
                        </Demo>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3}/>
                    <Grid item xs={12} md={3}>
                        <Typography sx={{ mt: 4, mb: 2,
                        fontFamily: 'monospace',
                        fontWeight: 700 }} variant="h6" component="div" color='#004392' >
                            결제 관련
                        </Typography>
                        <Demo>
                                {
                                    faqs.filter((faq) => faq.faqCategoryNo === 3)
                                    .map((faq) =>(
                                        <div key ={faq.faqId}>
                                            <Button component={Link} to={String(faq.faqId)}>
                                                {faq.faqTitle}
                                            </Button>
                                        </div>
                                    ))
                                }
                        </Demo>
                    </Grid>
                    <Grid item xs={12} md={2}/>            
                    <Grid item xs={12} md={3}>
                        <Typography sx={{ mt: 4, mb: 2,
                        fontFamily: 'monospace',
                        fontWeight: 700 }} variant="h6" component="div" color='#004392' >
                            관리자
                        </Typography>
                        <Demo>
                                {
                                    faqs.filter((faq) => faq.faqCategoryNo === 4)
                                    .map((faq) =>(
                                        <div key ={faq.faqId}>
                                            <Button component={Link} to={String(faq.faqId)}>
                                                {faq.faqTitle}
                                            </Button>
                                        </div>
                                    ))
                                }
                        </Demo>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
>>>>>>> main
}

export default FAQList;
