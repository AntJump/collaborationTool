import { GET_MEMBER, POST_LOGIN, POST_REGISTER } from "../modules/MemberModule";

export const callGetMemberAPI = ({ memberId }) => {
  console.log(memberId);
  const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8181/members/${memberId}`;

  console.log(requestURL);

  return async (dispatch, getState) => {
    // 클라이언트 fetch mode : no-cors 사용시 application/json 방식으로 요청이 불가능
    // 서버에서 cors 허용을 해주어야 함
    const result = await fetch(requestURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        //    Authorization: "Bearer " + window.localStorage.getItem("accessToken"),
      },
    }).then((response) => response.json());

    console.log("[MemberAPICalls] callGetMemberAPI RESULT : ", result);

    dispatch({ type: GET_MEMBER, payload: result });
  };
};

export const callLoginAPI = ({ data }) => {
  const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8181/auth/login`;

  return async (dispatch, getState) => {
    // 클라이언트 fetch mode : no-cors 사용시 application/json 방식으로 요청이 불가능
    // 서버에서 cors 허용을 해주어야 함
    const result = await fetch(requestURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        memberEmail: data.get("email"),
        memberPwd: data.get("password"),
      }),
    }).then((response) => response.json());

    console.log("[MemberAPICalls] callLoginAPI RESULT : ", result);
    if (result.status === 200) {
      window.localStorage.setItem("accessToken", result.data.accessToken);
    }
    dispatch({ type: POST_LOGIN, payload: result });
  };
};

export const callLogoutAPI = () => {
  return async (dispatch, getState) => {
    dispatch({ type: POST_LOGIN, payload: "" });
    console.log("[MemberAPICalls] callLogoutAPI RESULT : SUCCESS");
  };
};

export const callRegisterAPI = ({ data }) => {
  const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8181/auth/signup`;

  return async (dispatch, getState) => {
    const result = await fetch(requestURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      body: JSON.stringify({
        memberEmail: data.get("email"),
        memberName: data.get("name"),
        memberPhone: data.get("phone"),
        memberPwd: data.get("password"),
      }),
    }).then((response) => response.json());

    console.log("[MemberAPICalls] callRegisterAPI RESULT : ", result);

    if (result.status === 201) {
      dispatch({ type: POST_REGISTER, payload: result });
    }
  };
};
