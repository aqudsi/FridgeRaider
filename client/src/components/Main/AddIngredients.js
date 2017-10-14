import React, {Component} from "react";
import DeleteBtn from "./DeleteBtn";
import {Button, ButtonToolbar, Panel, FormExample, ListGroup, ListGroupItem, FormGroup, FormControl, HelpBlock } from "react-bootstrap";
import {getRecipes} from "../../actions/recipeActions";

class AddIngredients extends Component {
  constructor(props, context) {
    super(props, context);
  }
  state = {
    ingredients: [],
    ingredient: ""
  };

  handleInputChange = event => {
    this.setState({ ingredient: event.target.value });
  };

  handleSubmitForm = event => {
    event.preventDefault();
    let ingredients = this.state.ingredients;
    ingredients.push(this.state.ingredient);
    this.setState({ingredients: ingredients, ingredient: ""});
    console.log(this.store);
  };

  deleteIngredient = event => {
    event.preventDefault();
    let array = this.state.ingredients;
    let index = array.indexOf(event.target.id);
    array.splice(index, 1);
    this.setState({ingredients: array, ingredient: ""});
  }

  // loadRecipes() {
  //   store.dispatch(getRecipes(this.state.ingredients))
  // }



  render(){
    return(
      <Panel collapsible defaultExpanded header="Add Ingredients">
        <form >
          <FormGroup
            controlId="formBasicText"
          >
            <FormControl
              type="text"
              value={this.state.ingredient}
              placeholder="Enter text"
              onChange={this.handleInputChange}
            />
            <FormControl.Feedback />
          </FormGroup>
        
      <ListGroup>
         {this.state.ingredients.map(ingredient => (
           <ListGroupItem>
             <strong>
              {ingredient}
              <DeleteBtn id={ingredient} onClick={this.deleteIngredient} />
             </strong>
            </ListGroupItem>
          ))}
      </ListGroup>
      <ButtonToolbar>
        <Button type="button" bsStyle="success" onClick={this.handleSubmitForm}>Save Ingredients</Button>
        <Button href="/main" type="button" bsStyle="info" onClick={this.loadRecipes}>Find Recipes</Button>
      </ButtonToolbar>
      </form>
    </Panel>
    )
  }
}

export default AddIngredients;