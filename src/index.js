import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Main from "./organisms/Main";
import rootReducer from "./molecules/reducers";


const store = createStore(rootReducer);

// const styles = {
//   fontFamily: "sans-serif",
//   textAlign: "center"
// };

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById("root")
);
