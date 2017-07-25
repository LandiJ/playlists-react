import React, { Component } from "react";

export default class PlayListForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      songNotes: "",
      songArtist: "",
      songTitle: ""
    };
    handleUserNameInput = e => {
      var userName = this.state.userName;
      userName = e.target.value;
      this.setState({ userName });
    };
    handlesongTitleInput = e => {
      var songTitle = this.state.songTitle;
      songTitle = e.target.value;
      this.setState({ songTitle });
    };
    handleSongArtistInput = e => {
      var songArtist = this.state.songArtist;
      songArtist = e.target.value;
      this.setState({ songArtist });
    };
    handleSongNotesInput = e => {
      var songNotes = this.state.songNotes;
      songNotes = e.target.value;
      this.setState({ songNotes });
    };
    addToList = e => {
      e.preventDefault();
      console.log("HEEEEERREEE", e.target.value);
      this.setState({
        userName: this.state.userName,
        songTitle: e.target.value,
        songArtist: e.target.value,
        songNotes: e.target.value
      });

      let listItem = JSON.stringify(this.state);

      fetch(
        "https://tiny-lasagna-server.herokuapp.com/collections/playlisting",
        {
          method: "POST",
          body: listItem,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        }
      )
        .then(response => {
          console.log(response, "yay");
          console.log("USERNAME", this.state.userName);
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
  }
  render() {
    return (
      <div>
        <form onSubmit={this.addToList}>
          <input
            type="text"
            name="userName"
            onChange={this.handleUserNameInput}
          />
          <input type="text" defaultValue="song title" name="songTitle" />
          <input type="text" defaultValue="song artist" name="songArtist" />
          <input type="text" defaultValue="song notes" name="songNotes" />
          <input type="submit" />
        </form>

      </div>
    );
  }
}
