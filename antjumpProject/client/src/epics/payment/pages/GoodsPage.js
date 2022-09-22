import { Button } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { GET_GOODS } from "../../../modules/PaymentModule";
import { getUrl } from "../../../common/items/url";
import {goodsRows} from "../lists/GoodsSample";
import { loadTossPayments } from '@tosspayments/payment-sdk'
import uuid from 'react-uuid'
import Box from "@mui/material/Box";
import goodsImg from '../../../common/imgs/goods.jpg';

const clientKey = 'test_ck_O6BYq7GWPVvnEDv1eklVNE5vbo1d'

function GoodsPage() {
    

    const good = useSelector(state => state.paymentReducer);
    const goods = good.list;
    console.log("goods: ", goods);

    const dispatch = useDispatch();

    useEffect(
        ()=>{
            dispatch({type: GET_GOODS, payload: goodsRows});
        },
        [dispatch]
    );

    const onGoodsHandler = async() => {

        const tossPayments = await loadTossPayments(clientKey);
        
        tossPayments
            .requestPayment('카드', {
            amount: goods[0].goodsAmount,
            orderId: uuid(),
            orderName: goods[0].goodsName,
            customerName: '부시연',
            successUrl: getUrl() + '/success',
            failUrl: getUrl() + '/fail',
          }).catch(function (error) {
            if (error.code === 'USER_CANCEL') {
              // 결제 고객이 결제창을 닫았을 때 에러 처리
            } else if (error.code === 'INVALID_CARD_COMPANY') {
              // 유효하지 않은 카드 코드에 대한 에러 처리
            }
          })
    };
    
    return (
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