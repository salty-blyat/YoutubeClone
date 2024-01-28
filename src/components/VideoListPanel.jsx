import React from "react";
import { GetTime } from "../utils/getTime";
import { GetViews } from "../utils/GetViews";
import { Link } from "react-router-dom";

const VideoListPanel = ({ videos }) => {
  const videoList = videos.map((video) => (
    <div key={video.id}>
      <VideoList video={video} />
    </div>
  ));

  return <>{videoList}</>;
};

const VideoList = ({ video }) => {
  const { channelTitle, title, thumbnails, publishedAt } = video.snippet;
  const { viewCount } = video.statistics;
  return (
    <>
    <Link to={`/watch/${video.id}`} style={{ textDecoration: "none", color: "black" }}>
      <div className="d-flex  border border-3">
        {/* Image thumbnail */}
        <div className="align-self-center">
          <img
            className="rounded-2 object-fit-center"
            src={thumbnails.default.url}
            style={{
              height: thumbnails.default.height,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>

        {/* Title Thumbnail */}
        <div className="text-container ms-1 py-1">
          <div className="video-body">
            <h6 className="text-collapse-2" style={{fontSize: 14}}>{title}</h6>
          </div>
          <h6>{channelTitle}</h6>
          <p style={{fontSize: 12}}>
            <GetViews view={viewCount} /> views &#x2022;{" "}
            <GetTime date={publishedAt} />
          </p>
        </div>
      </div>
      </Link>
    </>
  );
};

export default VideoListPanel;
