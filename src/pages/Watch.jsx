import React from "react";
import Like from "../assets/thumbUp.svg";
import Dislike from "../assets/thumbDown.svg";
import { useParams } from "react-router-dom";
import profile from "../assets/profile.jpg";
import More from "../assets/more.svg";
import { formatLikes } from "../utils/formatLikes";
import Data from "../data/Data.json";
import "../styles/style.scss";
import { RoundButton } from "../components/RoundButton";
import { DescriptionText } from "../components/DescriptionText";
import VideoListPanel from "../components/VideoListPanel";

export const Watch = () => {
  const { vidId } = useParams();
  const videoUrl = `https://www.youtube.com/embed/${vidId}?autoplay=1`;
  const currentVideo = Data.items.find((video) => video.id === vidId);
  const filteredVideos = Data.items.filter((video) => video.id !== vidId);
  const { channelTitle, title, description, publishedAt } =
    currentVideo.snippet;
  const likes = formatLikes(currentVideo.statistics.likeCount);
  const { viewCount } = currentVideo.statistics;

  return (
    <>
      <div className="container d-flex">
        <div className="container bg-dark col-9">
          <div className="videoPlayer w-auto">
            <VideoPlayer videoUrl={videoUrl} title={title} />
            {/* channelBanner */}
            <ChannelBanner channelTitle={channelTitle} likes={likes} />
          </div>

          <hr className="my-3" style={{ color: "white" }} />
          <div className="text-white">
            <DescriptionText
              description={description}
              date={publishedAt}
              views={viewCount}
            />
          </div>
        </div>
        <div className="col-3">
          <VideoListPanel videos={filteredVideos} />
        </div>
      </div>
    </>
  );
};

function ChannelBanner(props) {
  return (
    <div className="left-side">
      {/* left side */}
      <div className="channel d-flex align-items-center">
        <img
          className="rounded-circle"
          src={profile}
          style={{
            width: 40,
            height: 40,
          }}
          alt="Profile"
        />
        <div className="channel-info ms-2">
          <h5 className="text-white">{props.channelTitle}</h5>
          <p className="text-white">SubscriberCount</p>
        </div>
        <button className="btn bg-light rounded-pill ms-3">Subscribed</button>

        {/* right side */}
        <div className="ms-auto">
          <div className="btn-group btn-group-pills rounded-pill">
            <button className="btn btn-light" style={{borderTopLeftRadius: "2rem",borderBottomLeftRadius: "2rem"}}>
              <img src={Like} /> {props.likes}
            </button>
            <button className="btn btn-light" style={{borderTopRightRadius: "2rem", borderBottomRightRadius: "2rem"}}>
              <img src={Dislike} alt="" srcset="" />
            </button>
          </div>
          <RoundButton>Share</RoundButton>
          <RoundButton>
            <img src={More} />
          </RoundButton>
        </div>
      </div>
    </div>
  );
}

function VideoPlayer({ videoUrl, title }) {
  return (
    <>
      <div
        style={{
          position: "relative",
          paddingBottom: "56.25%",
          height: 0,
          overflow: "hidden",
        }}
      >
        <iframe
          title="YouTube Video"
          src={`${videoUrl}&rel=0`}
          allow="autoplay"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <h4 className="text-light my-2">{title}</h4>
    </>
  );
}

export default Watch;
