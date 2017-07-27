import React, { Component } from "react";

class PlayListItem extends Component {
  render() {
    let music = this.props.songs.map(song => {
      return (
        <div key={song._id} className="card-block">
          <div key={song._id} className="card list-group-flush">
            <p className="list-group-item">User: {song.userName}</p>
            <p className="list-group-item">Artist/Band: {song.songArtist}</p>
            <p className="list-group-item">Title: {song.songTitle}</p>
            <p className="list-group-item">Notes: {song.songNotes}</p>

          </div>
        </div>
      );
    });
    return (
      <div>
        {music}
      </div>
    );
  }
}

export default PlayListItem;
