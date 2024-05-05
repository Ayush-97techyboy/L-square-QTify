// import { display } from "@mui/system";
import React from "react";

const MyComponent = () => {
  //   const spacing = 6; // Assume spacing is calculated dynamically
  const myStyle = {
    // paddingTop: "1em",
    paddingRight: "3em",
    paddingBottom: "1em",
    paddingLeft: "3em",
    // marginTop: "1em",
    marginBottom: "3.5em",
  };

  const headingQ = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "white",
    justifyContent: "center",
    display: "flex",
  };

  return (
    <div style={myStyle}>
      <h5 style={headingQ}>Qtify Player</h5>
      <iframe
        src="https://open.spotify.com/embed/playlist/3bmSu6JA12HZHDji7FCTmm?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="qtifyPlayer"
      >
        Qtify Player
      </iframe>
    </div>
  );
};

export default MyComponent;
