import axios from "axios";

export default {
  // Gets all books
  register: function() {
    return axios.get("/api/auth/register");
  },
  // Gets the book with the given id
  getRecipe: function(id) {
    return axios.get("api/ingredientSearch");
  },
  // Deletes the book with the given id
  getId: function(id) {
    return axios.delete("/api/:id");
  },
  // Saves a book to the database
  saveRecipes: function(recipeData) {
    return axios.post("/api/recipes", recipeData);
  },
  updateRecipes: function(recipeData){
    return axios.put("/api/recipes", recipeData);
  }

};
