import { ADD_ARTICLE } from "../constants/action-types";

const initialState = [
  /* {
    id: 1,
    title: "Article One"
  },
  {
    id: 2,
    title: "Article Two"
  } */
];

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default articleReducer;
