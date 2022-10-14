import {
  GET_SPRINT,
  GET_SPRINTS,
  GET_SPRINT_LIST,
  POST_SPRINT,
  PUT_START_SPRINT,
  PUT_CLOSE_SPRINT,
  PATCH_SPRINT,
  DELETE_SPRINT,
} from "../modules/SprintModule";

export const callSelectSprintByIdAPI = (sprintId, projectId) => {
  const requestURL = `${process.env.REACT_APP_SERVER_IP}/sprints/${sprintId}?projectId=${projectId}`;

  return async (dispatch, getState) => {
    const result = await fetch(requestURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
    }).then((response) => response.json());

    console.log("[SprintAPICalls] callSprintAPI RESULT : ", result);

    dispatch({ type: GET_SPRINT, payload: result.data });
  };
};

export const callSelectSprintsByStatusAPI = (status, projectId) => {
  const requestURL = `${process.env.REACT_APP_SERVER_IP}/sprints/?status=${status}&projectId=${projectId}`;

  return async (dispatch, getState) => {
    const result = await fetch(requestURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
    }).then((response) => response.json());

    console.log("[SprintAPICalls] callSprintsByStatusAPI RESULT : ", result);

    dispatch({ type: GET_SPRINTS, payload: result.data });
  };
};

export const callSelectSprintListAPI = (projectId) => {
  const requestURL = `${process.env.REACT_APP_SERVER_IP}/sprints?projectId=${projectId}`;

  return async (dispatch, getState) => {
    const result = await fetch(requestURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
    }).then((response) => response.json());

    console.log("[SprintAPICalls] callSelectSprintListAPI RESULT : ", result);

    dispatch({ type: GET_SPRINT_LIST, payload: result.data });
  };
};

export const callCreateSprintAPI = (form) => {
  const requestURL = `${process.env.REACT_APP_SERVER_IP}/sprints`;

  return async (dispatch, getState) => {
    const result = await fetch(requestURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      body: JSON.stringify({
        fkProjectsSprints: form.fkProjectsSprints,
        fkMembersSprints: form.fkMembersSprints,
      }),
    }).then((response) => response.json());

    console.log("[SprintAPICalls] callCreateSprintAPI RESULT : ", result);

    dispatch({ type: POST_SPRINT, payload: result.data });
  };
};

export const callStartSprintAPI = (sprintId, form) => {
  const requestURL = `${process.env.REACT_APP_SERVER_IP}/sprints/${sprintId}/start`;

  return async (dispatch, getState) => {
    const result = await fetch(requestURL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      body: JSON.stringify({
        sprintName: form.sprintName,
        sprintStartDate: form.sprintStartDate,
        sprintEndDate: form.sprintEndDate,
        sprintGoal: form.sprintGoal,
        sprintAlarmCycle: form.sprintAlarmCycle,
        sprintStatus: form.sprintStatus,
      }),
    }).then((response) => response.json());

    console.log("[SprintAPICalls] callStartSprint RESULT : ", result);

    dispatch({ type: PUT_START_SPRINT, payload: result.data });
  };
};

export const callCloseSprintAPI = (sprintId, form) => {
  const requestURL = `${process.env.REACT_APP_SERVER_IP}/sprints/${sprintId}/close`;

  return async (dispatch, getState) => {
    const result = await fetch(requestURL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      body: JSON.stringify({
        sprintActualEndDate: form.sprintActualEndDate,
        sprintStatus: form.sprintStatus,
      }),
    }).then((response) => response.json());

    console.log("[SprintAPICalls] callCloseSprint RESULT : ", result);

    // dispatch({ type: PUT_CLOSE_SPRINT, payload: result.data });
  };
};

export const callModifySprintAlarmAPI = (sprintId, form) => {
  const requestURL = `${process.env.REACT_APP_SERVER_IP}/sprints/${sprintId}/alarm`;

  return async (dispatch, getState) => {
    const result = await fetch(requestURL, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
      body: JSON.stringify({
        sprintAlarmCycle: form.sprintAlarmCycle,
      }),
    }).then((response) => response.json());

    console.log("[SprintAPICalls] callModifySprintAlarm RESULT : ", result);

    dispatch({ type: PATCH_SPRINT, payload: result.data });
  };
};

export const callDeleteSprintAPI = (sprintId) => {
  const requestURL = `${process.env.REACT_APP_SERVER_IP}/sprints/${sprintId}`;

  return async (dispatch, getState) => {
    const result = await fetch(requestURL, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
    }).then((response) => response.json());

    console.log("[SprintAPICalls] callDeleteSprintAPI RESULT : ", result);

    dispatch({ type: DELETE_SPRINT, payload: result.data });
  };
};
