import React from "react";
import { addTodo } from "../actions/todo.actions";
import { connect } from "react-redux";
import CardButton from "../../atoms/CardButton";

const AddTodo = ({ dispatch }) => {
  let input;
  let onClick = (e) => {
    if (input.value.trim() !== "") {
      dispatch(addTodo(input.value.trim()));
      input.value=""
    }
  };
  return (
    <React.Fragment>
      <input type="text" ref={node => (input = node)} style={{ marginRight: "4px", height: "25px" }}/>
      <CardButton variant="contained" color="primary" onClick={onClick} style={{ marginRight: "4px" , color: "black"}}>
        Add Todo
      </CardButton>
    </React.Fragment>
  );
};

export default connect()(AddTodo);