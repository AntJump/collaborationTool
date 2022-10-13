import ChipInput from 'material-ui-chip-input';
import { useState } from 'react';
import { callCheckMemberByEmailApi } from '../../../../apis/ProjectAPICalls';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { INIT_EMAILS, DELETE_EMAIL } from '../../../../modules/ProjectInvitationModule';
function InviteInputForm(){

    console.log("[InviteInputForm]");
    const {emails} = useSelector(state => state.projectInvitationReducer); 
        console.log("emails:", emails);

    const dispatch = useDispatch();
    useEffect(
        ()=>{
            dispatch({type:INIT_EMAILS});
        },
        []
    );
    // const {chips, setChips} = useState([]);



    const handleAddChip= (email) =>  {
        dispatch(callCheckMemberByEmailApi({email: email}));
    };

    const handleDeleteChip= (email, i)=>{
        dispatch({type:DELETE_EMAIL, payload: email});
    };

    return (

        <>
            <ChipInput
                fullWidth
                value={emails}
                onAdd={(email) => handleAddChip(email)}
                onDelete={(email, index) => handleDeleteChip(email, index)}
                fullWidthInput
                placeholder='초대할 회원 이메일을 입력해주세요'
            /><br/>
        </>
    );
}

export default InviteInputForm;