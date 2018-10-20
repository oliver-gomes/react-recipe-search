import React from "react";

const Form = props => {
  return (
    <form onSubmit={props.getRecipe}>
      <input type="text" name="recipeName" />
      <button>Search</button>
    </form>
  );
};

export default Form;
