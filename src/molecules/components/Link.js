

import React from "react";
import { connect } from "react-redux";
import CardButton from "../../atoms/CardButton";
import { filter } from "../actions/todo.actions";


const Link = ({ active, children, onClick }) => {
  return (
    <CardButton onClick={onClick} disabled={active} style={{ marginLeft: "4px" , color: "black"}}>
      {children}
    </CardButton>
  );
};
const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    console.log("dispatch " + ownProps.filter);
    dispatch(filter(ownProps.filter));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);