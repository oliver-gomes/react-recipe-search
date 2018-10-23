import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import Recipes from "./components/Recipes";

// const API_KEY_f2f = "a0fca3677f15c289d6edbdae20a60f6c";

// `https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`

const API_KEY_ED = "7012144cc2fedba016072774b6cc64dd";

const APP_ID = "44f58ae1";

class App extends Component {
  state = {
    recipes: []
  };

  getRecipe = async e => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(
      `https://api.edamam.com/search?q=${recipeName}&app_id=${APP_ID}&app_key=${API_KEY_ED}`
    );
    const data = await api_call.json();
    console.log(data);
    this.setState({
      recipes: data.hits
    });
    console.log(this.state.recipes);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
