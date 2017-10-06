import React, {Component} from "react";
import {Grid, Row, Col, Thumbnail, Button, Panel} from "react-bootstrap";
import DisplayRecipeInfo from "../Profile/RecipeInfo";

var recipes = [
{
    "title": "Choco Peanut Butter Banana Soft Serve",
    "spoonacularID": 511370,
    "servings": 1,
    "image": "https://spoonacular.com/recipeImages/511370-556x370.jpg",
    "spoonacularURL": "https://spoonacular.com/choco-peanut-butter-banana-soft-serve-511370",
    "instructions": [
      {
        "number": 1,
        "step": "Place everything in a mini food processor or blender, and blend until smooth. You may have to scrape down the sides of the processor a couple of times."
      }
    ],
    "ingredients": [
      {
        "name": "peanut butter",
        "qty": 1,
        "unit": "Tbsp"
      },
      {
        "name": "unsweetened cocoa powder",
        "qty": 1,
        "unit": "tsp"
      }
    ]
  }
]


class DisplayFavoriteRecipes extends Component {
state = {
  recipes
}

 componentDidMount(){
      
    }
  render() {
    return (

  
  <Panel collapsible defaultExpanded header="Chad's Favorite Recipes">  
    <Grid>
    <Row>
    {this.state.recipes.map(recipe => (
    <Col xs={4}>
      <Thumbnail src={recipe.image} alt="100x100">
        <p>{recipe.title}</p>
        <p>
          <DisplayRecipeInfo
          title={recipe.title}
          instructions={recipe.instructions}
          ingredients={recipe.ingredients}
          image={recipe.image}
          />
        </p>
      </Thumbnail>
    </Col>
    ))}
    </Row> 
   </Grid>
  </Panel>
  )
  }

 } 
 


export default DisplayFavoriteRecipes;