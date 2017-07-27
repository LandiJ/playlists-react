import React, { Component } from "react";
import "../styles/App.css";
import PlayList from "./PlayList";
import PlayListForm from "./PlayListForm";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <PlayListForm />
          </div>
          <div className="col-md-6 col-sm-6">
            <PlayList />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
