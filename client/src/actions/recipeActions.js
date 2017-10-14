import API from "../utils/API.js";
import * as types from "./actionTypes";

export function receiveRecipes(recipes) {
	return {type: types.REQUEST_RECIPES, recipes}
} 

export function getRecipes(ingredients) {
	return function(dispatch) {
		return API.getRecipe({ingredients: ingredients}).then(recipes => {
			dispatch(receiveRecipes(recipes));
		}).catch(error => {
			throw(error)
		});
	};
}