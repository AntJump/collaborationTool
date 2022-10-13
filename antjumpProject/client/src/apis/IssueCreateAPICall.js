import { POST_ISSUECREATE } from "../modules/IssueModule";

export const callIssueCreateAPI = ({ form }) => {
  const requestURL = `${process.env.REACT_APP_SERVER_IP}/issues`;

  return async (dispatch, getState) => {
    const result = await fetch(requestURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        issueName: form.issueName,
        issueSummary: form.issueSummary,
        issueExplanation: form.issueExplanation,
        issueDifficulty: form.issueDifficulty,
        issueCategory: form.issueCategory,
        issuePriority: form.issuePriority,
        projectId: form.projectId,
        memberId: form.memberId,
      }),
    }).then((response) => response.json());

    console.log(result);
    dispatch({ type: POST_ISSUECREATE, payload: result });
  };
};
