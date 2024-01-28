import React, { useEffect, useState } from "react";
import burger from "../assets/menuBurger.svg";
import YoutubeLogo from "../components/YoutubeLogo.jsx";
import searchLogo from "../assets/searchLogo.svg";
import micLogo from "../assets/micLogo.svg";
import vidCam from "../assets/vidCam.svg";
import notification from "../assets/notification.svg";
import profile from "../assets/profile.jpg";
import "../styles/style.scss";
import { useNavigate } from "react-router";
import Data from "../data/Data.json";
import { Link } from "react-router-dom";
import Close from "../assets/close.svg";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(-1);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  
  const handleClose = () => {
    setSearchTerm("");
    setSearchData([]);
  };

  useEffect(() => {
    // somefunction
    if (searchTerm !== "") {
      const newFilteredData = Data.items.filter((item) =>
        item.snippet.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchData(newFilteredData);
    }
  }, [searchTerm]);

  const handleKeyDown = (e) => {
    if (searchData && searchData.length > 0) {
      if (e.key === "ArrowUp" && selectedItem > 0) {
        setSelectedItem((prev) => prev - 1);
      } else if (e.key === "ArrowDown" && selectedItem < searchData.length - 1) {
        setSelectedItem((prev) => prev + 1);
      } else if (e.key === "Enter" && selectedItem >= 0) {
        const url = `/watch/${searchData[selectedItem].id}`;
        navigate(url);
      }
    }
  };


  return (
    <>
      <nav className="d-flex justify-content-between px-1 pt-2">
        {/* left group */}
        <div className="logo-group d-flex align-items-center">
          <span className="rounded rounded-circle mx-1 hover">
            <img className="icon" src={burger} alt="menu" />
          </span>
          <YoutubeLogo onClick={() => navigate("/")} />
        </div>

        {/* mid group */}
        <div className="serchbar d-flex align-items-center">
          <div className="search-group ">
            <form className="d-flex me-3 ">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control w-auto h-auto"
                  placeholder="searchbar"
                  value={searchTerm}
                  onChange={handleSearch}
                  onKeyDown={handleKeyDown}
                  tabIndex={0}
                  style={{borderTopLeftRadius: "2rem", borderBottomLeftRadius:"2rem"}}
                />

                <span                  style={{borderTopRightRadius: "2rem", borderBottomRightRadius:"2rem"}} className="input-group-text bg-dark-subtle" id="basic-addon1">
                  {searchTerm === "" ? (
                    <img src={searchLogo} alt="searchlogo" />
                  ) : (
                    <img onClick={handleClose} src={Close} alt="" />
                  )}
                </span>

                {/* suggestions */}
                {searchTerm !== "" ? (
                  <div className="suggestion-box h-auto" style={{ zIndex: 2 }}>
                    {searchData.slice(0, 2).map((data, index) => (
                      <Link
                        key={data.id}
                        to={`/watch/${data.id}`}
                        style={{
                          textDecoration: "none",
                          background:
                            index === selectedItem ? "lightgray" : "transparent",
                        }}
                        onClick={handleClose}
                      >
                        {data.snippet.title}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            </form>
          </div>

          <span className="rounded rounded-circle mx-1 hover">
            <img className="icon" src={micLogo} alt="mic" />
          </span>
        </div>

        {/* right group */}
        <ProfileGroup vidCam={vidCam} notification={notification} profile={profile}  />
      </nav>
    </>
  );
};

export default Navbar;

function ProfileGroup({vidCam, notification, profile}) {
      return (<div className="profile-group d-flex align-items-center">
          <span className="rounded rounded-circle mx-1 hover">
            <img className="icon " src={vidCam} alt="vidcam" />
          </span>
          <span className="rounded rounded-circle mx-1 hover">
            <img className="icon rounded rounded-circle" src={notification} alt="notification" />
          </span>
          <span className="rounded rounded-circle mx-1 hover">
            <img className="profile rounded rounded-circle" src={profile} alt="profile" />
          </span>
        </div>);
}
  