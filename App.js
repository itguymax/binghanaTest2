import React, { Component } from "react";
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import reducer from './src/redux/reducers'
import Router from "./src/Router";

class App extends Component {
  render() {
   // const store = createStore(reducer, {}, applyMiddleware(ReduxThunk));
    return (
      
        <Router />
     
    );
  }
}

export default App;
