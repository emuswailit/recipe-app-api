import { GET_RECIPES, DELETE_RECIPE, ADD_RECIPE } from "../actions/types.js";

const initialState = {
  recipes: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
      };
    case DELETE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.filter((recipe) => recipe.id !== action.payload),
      };
    case ADD_RECIPE:
      return {
        ...state,
        recipe: [...state.recipes, action.payload],
      };
    default:
      return state;
  }
}
