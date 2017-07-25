import React, { Component } from "react";
import "../styles/App.css";
import PlayList from "./PlayList";
import PlayListForm from "./PlayListForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PlayList />
        <PlayListForm />

      </div>
    );
  }
}

export default App;
