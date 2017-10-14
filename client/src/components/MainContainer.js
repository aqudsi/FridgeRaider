import React, { Component, PropTypes } from "react";
import AddIngredients from "./Main/AddIngredients";
import StaticNavbar from "./Main/StaticNavbar";
import DisplayRecipes from "./Main/DisplayRecipes";
import Login from "./Profile/Login";
import "./Main/MainPage.css";  
import {connect} from 'react-redux';  
import * as recipeActions from '../actions/recipeActions';




class MainContainer extends Component {

  render() {
    return (
      <div>
      <div className="navBar">
        <StaticNavbar />
        </div>
        <div className="col-lg-6">
          <AddIngredients />
        </div>
        <div className="col-lg-6">
          <DisplayRecipes />
          </div>
       
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {

} 

MainContainer.propTypes = {

  ingredients:PropTypes.array.isRequired,
  recipes: PropTypes.array.isRequired

};

export default connect(mapStateToProps)(MainContainer);  
