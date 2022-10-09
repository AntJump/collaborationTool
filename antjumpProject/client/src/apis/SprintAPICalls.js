import { formControlClasses } from "@mui/material";
import { Form } from "react-router-dom";
import {
  GET_SPRINT,
  GET_SPRINTS,
  POST_SPRINT,
  PUT_START_SPRINT,
  PUT_CLOSE_SPRINT,
  PATCH_SPRINT,
  DELETE_SPRINT,
} from "../modules/SprintModule";

export const callSprintByIdAPI = ({ sprintId }) => {
  const requestURL = `${process.env.REACT_APP_SERVER_IP}/sprints/${sprintId}`;

  return async (dispatch, getState) => {
    const result = await fetch(requestURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
    }).then((response) => response.json());

    console.log("[SprintAPICalls] callSprintAPI RESULT : ", result);

    dispatch({ type: GET_SPRINT, payload: result });
  };
};

export const callSprintsByStatusAPI = ({ status }) => {
  const requestURL = `${process.env.REACT_APP_SERVER_IP}/sprints?status=${status}`;

  return async (dispatch, getState) => {
    const result = await fetch(requestURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
    }).then((response) => response.json());

    console.log("[SprintAPICalls] callSprintsByStatusAPI RESULT : ", result);

    dispatch({ type: GET_SPRINTS, payload: result });
  };
};

export const callCreateSprintAPI = () => {
  const requestURL = `${process.env.REACT_APP_SERVER_IP}/sprints`;

  return async (dispatch, getState) => {
    const result = await fetch(requestURL, {
      meethod: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      body: JSON.stringify({
        fkProjectsSprints: Form.fkProjectsSprints,
        fkMembersSprints: Form.fkMembersSprints,
      }),
    }).then((response) => response.json());

    console.log("[SprintAPICalls] callCreateSprintAPI RESULT : ", result);

    dispatch({ type: POST_SPRINT, payload: result });
  };
};
