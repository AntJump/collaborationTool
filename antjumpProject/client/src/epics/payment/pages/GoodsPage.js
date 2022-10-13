import { Button } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadTossPayments } from '@tosspayments/payment-sdk'
import uuid from 'react-uuid'
import Box from "@mui/material/Box";
import goodsImg from '../../../common/imgs/goods.jpg';
import { callGoodsDetailAPI } from '../../../apis/PaymentAPICalls';

const clientKey = 'test_ck_O6BYq7GWPVvnEDv1eklVNE5vbo1d'

function GoodsPage() {
    

    const goods = useSelector(state => state.paymentReducer);
    const good = goods;
    console.log("good: ", good);
    

    const dispatch = useDispatch();

  
    useEffect(() => {
        dispatch(callGoodsDetailAPI(1));
      }, [dispatch]);

    const onGoodsHandler = async() => {

        const tossPayments = await loadTossPayments(clientKey);
        
        tossPayments
            .requestPayment('카드', {
            amount: goods.goodsAmount,
            orderId: uuid(),
            orderName: goods.goodsName,
            successUrl: `${process.env.REACT_APP_CLIENT_IP}` + '/payments/success',
            failUrl: `${process.env.REACT_APP_CLIENT_IP}` + '/payments/fail',
          }).catch(function (error) {
            if (error.code === 'USER_CANCEL') {
              // 결제 고객이 결제창을 닫았을 때 에러 처리
            } else if (error.code === 'INVALID_CARD_COMPANY') {
              // 유효하지 않은 카드 코드에 대한 에러 처리
            }
          })
    };
    
    return good && (
        <>
            
            <Button onClick ={onGoodsHandler}><Box 
                component="img"
                sx={{
                    width: '100%'
                }}
                alt='상품'
                src={goodsImg}
            /></Button>
        </>
    );
}

export default GoodsPage;