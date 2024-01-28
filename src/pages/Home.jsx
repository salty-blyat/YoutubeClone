import React from "react";
import VideoCard from "../components/VideoCard";
import Data from "../data/Data.json";

const Home = () => {
const videos = Data.items;
  const videoCards = videos.map((video, index) => (
    <div key={video.id} 
    className={`col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2 ${index % 4 === 0 ? "mb-4" : ""}`}>
      <VideoCard video={video} key={video.id} />
    </div>
  ));
  return (
    <>
      <div className="d-flex" style={{ width: "100%" }}>
        <div className="gx-1 row">{videoCards}</div>
      </div>
    </>
  );
};
export default Home;
