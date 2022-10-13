import {
  GET_REMEMBRANCES,
  GET_ARTICLES,
  POST_REMEMBRANCE,
  POST_ARTICLES,
  PUT_ARTICLE,
} from "../modules/RemembranceModule";

export const callSelectRemembrancesAPI = (fkSprintsRemembrances) => {
  const requestURL = `${process.env.REACT_APP_SERVER_IP}/remembrances?fkSprintsRemembrances=${fkSprintsRemembrances}`;

  return async (dispatch, getState) => {
    const result = await fetch(requestURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
    }).then((response) => response.json());

    console.log(
      "[RemembranceAPICalls] callSelectRemembrancesAPI RESULT : ",
      result
    );

    dispatch({ type: GET_REMEMBRANCES, payload: result.data });
  };
};

export const callSelectArticleByRemembranceIdAPI = (id, articleType) => {
  const requestURL = `${process.env.REACT_APP_SERVER_IP}/${id}?articleType=${articleType}`;

  return async (dispatch, getState) => {
    const result = await fetch(requestURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
    }).then((response) => response.json());

    console.log(
      "[RemembranceAPICalls] callSelectArticleByRemembranceIdAPI RESULT : ",
      result
    );

    dispatch({ type: GET_ARTICLES, payload: result.data });
  };
};

export const callCreateRemembranceAPI = (fkSprintsRemembrances) => {
  const requestURL = `${process.env.REACT_APP_SERVER_IP}/remembrances?fkSprintsRemembrances=${fkSprintsRemembrances}`;

  return async (dispatch, getState) => {
    const result = await fetch(requestURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
    }).then((response) => response.json());

    console.log(
      "[RemembranceAPICalls] callCreateRemembranceAPI RESULT : ",
      result
    );

    dispatch({ type: POST_REMEMBRANCE });
  };
};

export const callCreateArticlesAPI = (sprintId) => {
  const requestURL = `${process.env.REACT_APP_SERVER_IP}/remembrances/?sprintId=${sprintId}`;

  return async (dispatch, getState) => {
    const result = await fetch(requestURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
    }).then((response) => response.json());

    console.log(
      "[RemembranceAPICalls] callCreateArticlesAPI RESULT : ",
      result
    );

    dispatch({ type: POST_ARTICLES, payload: result.data });
  };
};

export const callUpdateArticleAPI = (id, articleId, form) => {
  const requestURL = `${process.env.REACT_APP_SERVER_IP}/${id}?articleId=${articleId}`;

  return async (dispatch, getState) => {
    const result = await fetch(requestURL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      body: JSON.stringify({
        articleTitle: form.articleTitle,
        articleContent: form.articleContent,
      }),
    }).then((response) => response.json());

    console.log("[RemembranceAPICalls] callUpdateArticleAPI RESULT : ", result);

    dispatch({ type: PUT_ARTICLE, payload: result.data });
  };
};
