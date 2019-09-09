import { ADD_ARTICLE } from "../constants/action-types";

export const addArticle = text => {
  return {
    type: ADD_ARTICLE,
    payload: text
  };
};
