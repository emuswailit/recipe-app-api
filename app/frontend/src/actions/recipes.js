import axios from "axios";
import { GET_RECIPES, DELETE_RECIPE, ADD_RECIPE } from "./types";

//GET RECIPES
export const getRecipes = () => (dispatch) => {
  axios
    .get("/api/recipe/recipes/")
    .then((res) => {
      dispatch({
        type: GET_RECIPES,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

//DELETE RECIPE
export const deleteRecipe = (id) => (dispatch) => {
  axios
    .delete(`/api/recipe/recipes/${id}/`)
    .then((res) => {
      dispatch({
        type: DELETE_RECIPE,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// ADD LEAD
export const addRecipe = (recipe) => (dispatch, getState) => {
  axios
    .post("/api/recipe/recipes/", recipe)
    .then((res) => {
      dispatch({
        type: ADD_RECIPE,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
