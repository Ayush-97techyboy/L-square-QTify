// import { padding } from "@mui/system";
import React from "react";

const MyComponent = () => {
  const myStyle = {
    // marginRight: "10px",
    paddingTop: "1em",
    paddingRight: "3em",
    paddingBottom: "1em",
    paddingLeft: "3em",
  };

  const hStyle = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "1em",
  };

  return (
    <div style={myStyle}>
      <h2 style={hStyle}>Qtify Player</h2>
      <iframe
        src="https://open.spotify.com/embed/playlist/3bmSu6JA12HZHDji7FCTmm?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Spotify Playlist"
      ></iframe>
    </div>
  );
};

export default MyComponent;
