import { createAction, handleActions } from "redux-actions";

// 프로젝트 정보와 관련된 리덕스 모듈 설정

// 초기 state 값 설정
const initState = {
  writtenDate: "2022-07-15",
  //   likedTitle: "좋았던 점",
  //   learnedTitle: "배웠던 점",
  //   lackedTitle: "부족했던 점",
};

// 액션 타입 설정
export const GET_DATES = "remembrance/GET_DATES";
// export const GET_TITLES = "remembrance/GET_TITLES";

// 액션 함수 생성
// 프로젝트 목록 관련 액션 함수
const actions = createAction({
  [GET_DATES]: () => {},
  //   [GET_TITLES]: () => {},
});

// 리듀서 함수 설정
export const remembranceReducer = handleActions(
  {
    [GET_DATES]: (state, { payload }) => {
      console.log("get written date", payload);
      return payload;
    },
    // [GET_TITLES]: (state, { payload }) => {
    //   console.log("get remembrance titles:", payload);
    //   return payload;
    // },
  },
  initState
);
