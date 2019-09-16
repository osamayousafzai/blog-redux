import { ADD_ARTICLE } from "../constants/action-types";

const initialState = [];

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default articleReducer;
