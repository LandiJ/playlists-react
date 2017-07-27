import React, { Component } from "react";

let headerStyle = {
  textAlign: "center",
  height: "100px",
  color: "white",
  textShadow: "1px 1px 2px black",
  fontFamily: "decorative"
};

class Header extends Component {
  render() {
    return (
      <div style={headerStyle}>

        <h1 style={headerStyle}>Super Cool Playlist!</h1>
      </div>
    );
  }
}

export default Header;
