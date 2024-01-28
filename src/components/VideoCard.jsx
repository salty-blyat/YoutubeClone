import React, { useState } from "react";
import placeholder from "../assets/placeholder.jpg";
import profile from "../assets/profile.jpg";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  //video thumbnail on the Home page
  const { title, channelTitle} = video.snippet;
  const { url } = video.snippet.thumbnails.high;

  return (
    <>
      <Link to={`/watch/${video.id}`} style={{ textDecoration: 'none' }}>
        <div className="card ms-1" style={{ minHeight: "18.5rem" }}>

          {/* Image on the Top */}
          <img
            className="card-img-top bg-dark rounded-2 object-fit-cover"
            src={url || placeholder}
            style={{ height: "11.25rem" }}
          />


          {/* Profile */}
          <div className="d-flex pt-2" style={{ height: "4.875rem" }}>
            <img
              className="rounded-circle"
              src={profile}
              style={{ width: 68, height: 68 }}
            />

          {/* Video title */}
            
            <div className="px-2">
              <h6
                className="card-title text-collapse-3 overflow-hidden"
              >{title}</h6>
              <p className="card-subtitle mb-2 text-muted" style={{ fontSize: 12 }}>
                {channelTitle}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default VideoCard;
