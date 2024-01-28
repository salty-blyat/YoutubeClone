// videoContext.js
import React, { createContext } from "react";

// consumer
const VideoContext = createContext();

// provider
export const VideoProvider = ({ children, video }) => {
  return (
    <VideoContext.Provider value={video}>
      {children}
    </VideoContext.Provider>
  );
};

export default VideoContext;
