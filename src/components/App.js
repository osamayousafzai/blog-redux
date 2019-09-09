import React, { Component } from "react";
import "../styles/App.css";
import List from "../containers/List";

class App extends Component {
  render() {
    return (
      <div className="container">
        <List />
      </div>
    );
  }
}

export default App;
