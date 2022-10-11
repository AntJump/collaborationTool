import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

function PaymentPage() {

    return (
        <>
            
            <Box sx={{
                display: "flex", 
                justifyContent: "center" 
            }}>
                <Button component={Link} to="goods">상품 구매</Button>
            </Box>
        </>
    );
}

export default PaymentPage;