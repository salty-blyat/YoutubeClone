import React from "react";
import { useLocation } from "react-router-dom";
import home from "../assets/home.svg";
import short from "../assets/short.svg";
import subscription from "../assets/subscription.svg";
import playlist from "../assets/playlist.svg";
import '../styles/style.scss';
import homeActive from '../assets/homeActive.svg';
import shortActive from  '../assets/shortActive.svg';
import subscriptionActive from '../assets/subscriptionActive.svg';
import playlistActive from '../assets/playlistActive.svg';
import { CustomLink } from "../utils/CustomLink";

const SideBar = () => {
  const location = useLocation();
  // Check if the current URL starts with "/watch/"
  const isWatchPage = location.pathname.startsWith("/watch") || location.pathname === "/";
  return (
    <div style={{ fontSize: "0.75rem" }}>
      <CustomLink to="/" icon={isWatchPage ? homeActive : home} iconActive={homeActive} text="Home"/>
      <CustomLink to="/Short" icon={short} iconActive={shortActive} text={"Short"}/>
      <CustomLink to="/Subscription" icon={subscription} iconActive={subscriptionActive} text={"Subscription"}/>
      <CustomLink to="/You" icon={playlist} iconActive={playlistActive} text={"You"}/>
    </div>
  );
};

export default SideBar;
