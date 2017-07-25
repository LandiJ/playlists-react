import React, { Component } from "react";

class PlayListItem extends Component {
  render() {
    let music = this.props.songs.map(song => {
      return (
        <div key={song._id}>
          <div key={song._id} className="card">
            {song.songTitle}
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
