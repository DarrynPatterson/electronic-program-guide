import React, { Component } from "react";
import Content from "./components/app/Content";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <Provider store={store}>
        <Content />
      </Provider>
    );
  }
}

export default App;