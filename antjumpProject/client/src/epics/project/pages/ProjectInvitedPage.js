
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { callProjectInvitationVerifyApi } from "../../../apis/ProjectAPICalls";
function ProjectInvitedPage() {

    const {token} = useParams();
        console.log("token:", token);
    const result = useSelector(state => state.projectInvitationReducer);
        console.log("result:", result);
    const dispatch = useDispatch();

    useEffect(
        ()=>{
            dispatch(callProjectInvitationVerifyApi({token: token}));
        },
        []
    )

    return  !result.emails && (
        <>
           <h2 align="center">{result}</h2>
        </>
    );
}

export default ProjectInvitedPage;