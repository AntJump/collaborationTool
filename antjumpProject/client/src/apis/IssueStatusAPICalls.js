import { UPDATE_ISSUES } from "../modules/IssueModule";

export const callIssueStatusAPI = (issueId) => {
  const requestURL = `${process.env.REACT_APP_SERVER_IP}/issues/` + issueId;
  return async (dispatch, getState) => {
    const result = await fetch(requestURL, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());

    console.log(result);
    console.log("[FAQAPICalls] callFAQListAPI RESULT : ", result.data);

    // dispatch({ type: , payload: result.data });
  };
};
