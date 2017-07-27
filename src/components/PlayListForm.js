import React, { Component } from "react";

let textStyle = {
  color: "white",
  fontSize: "40px",
  textShadow: "5px 5px 5px black"
};

export default class PlayListForm extends Component {
  constructor(props) {
    super(props);

    this.handleUserNameInput = this.handleUserNameInput.bind(this);
    this.handleSongTitleInput = this.handleSongTitleInput.bind(this);
    this.handleSongArtistInput = this.handleSongArtistInput.bind(this);
    this.handleSongNotesInput = this.handleSongNotesInput.bind(this);

    this.state = {
      userName: "",
      songNotes: "",
      songArtist: "",
      songTitle: ""
    };
  }
  handleUserNameInput(e) {
    var userName = this.state.userName;
    userName = e.target.value;
    this.setState({ userName });
  }
  handleSongTitleInput(e) {
    var songTitle = this.state.songTitle;
    songTitle = e.target.value;
    this.setState({ songTitle });
  }
  handleSongArtistInput(e) {
    var songArtist = this.state.songArtist;
    songArtist = e.target.value;
    this.setState({ songArtist });
  }
  handleSongNotesInput(e) {
    var songNotes = this.state.songNotes;
    songNotes = e.target.value;
    this.setState({ songNotes });
  }
  addToList = e => {
    e.preventDefault();
    console.log("HEEEEERREEE", e.target);
    this.setState({
      userName: this.state.userName,
      songTitle: this.state.songTitle,
      songArtist: this.state.songArtist,
      songNotes: this.state.songNotes
    });
    console.log("USERNAME", this.state.userName);

    let listItem = JSON.stringify(this.state);

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
      method: "POST",
      body: listItem,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        console.log(response, "yay");
      })
      .catch(err => {
        console.log(err, "boo!");
      });
    this.setState({
      userName: "",
      songNotes: "",
      songArtist: "",
      songTitle: ""
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.addToList}>
          <div className="form-group">
            <label style={textStyle}>Username:</label>
            <input
              className="form-control"
              type="text"
              name="userName"
              onChange={this.handleUserNameInput}
              value={this.state.userName}
            />
          </div>
          <div className="form-group">
            <label style={textStyle}>Song Title</label>
            <input
              className="form-control"
              type="text"
              name="songTitle"
              onChange={this.handleSongTitleInput}
              value={this.state.songTitle}
            />
          </div>
          <div className="form-group">
            <label style={textStyle}>Artist/Band Name</label>
            <input
              className="form-control"
              type="text"
              name="songArtist"
              onChange={this.handleSongArtistInput}
              value={this.state.songArtist}
            />
          </div>
          <div className="form-group">
            {/*<input
              className="form-control"
              type="text"
              name="songNotes"
              onChange={this.handleSongNotesInput}
              value={this.state.songNotes}
            />*/}
            <label style={textStyle}>Notes:</label>
            <textarea
              className="form-control"
              rows="5"
              id="songnotes"
              name="songNotes"
              onChange={this.handleSongNotesInput}
              value={this.state.songNotes}
            />
          </div>

          <input className="btn btn-primary" type="submit" />
        </form>

      </div>
    );
  }
}
