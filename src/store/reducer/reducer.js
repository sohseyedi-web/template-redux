import { EXAM_TYPE } from "../action/actionType";

const initialState = {
  exams: [],
};

export const examReducer = (state = initialState, action) => {
  switch (action.type) {
    case EXAM_TYPE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
